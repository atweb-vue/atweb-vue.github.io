<script setup lang="ts">
import { getRelativeOrAbsoluteBlobUrl } from '@/lib/component-helpers';
import { pageMeta } from '@/lib/shared-globals';
import { watchImmediateAsync } from '@/lib/vue-utils';
import { ref } from 'vue';

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

await watchImmediateAsync(pageMeta, async pageMeta => {
    if (!pageMeta) {
        console.warn(`no pageMeta for img ${props.src}`);
        return;
    }

    await Promise.all([
        getRelativeOrAbsoluteBlobUrl(
            props.src,
            { path: pageMeta.filePath, repo: pageMeta.did },
            true
        )
            .then(uri => realSrc.value = uri)
            .catch(err => console.warn(err)),

        getRelativeOrAbsoluteBlobUrl(
            props.srcset,
            { path: pageMeta.filePath, repo: pageMeta.did },
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
