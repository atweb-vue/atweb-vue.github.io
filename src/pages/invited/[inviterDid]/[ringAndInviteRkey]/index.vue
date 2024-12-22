<script setup lang="ts">
import SignInGate from '@/components/SignInGate.vue';
import { getRing } from '@/lib/atproto/atweb-unauthed';
import { getDidAndPds } from '@/lib/atproto/pds-helpers';
import { user } from '@/lib/atproto/signed-in-user';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute('/invited/[inviterDid]/[ringAndInviteRkey]/');

const { didDocument } = await getDidAndPds(route.params.inviterDid);
const inviterHandle = didDocument.alsoKnownAs?.[0].replace('at://', '') ?? route.params.inviterDid;

const mainPage = ref('');
const inviteAccepted = ref<boolean | string>(false);

async function acceptInvite() {
    const ring = await getRing(route.params.inviterDid, route.params.ringAndInviteRkey);
    if (!ring.members.some(member => member.membership.host === user.value!.did))
        return; // invite was rescinded

    await user.value!.client.acceptInvite(route.params.inviterDid, route.params.ringAndInviteRkey, mainPage.value);

    inviteAccepted.value = ring.name;
}
</script>

<template>
    <div class="main">
        <SignInGate :sign-in-text="`Sign in to view invite from @${inviterHandle}`">
            <div v-if="!inviteAccepted">
                <div>
                    Accept this invite from @{{ inviterHandle }}?
                </div>
                <div>
                    <VaInput v-model="mainPage" label="My Member Page" placeholder="index.mdx" />
                    <VaButton @click="acceptInvite()" style="vertical-align: text-top; margin-top: -1px">OK</VaButton>
                </div>
            </div>
            <div v-else>
                Welcome to {{ inviteAccepted }}!
            </div>
        </SignInGate>
    </div>
</template>

<style lang="scss" scoped>
.main {
    padding: 0 1rem;
}
</style>
