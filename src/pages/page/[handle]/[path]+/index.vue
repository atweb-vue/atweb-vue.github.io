<script setup lang="ts">
import { inject, provide, ref, shallowRef } from 'vue';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import { downloadFile, getGetBlobUrl, type Page, type PageMeta } from '@/lib/atproto/atweb-unauthed';
import { useRoute } from 'vue-router';
import { resolveHandleAnonymously } from '@/lib/atproto/handles/resolve';
import { watchImmediateAsync } from '@/lib/vue-utils';
import UsePico from '@/components/UsePico.vue';
import { frameworkStyles } from '@/lib/framework-styles';
import { pageKey, pageMetaKey } from '@/lib/injection-keys';
import { filepathToRkey } from '@/lib/atproto/rkey';

const pageRef = shallowRef<Page>();
const pageMetaRef = shallowRef<PageMeta>();
provide(pageKey, pageRef);
provide(pageMetaKey, pageMetaRef);

const type = ref<'markdown' | 'pre' | 'image' | 'generic' | 'none'>('none');
const contents = ref<string>('');

const route = useRoute('/page/[handle]/[path]+/');
await watchImmediateAsync(
    route,
    async () => {
        const did = await resolveHandleAnonymously(route.params.handle);

        let page: Page;
        // replace : with / as fallback for older rkey-based path parameters
        pageRef.value = pageMetaRef.value = page = await downloadFile(did, filepathToRkey(route.params.path.join('/').replace(/:/g, '/')));

        console.log('watched', page);

        type.value = 'none';
        contents.value = '';

        if (page.bodyOriginal.mimeType === 'text/mdx') {
            console.log('setting md');
            type.value = 'markdown';
            contents.value = page.blobString;
            console.log('set md');
        } else if (page.bodyOriginal.mimeType.startsWith('image/')) {
            type.value = 'image';
            contents.value = await getGetBlobUrl(page.uri, true);
        } else if (page.bodyOriginal.mimeType.startsWith('text/')) {
            type.value = 'pre';
            contents.value = page.blobString;
        } else {
            type.value = 'generic';
            contents.value = await getGetBlobUrl(page.uri);
        }
    },
);

const adoptedStyleSheet = new CSSStyleSheet();
adoptedStyleSheet.replace(frameworkStyles);

</script>

<template>
    <div class="page">
        <div v-if="type == 'markdown'">
            <Suspense>
                <UsePico>
                    <main>
                        <MarkdownRenderer :markdown="contents" />
                    </main>
                </UsePico>
            </Suspense>
        </div>
        <img v-else-if="type == 'image'" :src="contents" />
        <pre v-else-if="type == 'pre'">{{ contents }}</pre>
        <a v-else-if="type == 'generic'" :href="contents">
            Unknown file type <code>{{ inject(pageKey)?.value?.bodyOriginal.mimeType }}</code>.
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
