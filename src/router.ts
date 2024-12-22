import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
        },
        {
            path: '/edit',
            name: 'edit',
            component: () => import('@/views/EditorView.vue'),
        },
        {
            path: '/page/:handle/:rkey',
            name: 'page',
            component: () => import('@/views/PageView.vue'),
        },
        {
            path: '/user/:handle',
            name: 'user',
            component: () => import('@/views/UserView.vue'),
        },
        // someone sends you this link to accept an invite to a webring
        {
            path: '/invited/:inviterHandle/:rkey',
            name: 'invited',
            component: () => import('@/views/ReceiveInviteView.vue'),
        },
        // manage your rings and the rings you are in
        {
            path: '/rings',
            name: 'rings',
            component: () => import('@/views/ListRingsView.vue'),
        },
    ],
});

export default router;
