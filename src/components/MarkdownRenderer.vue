<script setup lang="ts">
import type { MDXComponents } from '@/lib/mdx-types';

const props = defineProps<{
    markdown: string;
}>();

import { renderMarkdown } from '@/lib/markdown/render-markdown';

const module = await renderMarkdown(props.markdown);

const components: MDXComponents = {
    img: 'x-atproto-img',
};
</script>

<template>
    <module.default :components="components" />
</template>
