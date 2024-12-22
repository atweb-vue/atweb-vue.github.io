import './assets/main.scss';

import 'bluesky-profile-card-embed';
// import './custom-elements.ts';

import shadow from 'vue-shadow-dom';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router.ts';

const app = createApp(App);

app.config.warnHandler = (msg, instance, trace) => {
    if (msg.includes('Non-function value encountered for default slot.')) return;

    console.warn(msg, trace);
};

app.use(router);

app.use(shadow);

app.mount('#app');
