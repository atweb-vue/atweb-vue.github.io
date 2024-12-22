<script setup lang="ts">
</script>
<template>
    <span v-bind="$attrs">
        <slot></slot>
    </span>
</template>

<style lang="css" scoped>
/* https://github.com/krusynth/blink-polyfill */
span {
    animation: 4s linear infinite html4_blink;
}
@keyframes html4_blink {
    0% {
        visibility: visible;
    }
    50% {
        visibility: hidden;
    }
    100% {
        visibility: hidden;
    }
}
</style>
