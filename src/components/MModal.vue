<script setup lang="ts">
const isOpen = defineModel<boolean>();
</script>

<template>
    <Teleport to="body">
        <div v-if="isOpen" class="modal">
            <slot></slot>
        </div>
    </Teleport>
</template>
