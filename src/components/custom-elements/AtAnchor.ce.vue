<script setup lang="ts">
import { getRelativeOrAbsoluteBlobUrl } from '@/lib/component-helpers';
import { pageMeta } from '@/lib/shared-globals';
import { watchImmediateAsync } from '@/lib/vue-utils';
import { ref } from 'vue';

const props = defineProps<{
    href?: string;
}>();

const realHref = ref<string>();

await watchImmediateAsync(pageMeta, async pageMeta => {
    if (!pageMeta) {
        console.warn(`no pageMeta for link ${props.href}`);
        return;
    }

    await getRelativeOrAbsoluteBlobUrl(
        props.href,
        { path: pageMeta.filePath, repo: pageMeta.did }
    )
        .then(uri => realHref.value = uri)
        .catch(err => console.warn(err));
});
</script>

<template>
    <a class="va-link" v-bind="$attrs" :href="realHref">
        <slot></slot>
    </a>
</template>
