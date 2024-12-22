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
    <button :class="signInButtonClass" v-if="!user" @click="open = true">{{ signInText ?? 'Sign in' }}</button>
    <slot v-else></slot>

    <dialog :open="open">
        <article>
            <input v-model="handle" type="text" placeholder="e.g. you.bsky.social" aria-label="@handle">

            <footer>
                <button class="secondary" @click="open = false">
                    Cancel
                </button>
                <button @click="authenticate().then(() => open = false)">
                    Sign In
                </button>
            </footer>
        </article>
    </dialog>

    <dialog :open="codePasteOpen">
        <article>
            <input v-model="hash" type="text" aria-label="Input displayed code">

            <footer>
                <button class="secondary" @click="cancelAuthentication(); open = false">
                    Cancel
                </button>
                <button @click="finishAuthentication(); open = false">
                    Complete Sign In
                </button>
            </footer>
        </article>
    </dialog>

</template>
