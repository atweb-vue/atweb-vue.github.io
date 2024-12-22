<script setup lang="ts">
import SignInGate from '@/components/SignInGate.vue';
import { getRing, getRingsUserIsAMemberOf } from '@/lib/atproto/atweb-unauthed';
import { resolveHandleAnonymously } from '@/lib/atproto/handles/resolve';
import { getDidAndPds } from '@/lib/atproto/pds-helpers';
import { rkeyToFilepath } from '@/lib/atproto/rkey';
import { user, type User } from '@/lib/atproto/signed-in-user';
import { resolveRoute, watchImmediateAsync } from '@/lib/vue-utils';
import router from '@/router';
import type { IoGithubAtwebRing } from '@atcute/client/lexicons';
import { now as tidNow } from '@atcute/tid';
import { AtUri } from '@atproto/syntax';
import { computedAsync, useBrowserLocation, useClipboard, type ElementOf } from '@vueuse/core';
import { computed, ref, shallowRef, watch, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import type { RouteLocationAsPath, RouteLocationAsRelative, RouteLocationAsString, RouteLocationNormalizedLoadedGeneric } from 'vue-router';
import { useModal } from 'vuestic-ui';

type Ring = Awaited<ReturnType<typeof getRing>>;

const rings = ref<(Ring & { mainPage: AtUri })[]>();
const route = useRoute('/rings');
const selectedRing = ref<(Ring & { mainPage: AtUri })>();

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

const memberNames = computedAsync(async () => {
    const members = selectedRing.value?.members?.map(e => e.membership);
    if (!members) {
        return {};
    }

    const names: Record<string, string> = {};

    for (const membership of members) {
        const { did, didDocument } = await getDidAndPds(membership.host);
        names[did] = names[membership.toString()] = didDocument.alsoKnownAs?.[0]?.replace('at://', '') ?? did;
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
    ring: Ring,
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

async function kickMember(did: string, fromRing: Ring) {
    const members = [...fromRing.members];
    const idx = members?.findIndex(member => member.membership.host === did);
    if (idx !== undefined && idx !== -1) {
        members!.splice(idx, 1);

        await user.value!.client.updateRingMembers(fromRing.uri.rkey, members, fromRing.cid);

        await reloadRings();
    }
}

const deleteRingModal = ref<{
    ring: Ring,
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

const addMemberModal = ref<{
    ring: Ring,
    handle?: string,
    closed?: boolean,
}>();
const addMemberModalOpen = computed<boolean>({
    get() {
        return addMemberModal.value !== undefined;
    },
    set(newValue) {
        if (!newValue) {
            setTimeout(() => addMemberModal.value = undefined, 0);
        }
    }
});

const invitedModal = ref<{
    ring: Ring,
    handle: string,
    inviteRkey?: string,
}>();
const invitedModalOpen = computed<boolean>({
    get() {
        return invitedModal.value !== undefined;
    },
    set(newValue) {
        if (!newValue) {
            setTimeout(() => invitedModal.value = undefined, 0);
        }
    }
});

async function addMember(ring: Ring, handle: string) {
    const did = await resolveHandleAnonymously(handle);

    const idx = ring.members?.findIndex(member => member.membership.host === did);
    if (idx !== undefined && idx !== -1) {
        invitedModal.value = {
            ring,
            handle,
            inviteRkey: undefined,
        };
        return undefined; // member already invited
    }

    await user.value!.client.updateRingMembers(
        ring.uri.rkey,
        [...ring.members, AtUri.make(did, 'io.github.atweb.ringMembership', ring.uri.rkey)],
        ring.cid
    );

    invitedModal.value = {
        ring,
        handle,
        inviteRkey: ring.uri.rkey,
    };

    await reloadRings();
}

async function reloadRings() {
    rings.value = [
        ...await getRingsUserIsAMemberOf(user.value!.did),
    ];
    if (selectedRing.value) {
        selectedRing.value = rings.value.find(e => e.uri === selectedRing.value!.uri);
    }
}

const { copy } = useClipboard();
function copyRingMdx(ring: Ring) {
    copy(
        `<RingLink direction="previous" ring-uri="${ring.uri.toString()}" self="${user.value!.did}">prev</RingLink>\n` +
            `${ring.name}\n` +
            `<RingLink direction="next" ring-uri="${ring.uri.toString()}" self="${user.value!.did}">next</RingLink>`
    );
}

const mainPageLink = ref('');
watch(selectedRing, selectedRing => {
    if (!selectedRing) return;
    mainPageLink.value = rkeyToFilepath(selectedRing.mainPage.rkey);
});

async function setMainPage(ring: (Ring & { mainPage: AtUri }), mainPageLink: string) {
    user.value!.client.setMainPage(
        ring.members.find(e => e.membership.host === user.value!.did)!.membership.rkey,
        mainPageLink
    );
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
                <b>Really</b> kick @{{kickMemberModal?.displayName}} from {{kickMemberModal?.ring.name}}?
            </VaModal>

            <VaModal
                v-model="deleteRingModalOpen"
                ok-text="Yes, delete it"
                cancel-text="No, go back"
                @ok="deleteRing(deleteRingModal!.ring.uri.rkey)"
            >
                <b>Really</b> delete {{deleteRingModal!.ring.name}}? There's no going back!
            </VaModal>

            <VaModal
                :model-value="addMemberModalOpen"
                ok-text="Send invite"
                cancel-text="Cancel"
                @ok="addMember(addMemberModal!.ring, addMemberModal!.handle!)"
            >
                <VaInput v-model="addMemberModal!.handle" label="@handle to invite" placeholder="someone.bsky.social" />
            </VaModal>

            <VaModal
                v-model="invitedModalOpen"
                :hide-default-actions="true"
                :close-button="true"
            >
                <div v-if="invitedModal!.inviteRkey">
                    Send this invite link to @{{ invitedModal!.handle }} so they can join your webring.
                    <pre>{{ resolveRoute(`/invited/${invitedModal!.ring.uri.host}/${invitedModal!.inviteRkey}`) }}</pre>
                </div>
                <div v-else>
                    Account is already invited.
                </div>
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

                <div class="va-gutter-2">
                    <VaButton @click="copyRingMdx(selectedRing)">Copy ring MDX code</VaButton>
                </div>

                <div class="va-gutter-2">
                    <VaInput v-model="mainPageLink" label="My main page"></VaInput>
                    <VaButton @click="setMainPage(selectedRing, mainPageLink)" class="set-my-main-page-button">Set my main page</VaButton>
                </div>

                <div v-for="member in selectedRing.members" :key="member.membership.toString()" class="ring-member-card va-gutter-2">
                    <div class="va-gutter-2">
                        <bluesky-profile-card :actor="getMemberName(member.membership)" allow-unauthenticated="true">
                        </bluesky-profile-card>
                        <div v-if="!member.isMember">Waiting for invite response</div>
                    </div>
                    <div class="va-gutter-2">
                        <VaButton v-if="user && selectedRing.uri.host === user.did" @click="
                            kickMemberModal = {
                                did: member.membership.host,
                                displayName: getMemberName(member.membership),
                                ring: selectedRing,
                            };
                        ">
                            Kick @{{ getMemberName(member.membership) }}
                        </VaButton>
                    </div>
                </div>

                <hr class="va-hr" />
                <div class="va-gutter-2">
                    <VaButton v-if="user && selectedRing.uri.host === user.did" @click="
                        addMemberModal = {
                            ring: selectedRing,
                        }
                    ">
                        Invite new member
                    </VaButton>
                </div>
                <div class="va-gutter-2">
                    <VaButton v-if="user && selectedRing.uri.host === user.did" @click="
                        deleteRingModal = {
                            ring: selectedRing,
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
.ring-member-card:deep(.bluesky-embed) {
    margin: 0;
}
.set-my-main-page-button {
    margin-left: 0.1rem;
    vertical-align: text-top;
}
</style>

<style lang="scss">
fieldset { // replace default UA stylesheet
    margin-inline: 0;
    padding: 0;
}
</style>
