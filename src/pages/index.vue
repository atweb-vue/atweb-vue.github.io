<script setup lang="ts">
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import UsePico from '@/components/UsePico.vue';
import index from '@/../README.md?raw';

const markdown = index;
</script>

<template>
    <UsePico>
        <main>
            <MarkdownRenderer :markdown="markdown"/>
        </main>
    </UsePico>
</template>
