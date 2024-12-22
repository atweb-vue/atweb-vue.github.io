<script setup lang="ts">
import type { MDXComponents, MDXModule } from '@/lib/mdx-types';

const { markdown } = defineProps<{
    markdown: string;
}>();

import { renderMarkdown } from '@/lib/markdown/render-markdown';
import { ref, shallowRef, watch } from 'vue';
import { compileStringAsync as sassCompileString } from 'sass';
import AtImg from './custom-elements/AtImg.vue';
import AtLink from './custom-elements/AtLink.vue';
import AtAnchor from './custom-elements/AtAnchor.vue';
import AtWebStylesheet from './custom-elements/AtWebStylesheet.vue';
import OmitVanillaCss from './custom-elements/OmitVanillaCss.vue';
import { watchImmediate } from '@vueuse/core';
import AtStyle from './custom-elements/AtStyle.vue';
import AtWebTitle from './custom-elements/AtWebTitle.vue';

const module = shallowRef<MDXModule>();

watchImmediate(() => markdown, async markdown => {
    console.log('setting module.value', module.value);
    module.value = markdown ? await renderMarkdown(markdown) : undefined;
    console.log('set module.value', module.value);
});

const components: MDXComponents = {
    img: AtImg,
    link: AtLink,
    a: AtAnchor,
    Stylesheet: AtWebStylesheet,
    OmitVanillaCss: OmitVanillaCss,
    style: AtStyle,
    title: AtWebTitle,
};

</script>

<template>
    <div class="mdx-root">
        <module.default v-if="module" :components="components" />
    </div>
</template>
