<script setup lang="ts">
import { onBeforeUnmount, provide, ref, shallowRef, watch } from 'vue';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import { downloadFile, getGetBlobUrl, type Page } from '@/lib/atproto/atweb-unauthed';
import { useRoute } from 'vue-router';
import { resolveHandleAnonymously } from '@/lib/atproto/handles/resolve';
import { page } from '@/lib/shared-globals';
import { watchImmediate } from '@vueuse/core';
import { watchImmediateAsync } from '@/lib/vue-utils';

const route = useRoute();

await watchImmediateAsync(
    route,
    async () => {
        const did = await resolveHandleAnonymously(route.params.handle as string);
        page.value = await downloadFile(did, route.params.rkey as string);
    },
);

const type = ref<'markdown' | 'pre' | 'image' | 'generic' | 'none'>('none');
const contents = ref<string>('');

await watchImmediateAsync(page, async page => {
    console.log('watched', page);

    if (page === undefined) return;

    type.value = 'none';
    contents.value = '';

    if (page.bodyOriginal.mimeType === 'text/mdx') {
        console.log('setting md');
        type.value = 'markdown';
        contents.value =
            typeof page.blob === 'string'
                ? page.blob
                : new TextDecoder().decode(page.blob.buffer);
        console.log('set md');
    } else if (page.bodyOriginal.mimeType.startsWith('image/')) {
        type.value = 'image';
        contents.value = await getGetBlobUrl(page.uri, true);
    } else if (page.bodyOriginal.mimeType.startsWith('text/')) {
        type.value = 'pre';
        contents.value =
            typeof page.blob === 'string'
                ? page.blob
                : new TextDecoder().decode(page.blob.buffer);
    } else {
        type.value = 'generic';
        contents.value = await getGetBlobUrl(page.uri);
    }
});
</script>

<template>
    <div class="page">
        <div v-if="type == 'markdown'">
            <Suspense>
                <MarkdownRenderer :markdown="contents" />
            </Suspense>
        </div>
        <img v-else-if="type == 'image'" :src="contents" />
        <pre v-else-if="type == 'pre'">{{ contents }}</pre>
        <a v-else-if="type == 'generic'" :href="contents">
            Unknown file type <code>{{ page?.bodyOriginal.mimeType }}</code>.
            Click to download blob.
        </a>
    </div>
</template>

<style lang="scss" scoped>
.page {
    padding: 1rem;
}
</style>

<style lang="scss">
h1, h2, h3, h4, h5, h6, p, blockquote, dl, img, figure {
    margin: 1.5rem 0;
}
</style>
