<script setup lang="ts">
import { getRelativeOrAbsoluteBlobUrl } from '@/lib/component-helpers';
import { injectPage } from '@/lib/injection-keys';
import { page } from '@/lib/shared-globals';
import { watchImmediateAsync } from '@/lib/vue-utils';
import { watchImmediate } from '@vueuse/core';
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

await watchImmediateAsync(page, async page => {
    if (!page) {
        console.warn(`no page for img ${props.src}`);
        return;
    }

    await Promise.all([
        getRelativeOrAbsoluteBlobUrl(
            props.src,
            { path: page.filePath, repo: page.did },
            true
        )
            .then(uri => realSrc.value = uri)
            .catch(err => console.warn(err)),

        getRelativeOrAbsoluteBlobUrl(
            props.srcset,
            { path: page.filePath, repo: page.did },
            true
        )
            .then(uri => realSrcSet.value = uri)
            .catch(err => console.warn(err)),
    ]);
});

</script>

<template>
    <img v-bind="$attrs" :src="realSrc" :srcset="realSrcSet" :alt :title :width :height />
</template>
