<script setup lang="ts">
import { computedAtUrlProperty } from '@/lib/vue-utils';

const props = defineProps<{
    rel?: string;
    href?: string;
    type?: string;
}>();

const realHref = computedAtUrlProperty(props.href, 'link');

</script>

<template>
    <link v-bind="$attrs" :rel :href="realHref" :type />
</template>
