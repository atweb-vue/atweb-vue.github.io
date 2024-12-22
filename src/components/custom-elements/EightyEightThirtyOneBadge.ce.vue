<script setup lang="ts">
import { badgeUrls } from '@/lib/badges';

const props = defineProps<{
    name: string;
}>();

// console.log(badgeUrls);

</script>

<template>
    <img v-bind="$attrs" :src="badgeUrls['/src/assets/badges/' + props.name]?.default">
</template>
