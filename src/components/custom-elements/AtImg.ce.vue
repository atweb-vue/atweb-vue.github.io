<script setup lang="ts">
import { getRelativeOrAbsoluteBlobUrl } from '@/lib/component-helpers';
import { injectPage } from '@/lib/injection-keys';
import { page } from '@/lib/shared-globals';
import { inject, ref, watch } from 'vue';

const props = defineProps<{
    src?: string;
    srcset?: string;
    alt?: string;
    title?: string;
    width?: any;
    height?: any;
}>();

const realSrc = ref<string>();
const realSrcSet = ref<string>();

watch(page!, page => {
    if (!page) {
        console.warn(`no page for img ${props.src}`);
        return;
    }

    getRelativeOrAbsoluteBlobUrl(
        props.src,
        { path: page.filePath, repo: page.did },
        true
    )
        .then(uri => realSrc.value = uri);

    getRelativeOrAbsoluteBlobUrl(
        props.srcset,
        { path: page.filePath, repo: page.did },
        true
    )
        .then(uri => realSrcSet.value = uri);
}, { immediate: true });

</script>

<template>
    <img v-bind="$attrs" :src="realSrc" :srcset="realSrcSet" :alt :title :width :height />
</template>
