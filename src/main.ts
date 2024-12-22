import './assets/main.scss';

import 'bluesky-profile-card-embed';

// import './custom-elements.ts';

import { createApp } from 'vue';
import { createVuesticEssential, VaDropdownPlugin, VaModalPlugin, VaToastPlugin } from "vuestic-ui";

import App from './App.vue';
import router from './router.ts';

const app = createApp(App);

app.config.warnHandler = (msg, instance, trace) => {
    if (msg.includes('Non-function value encountered for default slot.')) return;

    console.warn(msg, trace);
};

app.use(router);

app.use(
  createVuesticEssential({
    plugins: { VaDropdownPlugin, VaModalPlugin, VaToastPlugin },
    config: {
        /* ... */
        colors: {
            currentPresetName: 'dark'
        }
    },
  })
);

// app.use(Quasar, {
//     plugins: {}, // import Quasar plugins and add here
//     config: {
//         dark: 'auto',
//     }
// } satisfies QuasarPluginOptions);

app.mount('#app');
