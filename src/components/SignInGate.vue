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
const hash = ref('');
const open = ref(false);

let finishAuthentication: () => void = () => {};
let cancelAuthentication: () => void = () => {};

const codePasteOpen = ref(false);

watchImmediate(user, user => {
    handle.value = user?.handle ?? '';
});

async function authenticate() {
    authenticateIfNecessary(handle.value, () => {
        return new Promise((resolve, reject) => {
            finishAuthentication = () => resolve(hash.value);
            cancelAuthentication = reject;
            codePasteOpen.value = true;
        });
    });
}

</script>
<template>
    <VaButton :class="signInButtonClass" v-if="!user" @click="open = true">{{ signInText ?? 'Sign in' }}</VaButton>
    <slot v-else></slot>

    <VaModal
        v-model="open"
        ok-text="Sign In"
        cancel-text="Cancel"
        @ok="authenticate()"
    >
        <VaInput v-model="handle" label="@handle" placeholder="e.g. you.bsky.social" />
    </VaModal>
    <VaModal
        v-model="codePasteOpen"
        ok-text="Complete Sign In"
        cancel-text="Cancel"
        @ok="finishAuthentication()"
        @cancel="cancelAuthentication()"
        @click-outside="cancelAuthentication()"
    >
        <VaInput v-model="hash" label="Input displayed code" />
    </VaModal>

</template>
