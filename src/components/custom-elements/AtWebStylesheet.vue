<script setup lang="ts">
import { computedAtUrlProperty } from '@/lib/vue-utils';

const props = defineProps<{
    href?: string;
}>();

const realHref = computedAtUrlProperty(props.href, 'AtWebStylesheet');

</script>

<template>
    <link v-bind="$attrs" :href="realHref" rel="stylesheet" type="text/css" />
</template>
