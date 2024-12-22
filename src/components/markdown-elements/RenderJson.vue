<script setup lang="ts">
await import('./custom-elements/json/wc-json.js');
</script>
<template>
    <json-element v-bind="$attrs"></json-element>
</template>
