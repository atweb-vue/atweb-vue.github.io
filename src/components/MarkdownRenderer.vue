<script setup lang="ts">
import type { MDXComponents, MDXModule } from '@/lib/mdx-types';

const { markdown } = defineProps<{
    markdown: string;
}>();

import { renderMarkdown } from '@/lib/markdown/render-markdown';
import { ref, shallowRef, watch } from 'vue';
import { compileStringAsync as sassCompileString } from 'sass';
import { watchImmediate } from '@vueuse/core';
import { components } from '@/lib/markdown/components';

const module = shallowRef<MDXModule>();

watchImmediate(() => markdown, async markdown => {
    console.log('setting module.value', module.value);
    module.value = markdown ? await renderMarkdown(markdown) : undefined;
    console.log('set module.value', module.value);
});

</script>

<template>
    <div class="mdx-root">
        <module.default v-if="module" :components="components" />
    </div>
</template>
