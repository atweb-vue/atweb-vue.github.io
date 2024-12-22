<script setup lang="ts">
import SignInGate from '@/components/SignInGate.vue';
import { resolveHandleAnonymously } from '@/lib/atproto/handles/resolve';
import { watchImmediateAsync } from '@/lib/vue-utils';
import { useRoute } from 'vue-router';

const route = useRoute();
await watchImmediateAsync(
    route,
    async () => {
        const did = await resolveHandleAnonymously(route.params.handle as string);

    },
);
</script>

<template>
    <main>
        <SignInGate sign-in-button-class="edit-form-button">
            <VaButton class="edit-form-button" @click="submitPage">Submit</VaButton>
        </SignInGate>
    </main>
</template>
