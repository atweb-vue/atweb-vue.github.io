<script setup lang="ts">
import { computedAtUrlProperty } from '@/lib/vue-utils';

const props = defineProps<{
    href?: string;
}>();

const realHref = computedAtUrlProperty(props.href, 'anchor');

</script>

<template>
    <a class="va-link" v-bind="$attrs" :href="realHref">
        <slot></slot>
    </a>
</template>
