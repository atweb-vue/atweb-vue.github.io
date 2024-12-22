<script setup lang="ts">
import { useVanillaCss } from '@/lib/shared-globals';
import { onBeforeUnmount } from 'vue';

useVanillaCss.value = false;

// was onBeforeRouteLeave
onBeforeUnmount(() => {
    useVanillaCss.value = true;
});

// onBeforeUnmount(() =>)
</script>

<template>
    <span></span>
</template>
