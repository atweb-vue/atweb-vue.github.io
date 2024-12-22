<script setup lang="ts">
import SignInGate from '@/components/SignInGate.vue';
import { getManagedRings } from '@/lib/atproto/atweb-unauthed';
import { user, type User } from '@/lib/atproto/signed-in-user';
import { watchImmediateAsync } from '@/lib/vue-utils';
import { ref, watch, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import type { RouteLocationNormalizedLoadedGeneric } from 'vue-router';

const rings = ref<Awaited<ReturnType<typeof getManagedRings>>>();

const route = useRoute();
await watchImmediateAsync(
    [route, user],
    async ([route, user]) => {
        if (!user) return;

        rings.value = await getManagedRings(user!.did);
    },
);
</script>

<template>
    <div class="main">
        <SignInGate>
            <div v-for="ring in rings" :key="ring.uri.rkey">
                {{ ring.name }}
            </div>

            <VaButton>Create new ring</VaButton>
        </SignInGate>
    </div>
</template>

<style lang="scss" scoped>
.main {
    padding: 0 1rem;
}
</style>
