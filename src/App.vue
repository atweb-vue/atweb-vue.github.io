<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { authenticateOnStartup } from './lib/atproto/signed-in-user';
import router from './router';
import { ref, watch } from 'vue';
import { useVanillaCss } from './lib/shared-globals';
import { usePreferredDark, watchImmediate } from '@vueuse/core';
import { useColors, VaButton, VaLayout, VaNavbar } from 'vuestic-ui';
import { frameworkStyles } from './lib/framework-styles';

const isInPage = ref<boolean>();

watch(router.currentRoute, route => {
    isInPage.value = route.path.startsWith('/page/');
});

watchImmediate(useVanillaCss, useVanillaCss => {
    if (useVanillaCss) {
        document.body.setAttribute('vanilla-css', 'true');
    } else {
        document.body.removeAttribute('vanilla-css');
    }
});

authenticateOnStartup();

const prefersDark = usePreferredDark();
const { applyPreset, currentPresetName, colors } = useColors();

watchImmediate(prefersDark, prefersDark => {
    applyPreset(prefersDark ? 'dark' : 'light');
});
</script>

<template>
    <component v-if="isInPage === false || useVanillaCss" :is="'style'">{{ frameworkStyles }}</component>

    <VaLayout v-if="isInPage === false">
        <template #top>
            <VaNavbar shadowed class="navbar">
                <template #left>
                    <VaButton preset="secondary" to="/">Home</VaButton>
                    <VaButton preset="secondary" to="/edit">Create Page</VaButton>
                    <VaButton preset="secondary" to="/page/did:plc:nmc77zslrwafxn75j66mep6o/test.mdx">Test Page</VaButton>
                </template>
            </VaNavbar>
        </template>

        <template #content>
            <main>
                <Suspense>
                    <RouterView />
                </Suspense>
            </main>
        </template>
    </VaLayout>

    <Suspense v-else>
        <RouterView />
    </Suspense>
</template>

<style scoped>
.navbar {
    --va-navbar-padding-y: 0.5rem;
    --va-navbar-padding-x: 0.5rem;
    margin-bottom: 1rem;
}
</style>
