<script setup lang="ts">
import { getRelativeOrAbsoluteBlobUrl } from '@/lib/component-helpers';
import { injectPage } from '@/lib/injection-keys';
import { page } from '@/lib/shared-globals';
import { inject, ref, watch } from 'vue';

const props = defineProps<{
    href?: string;
}>();

const realHref = ref<string>();

watch(page!, page => {
    if (!page) {
        console.warn(`no page for link ${props.href}`);
        return;
    }

    getRelativeOrAbsoluteBlobUrl(
        props.href,
        { path: page.filePath, repo: page.did }
    )
        .then(uri => realHref.value = uri);
}, { immediate: true });
</script>

<template>
    <link v-bind="$attrs" :href="realHref" rel="stylesheet" type="text/css" />
</template>
