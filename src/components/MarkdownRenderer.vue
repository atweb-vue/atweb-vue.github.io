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
import AWStylesheetCe from './custom-elements/AWStylesheet.ce.vue';
import OmitVanillaCssCe from './custom-elements/OmitVanillaCss.ce.vue';

const module = shallowRef<MDXModule>();

watch(() => markdown, async markdown => {
    console.log('setting module.value', module.value);
    module.value = markdown ? await renderMarkdown(markdown) : undefined;
    console.log('set module.value', module.value);
}, { immediate: true });

const stylesheet = ref('');

watch(module, async module => {
    if (!module) {
        stylesheet.value = '';
        return;
    }

    if ('stylesheet' in module) {
        stylesheet.value = module.stylesheet as string;
    } else if ('scssStylesheet' in module) {
        stylesheet.value = (await sassCompileString(module.stylesheet as string, {
            sourceMap: false,
        })).css;
    } else {
        stylesheet.value = '';
    }
});

const components: MDXComponents = {
    img: AtImgCe,
    link: AtLinkCe,
    a: AtAnchorCe,
    Stylesheet: AWStylesheetCe,
    OmitVanillaCss: OmitVanillaCssCe,
};

</script>

<template>
    <component :is="'style'" id="mdx-styles">{{ stylesheet }}</component>
    <div class="mdx-root">
        <module.default v-if="module" :components="components" />
    </div>
</template>
