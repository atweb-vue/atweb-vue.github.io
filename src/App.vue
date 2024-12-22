<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { authenticateOnStartup } from './lib/atproto/signed-in-user';
import { ref, watch } from 'vue';
import { useVanillaCss } from './lib/shared-globals';
import { frameworkStyles } from './lib/framework-styles';
import UsePico from './components/UsePico.vue';

const isInPage = ref<boolean>();
const router = useRouter();

watch(router.currentRoute, route => {
    isInPage.value = route.path.startsWith('/page/');
});

authenticateOnStartup();

</script>

<template>
    <component v-if="isInPage === false || useVanillaCss" :is="'style'">{{ frameworkStyles }}</component>

    <UsePico>
        <header v-if="isInPage === false">
            <nav>
                <ul>
                    <li><RouterLink to="/"><strong>@web</strong></RouterLink></li>
                </ul>
                <ul>
                    <li><RouterLink to="/edit">Create Page</RouterLink></li>
                    <li><RouterLink to="/page/did:plc:nmc77zslrwafxn75j66mep6o/test.mdx">Test Page</RouterLink></li>
                    <li><RouterLink to="/rings">My @rings</RouterLink></li>
                </ul>
            </nav>
        </header>
    </UsePico>

    <Suspense>
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
