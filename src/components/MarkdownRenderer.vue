<script setup lang="ts">
import type { MDXComponents, MDXModule } from '@/lib/markdown/mdx-types';

const { markdown } = defineProps<{
    markdown: string;
}>();

import { renderMarkdown } from '@/lib/markdown/render-markdown';
import { ref, shallowRef, watch } from 'vue';
import { watchImmediate } from '@vueuse/core';
import { components } from '@/lib/markdown/components.tsx';
import { watchImmediateAsync } from '@/lib/vue-utils';
import type { compileStringAsync } from 'sass';

async function sassCompileString(...args: Parameters<typeof compileStringAsync>) {
    const { compileStringAsync } = await import('sass');
    return compileStringAsync(...args);
}

const module = shallowRef<MDXModule>();

await watchImmediateAsync(() => markdown, async markdown => {
    console.log('setting module.value', module.value);
    module.value = markdown ? await renderMarkdown(markdown) : undefined;
    console.log('set module.value', module.value);
});

</script>

<template>
    <div class="mdx-root">
        <Suspense>
            <module.default v-if="module" :components="components" />
        </Suspense>
    </div>
</template>
