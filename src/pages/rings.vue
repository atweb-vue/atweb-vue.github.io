<script setup lang="ts">
import PModal from '@/components/PModal.vue';
import SignInGate from '@/components/SignInGate.vue';
import UsePico from '@/components/UsePico.vue';
import { getRing, getRingsUserIsAMemberOf } from '@/lib/atproto/atweb-unauthed';
import { resolveHandleAnonymously } from '@/lib/atproto/handles/resolve';
import { getDidAndPds } from '@/lib/atproto/pds-helpers';
import { rkeyToFilepath } from '@/lib/atproto/rkey';
import { user, type User } from '@/lib/atproto/signed-in-user';
import { resolveRoute, watchImmediateAsync } from '@/lib/vue-utils';
import { AtUri } from '@atproto/syntax';
import { computedAsync, useBrowserLocation, useClipboard, type ElementOf } from '@vueuse/core';
import { computed, ref, shallowRef, watch, type Ref } from 'vue';
import { useRoute } from 'vue-router';

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
    <UsePico>
        <main>
            <SignInGate>
                <PModal
                    v-model="createRingModalOpen"
                    ok-text="Create"
                    cancel-text="Cancel"
                    @click-ok="createRing().then(() => createRingModalOpen = false)"
                    @click-cancel="createRingModalOpen = false"
                >
                    <label>
                        @ring Name
                        <input type="text" v-model="createRingName" />
                    </label>
                    <label>
                        My Member Page
                        <input type="text" v-model="createRingMainPage" placeholder="index.mdx" />
                    </label>
                </PModal>

                <PModal
                    v-model="kickMemberModalOpen"
                    ok-text="Yes, kick them"
                    cancel-text="No, go back"
                    @click-ok="kickMember(kickMemberModal!.did, kickMemberModal!.ring).then(() => kickMemberModalOpen = false)"
                    @click-cancel="kickMemberModalOpen = false"
                >
                    <b>Really</b> kick @{{kickMemberModal?.displayName}} from {{kickMemberModal?.ring.name}}?
                </PModal>

                <PModal
                    v-model="deleteRingModalOpen"
                    ok-text="Yes, delete it"
                    cancel-text="No, go back"
                    @click-ok="deleteRing(deleteRingModal!.ring.uri.rkey).then(() => deleteRingModalOpen = false)"
                    @click-cancel="deleteRingModalOpen = false"
                >
                    <b>Really</b> delete {{deleteRingModal!.ring.name}}? There's no going back!
                </PModal>

                <PModal
                    :model-value="addMemberModalOpen"
                    ok-text="Send invite"
                    cancel-text="Cancel"
                    @click-ok="addMember(addMemberModal!.ring, addMemberModal!.handle!).then(() => addMemberModalOpen = false)"
                    @click-cancel="addMemberModalOpen = false"
                >
                    <label>
                        @handle to invite
                        <input type="text" v-model="addMemberModal!.handle" placeholder="someone.bsky.social" />
                    </label>
                </PModal>

                <PModal
                    v-model="invitedModalOpen"
                    :hide-cancel="true"
                    @click-ok="invitedModalOpen = false"
                >
                    <div v-if="invitedModal!.inviteRkey">
                        Send this invite link to @{{ invitedModal!.handle }} so they can join your webring.
                        <pre>{{ resolveRoute(`/invited/${invitedModal!.ring.uri.host}/${invitedModal!.inviteRkey}`) }}</pre>
                    </div>
                    <div v-else>
                        Account is already invited.
                    </div>
                </PModal>
                <fieldset>
                    <div>
                        <button @click="createRingModalOpen = true" class="form-element-width-auto">Create new @ring</button>

                        <select v-model="selectedRing" aria-label="Select an @ring to edit it" class="form-element-width-auto">
                            <option disabled :value="undefined">
                                Select an @ring to edit it
                            </option>
                            <option v-for="option in rings" :key="(option! as Record<string, any>).uri.rkey" :value="option">
                                {{ option.name }}
                            </option>
                        </select>
                    </div>

                    <div v-if="selectedRing">
                        <h2 class="va-h2">{{ selectedRing.name }}</h2>
                        <p><code>{{ selectedRing.uri }}</code></p>
                        <p><b>{{ selectedRing.members?.length ?? 0 }}</b> member(s)</p>
                        <p>Managed by <a class="va-link" :href="`https://bsky.app/profile/${selectedRing.uri.host}`">@{{ getMemberName(selectedRing.uri) }}</a></p>

                        <fieldset>
                            <button @click="copyRingMdx(selectedRing)" class="form-element-width-auto">Copy ring MDX code</button>
                        </fieldset>

                        <div>
                            <label>
                                My main page<br/>
                                <input type="text" v-model="mainPageLink" class="form-element-width-auto">
                                <button @click="setMainPage(selectedRing, mainPageLink)" class="form-element-width-auto">Set</button>
                            </label>
                        </div>

                        <div v-for="member in selectedRing.members" :key="member.membership.toString()" class="ring-member-card va-gutter-2">
                            <fieldset>
                                <bluesky-profile-card :actor="getMemberName(member.membership)" allow-unauthenticated="true">
                                </bluesky-profile-card>
                                <div v-if="!member.isMember">Waiting for invite response</div>

                                <button v-if="user && selectedRing.uri.host === user.did" @click="
                                    kickMemberModal = {
                                        did: member.membership.host,
                                        displayName: getMemberName(member.membership),
                                        ring: selectedRing,
                                    };
                                " class="kick-member-button">
                                    Kick @{{ getMemberName(member.membership) }}
                                </button>
                            </fieldset>
                        </div>

                        <hr class="va-hr" />
                        <button class="form-element-width-auto" v-if="user && selectedRing.uri.host === user.did" @click="
                            addMemberModal = {
                                ring: selectedRing,
                            }
                        ">
                            Invite new member
                        </button>
                        <button class="form-element-width-auto" v-if="user && selectedRing.uri.host === user.did" @click="
                            deleteRingModal = {
                                ring: selectedRing,
                            };
                        ">
                            Delete {{ selectedRing.name }}
                        </button>
                    </div>
                </fieldset>
            </SignInGate>
        </main>
    </UsePico>
</template>

<style lang="scss" scoped>
.main {
    padding: 0 1rem;
}
.ring-member-card:deep(.bluesky-embed) {
    margin: 0;
}

.form-element-width-auto {
    margin-right: 0.5rem;
    width: auto !important;
}
.kick-member-button {
    margin-top: 0.5rem;
}
</style>

<style lang="scss">
fieldset { // replace default UA stylesheet
    margin-inline: 0;
    padding: 0;
}
</style>
