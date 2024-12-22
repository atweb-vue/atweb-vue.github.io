<script setup lang="ts">
import { computedAtUrlProperty } from '@/lib/vue-utils';

const props = defineProps<{
    src?: string;
    srcset?: string;
    alt?: string;
    title?: string;
    width?: any;
    height?: any;
}>();

const realSrc = computedAtUrlProperty(props.src, 'img');
const realSrcSet = computedAtUrlProperty(props.srcset, 'img');

</script>

<template>
    <img v-bind="$attrs" :src="realSrc" :srcset="realSrcSet" :alt :title :width :height />
</template>
