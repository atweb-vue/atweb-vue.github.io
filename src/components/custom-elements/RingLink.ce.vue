<script setup lang="ts">
import { getRing } from '@/lib/atproto/atweb-unauthed';
import { resolveRoute } from '@/lib/vue-utils';
import { AtUri } from '@atproto/syntax';
import { ref } from 'vue';

const { direction = 'previous', ringUri, self } = defineProps<{
    direction?: 'previous' | 'next';
    ringUri: string;
    self: string;
}>();

const ringAtUri = new AtUri(ringUri);

const ring = await getRing(ringAtUri.host, ringAtUri.rkey);

const realMembers = ring.members.filter(e => e.isMember);
const memberIndex = realMembers.findIndex(member => member.membership.host === self);

const prevMemberLink = ref<string>();
const nextMemberLink = ref<string>();
if (memberIndex != -1) {
    const prevMember = ring.members[wrapAround(memberIndex - 1, realMembers.length)];
    const nextMember = ring.members[wrapAround(memberIndex + 1, realMembers.length)];
    prevMemberLink.value = resolveRoute(`/page/${prevMember.membership.host}/${prevMember.mainPage?.rkey ?? '!!! FAILED !!!.mdx'}`);
    nextMemberLink.value = resolveRoute(`/page/${nextMember.membership.host}/${nextMember.mainPage?.rkey ?? '!!! FAILED !!!.mdx'}`);
}

function wrapAround(i: number, max: number) {
    if (i >= max) i %= max;
    else if (i < 0) i += max;
    return i;
}

</script>

<template>
    <a class="va-link" v-bind="$attrs" :href="direction === 'previous' ? prevMemberLink : nextMemberLink">
        <slot></slot>
    </a>
</template>
