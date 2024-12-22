<script setup lang="ts">
import SignInGate from '@/components/SignInGate.vue';
import { getManagedRings, getRing, getRingsUserIsAMemberOf } from '@/lib/atproto/atweb-unauthed';
import { getDidAndPds } from '@/lib/atproto/pds-helpers';
import { user, type User } from '@/lib/atproto/signed-in-user';
import { watchImmediateAsync } from '@/lib/vue-utils';
import type { IoGithubAtwebRing } from '@atcute/client/lexicons';
import { AtUri } from '@atproto/syntax';
import { computedAsync, type ElementOf } from '@vueuse/core';
import { computed, ref, shallowRef, watch, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import type { RouteLocationNormalizedLoadedGeneric } from 'vue-router';

type Ring = ElementOf<Awaited<ReturnType<typeof getManagedRings>>>;

const rings = ref<Ring[]>();

const route = useRoute();
await watchImmediateAsync(
    [route, user],
    async ([route, user]) => {
        if (!user) return;

        await reloadRings();
    },
);

const createRingModalOpen = ref(false);
const createRingName = ref('');
const createRingMainPage = ref('');

async function createRing() {
    await user.value!.client.createRing(
        createRingName.value,
        createRingMainPage.value,
    );

    await reloadRings();
}

const selectedRing = ref<Ring>();

const memberNames = computedAsync(async () => {
    const members = selectedRing.value?.members?.map(e => e.membership);
    if (!members) {
        return {};
    }

    const names: Record<string, string> = {};

    for (const membership of members) {
        const { did, didDocument } = await getDidAndPds(new AtUri(membership).host);
        names[did] = names[membership] = didDocument.alsoKnownAs?.[0]?.replace('at://', '') ?? did;
    }

    return names;
});

function getMemberName(did: string | AtUri) {
    if (typeof did === 'string' && did.startsWith('at://')) did = new AtUri(did);
    if (typeof did !== 'string') did = did.host;
    return memberNames.value?.[did] ?? did;
}

const kickMemberModal = ref<{
    did: string,
    displayName: string,
    ringName: string,
    ring: AtUri,
}>();

const kickMemberModalOpen = computed<boolean>({
    get() {
        return kickMemberModal.value !== undefined;
    },
    set(newValue) {
        if (!newValue) {
            setTimeout(() => kickMemberModal.value = undefined, 0);
        }
    }
});

async function kickMember(did: string, fromRing: AtUri) {
    const ring = await getRing(fromRing.host, fromRing.rkey);
    const idx = ring.members?.findIndex(member => new AtUri(member.membership).host === did);
    if (idx !== undefined && idx !== -1) {
        ring.members!.splice(idx, 1);
    }

    await user.value!.client.updateRing(fromRing.rkey, {
        $type: "io.github.atweb.ring",
        createdAt: ring.createdAt,
        name: ring.name,
        members: ring.members,
        // TODO add new properties here
    }, ring.cid);

    await reloadRings();
}

const deleteRingModal = ref<{
    ringName: string,
    ring: AtUri,
}>();

const deleteRingModalOpen = computed<boolean>({
    get() {
        return deleteRingModal.value !== undefined;
    },
    set(newValue) {
        if (!newValue) {
            setTimeout(() => deleteRingModal.value = undefined, 0);
        }
    }
});

async function deleteRing(rkey: string) {
    await user.value!.client.deleteRing(rkey);

    await reloadRings();
}

async function reloadRings() {
    rings.value = [
        ...await getManagedRings(user.value!.did),
        ...await getRingsUserIsAMemberOf(user.value!.did),
    ];
}

</script>

<template>
    <div class="main">
        <SignInGate>
            <VaModal
                v-model="createRingModalOpen"
                ok-text="Create"
                cancel-text="Cancel"
                @ok="createRing()"
            >
                <VaInput v-model="createRingName" label="@ring Name" />
                <VaInput v-model="createRingMainPage" label="My Member Page" placeholder="index.mdx" style="margin-left: 0.5rem" />
            </VaModal>

            <VaModal
                v-model="kickMemberModalOpen"
                ok-text="Yes, kick them"
                cancel-text="No, go back"
                @ok="kickMember(kickMemberModal!.did, kickMemberModal!.ring)"
            >
                <b>Really</b> kick @{{kickMemberModal?.displayName}} from {{kickMemberModal?.ringName}}?
            </VaModal>

            <VaModal
                v-model="deleteRingModalOpen"
                ok-text="Yes, delete it"
                cancel-text="No, go back"
                @ok="deleteRing(deleteRingModal!.ring.rkey)"
            >
                <b>Really</b> delete {{deleteRingModal!.ringName}}? There's no going back!
            </VaModal>

            <div>
                <VaButton @click="createRingModalOpen = true">Create new @ring</VaButton>
            </div>

            <div style="margin-top: 1rem;">
                <VaSelect
                    v-model="selectedRing"
                    :options="rings"
                    text-by="name"
                    :track-by="(option) => (option! as Record<string, any>).uri.rkey"
                    placeholder="Select an @ring to edit it"
                />
            </div>

            <div v-if="selectedRing">
                <h2 class="va-h2">{{ selectedRing.name }}</h2>
                <p>( <code>{{ selectedRing.uri }}</code> )</p>
                <p><b>{{ selectedRing.members?.length ?? 0 }}</b> member(s)</p>
                <p>Managed by <a class="va-link" :href="`https://bsky.app/profile/${selectedRing.uri.host}`">@{{ getMemberName(selectedRing.uri) }}</a></p>
                <div v-for="member in selectedRing.members" :key="member.membership" class="ring-member-card va-gutter-2">
                    <div class="va-gutter-2">
                        <bluesky-profile-card :actor="getMemberName(member.membership)" allow-unauthenticated="true">
                        </bluesky-profile-card>
                    </div>
                    <div class="va-gutter-2">
                        <VaButton v-if="user && selectedRing.uri.host === user.did" @click="
                            kickMemberModal = {
                                did: new AtUri(member.membership).host,
                                displayName: getMemberName(member.membership),
                                ringName: selectedRing.name,
                                ring: selectedRing.uri,
                            };
                        ">
                            Kick @{{ getMemberName(member.membership) }}
                        </VaButton>
                    </div>
                </div>

                <hr class="va-hr" />
                <div class="va-gutter-2">
                    <VaButton v-if="user && selectedRing.uri.host === user.did">
                        Invite new member
                    </VaButton>
                </div>
                <div class="va-gutter-2">
                    <VaButton v-if="user && selectedRing.uri.host === user.did" @click="
                        deleteRingModal = {
                            ringName: selectedRing.name,
                            ring: selectedRing.uri,
                        };
                    ">
                        Delete {{ selectedRing.name }}
                    </VaButton>
                </div>
            </div>
        </SignInGate>
    </div>
</template>

<style lang="scss" scoped>
.main {
    padding: 0 1rem;
}
.ring-member-card::v-deep .bluesky-embed {
    margin: 0;
}
</style>

<style lang="scss">
fieldset { // replace default UA stylesheet
    margin-inline: 0;
    padding: 0;
}
</style>
