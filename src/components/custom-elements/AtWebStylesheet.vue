<script setup lang="ts">
import { getRelativeOrAbsoluteBlobUrl } from '@/lib/component-helpers';
import { injectPage } from '@/lib/injection-keys';
import { page } from '@/lib/shared-globals';
import { watchImmediate } from '@vueuse/core';
import { inject, ref, watch } from 'vue';

const props = defineProps<{
    href?: string;
}>();

const realHref = ref<string>();

watchImmediate(page, async page => {
    if (!page) {
        console.warn(`no page for link ${props.href}`);
        return;
    }

    await getRelativeOrAbsoluteBlobUrl(
        props.href,
        { path: page.filePath, repo: page.did }
    )
        .then(uri => realHref.value = uri)
        .catch(err => console.warn(err));
});
</script>

<template>
    <link v-bind="$attrs" :href="realHref" rel="stylesheet" type="text/css" />
</template>
