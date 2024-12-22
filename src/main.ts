import './assets/main.scss';

// import './custom-elements.ts';

import { createApp } from 'vue';
import { loader } from '@guolao/vue-monaco-editor';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { createVuesticEssential, VaDropdownPlugin, VaModalPlugin, VaToastPlugin } from "vuestic-ui";

import App from './App.vue';
import router from './router.ts';

loader.config({
    monaco,
});

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
