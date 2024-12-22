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
    ],
});

export default router;
