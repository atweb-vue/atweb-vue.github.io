<script setup lang="ts">
import { agent, atUriDownload } from '@/lib/atproto/atweb-client';
import { parseAtUri } from '@/lib/utils';
import type { At } from '@atcute/client/lexicons';
import { onBeforeUnmount, ref } from 'vue';

const props = defineProps<{
    src?: string;
    srcset?: string;
    alt?: string;
    title?: string;
    onerror?: (err: Event) => void,
}>();

const realSrc = ref<string>();
const realSrcSet = ref<string>();

atUriDownload(
    props.src,
    uri => realSrc.value = uri,
    onBeforeUnmount,
    props.onerror,
);

atUriDownload(
    props.srcset,
    uri => realSrcSet.value = uri,
    onBeforeUnmount,
    props.onerror,
);

</script>

<template>
    <img :src="realSrc" :srcset="realSrcSet" :alt :title @error="props.onerror" />
</template>
