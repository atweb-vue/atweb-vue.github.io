import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.startsWith('x-'),
                },
            },
        }),
        vueJsx(),
        vueDevTools(),

        // // @quasar/plugin-vite options list:
        // // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
        // quasar({
        //     autoImportComponentCase: 'combined',
        //     sassVariables: fileURLToPath(
        //         new URL('./src/quasar-variables.scss', import.meta.url)
        //     ),
        // }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
