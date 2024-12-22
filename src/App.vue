<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { authenticateOnStartup } from './lib/atproto/signed-in-user';
import router from './router';
import { ref, watch } from 'vue';
import { useVanillaCss } from './lib/shared-globals';
import { watchImmediate } from '@vueuse/core';

const isInPage = ref(false);
watchImmediate(router.currentRoute, route => {
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
</script>

<template>
    <header v-if="!isInPage">
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/edit">Create Page</RouterLink>
                <RouterLink
                    to="/page/did:plc:nmc77zslrwafxn75j66mep6o/test.mdx">
                    About
                </RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 16px;
    text-align: center;
    margin-top: 0;
    height: var(--nav-height);
    line-height: var(--nav-height);

    --nav-height: 3rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
    background-color: var(--tertiary-color);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    height: var(--nav-height);
    line-height: var(--nav-height);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 700px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        font-size: 1rem;
        height: 3rem;
        line-height: 3rem;
    }
}
</style>
