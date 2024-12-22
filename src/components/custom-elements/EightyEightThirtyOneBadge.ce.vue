<script setup lang="ts">
const props = defineProps<{
    name: string;
}>();

const { badgeUrls } = await import('@/lib/badges');

// console.log(badgeUrls);

</script>

<template>
    <img v-bind="$attrs" :src="badgeUrls['/src/assets/badges/' + props.name]">
</template>
