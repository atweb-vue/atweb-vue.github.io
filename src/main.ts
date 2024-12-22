import './assets/main.scss';
import './custom-elements.ts';

import { createApp } from 'vue';
import { loader } from '@guolao/vue-monaco-editor';
// import { Quasar, type QuasarPluginOptions } from 'quasar';

// Import icon libraries
// import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
// import 'quasar/src/css/index.sass'

import App from './App.vue';
import router from './router.ts';

loader.config({
    paths: {
        vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs',
    },
});

const app = createApp(App);

app.use(router);

// app.use(Quasar, {
//     plugins: {}, // import Quasar plugins and add here
//     config: {
//         dark: 'auto',
//     }
// } satisfies QuasarPluginOptions);

app.mount('#app');
