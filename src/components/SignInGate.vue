<script setup lang="ts">
import { ref, watch } from 'vue';

import MModal from './MModal.vue';
import { authenticateIfNecessary, user } from '@/lib/atproto/signed-in-user';

const handle = ref('');
const open = ref(false);

watch(user, user => {
    handle.value = user?.handle ?? '';
});

</script>
<template>
    <button v-if="!user" @click="open = true">Sign In</button>
    <slot v-if="user"></slot>

    <MModal v-model="open">
        <input v-model="handle" placeholder="Handle" />

        <button @click="authenticateIfNecessary(handle).finally(() => open = false)">Sign In</button>
        <button @click="open = false">Cancel</button>
    </MModal>

</template>
