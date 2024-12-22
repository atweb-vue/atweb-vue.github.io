<script setup lang="ts">
import type { MDXComponents, MDXModule } from '@/lib/markdown/mdx-types';

const { markdown, disableComponents } = defineProps<{
    markdown: string;
    disableComponents?: boolean;
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

const errors = defineModel<unknown[]>('errors', {
    default: []
});

await watchImmediateAsync(() => markdown, async markdown => {
    // console.log('setting module.value', module.value);
    errors.value.length = 0;

    try {
        module.value = markdown ? await renderMarkdown(markdown) : undefined;
    } catch (err) {
        errors.value.push(err);
    }
    // console.log('set module.value', module.value);
});

</script>

<template>
    <div class="mdx-root">
        <Suspense>
            <module.default v-if="module" :components="disableComponents ? components : {}" />
        </Suspense>
    </div>
</template>
