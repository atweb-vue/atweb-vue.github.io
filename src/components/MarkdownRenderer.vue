<script setup lang="ts">
import type { MDXComponents, MDXModule } from '@/lib/mdx-types';

const { markdown } = defineProps<{
    markdown: string;
}>();

import { renderMarkdown } from '@/lib/markdown/render-markdown';
import { ref, shallowRef, watch } from 'vue';
import { compileStringAsync as sassCompileString } from 'sass';
import AtImgCe from './custom-elements/AtImg.ce.vue';
import AtLinkCe from './custom-elements/AtLink.ce.vue';
import AtAnchorCe from './custom-elements/AtAnchor.ce.vue';
import AtWebStylesheetCe from './custom-elements/AtWebStylesheet.ce.vue';
import OmitVanillaCssCe from './custom-elements/OmitVanillaCss.ce.vue';
import { watchImmediate } from '@vueuse/core';

const module = shallowRef<MDXModule>();

watchImmediate(() => markdown, async markdown => {
    console.log('setting module.value', module.value);
    module.value = markdown ? await renderMarkdown(markdown) : undefined;
    console.log('set module.value', module.value);
});

const components: MDXComponents = {
    img: AtImgCe,
    link: AtLinkCe,
    a: AtAnchorCe,
    Stylesheet: AtWebStylesheetCe,
    OmitVanillaCss: OmitVanillaCssCe,
};

</script>

<template>
    <div class="mdx-root">
        <module.default v-if="module" :components="components" />
    </div>
</template>
