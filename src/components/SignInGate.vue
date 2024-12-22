<script setup lang="ts">
import { ref, watch } from 'vue';

import { authenticateIfNecessary, user } from '@/lib/atproto/signed-in-user';
import { watchImmediate } from '@vueuse/core';
import { VaButton, VaInput, VaModal } from 'vuestic-ui';

defineProps<{
    signInButtonClass?: string;
    signInText?: string;
}>();

const handle = ref('');
const open = ref(false);

watchImmediate(user, user => {
    handle.value = user?.handle ?? '';
});

</script>
<template>
    <VaButton :class="signInButtonClass" v-if="!user" @click="open = true">{{ signInText ?? 'Sign in' }}</VaButton>
    <slot v-else></slot>

    <VaModal
        v-model="open"
        ok-text="Sign In"
        cancel-text="Cancel"
        @ok="authenticateIfNecessary(handle).finally(() => open = false)"
    >
        <VaInput v-model="handle" label="@handle" placeholder="e.g. you.bsky.social" />
    </VaModal>

</template>
