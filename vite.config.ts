import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import Components from 'unplugin-vue-components/vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import VueRouter from 'unplugin-vue-router/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        VueRouter({

        }),
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) =>
                        tag.startsWith('x-') ||
                        tag.startsWith('bluesky-'),
                },
            },
        }),
        vueJsx(),
        vueDevTools(),
        Components({
            resolvers: [
              (componentName) => {
                if (componentName.startsWith('Va'))
                  return { name: componentName, from: 'vuestic-ui' };
              },
            ],
        }),
        nodePolyfills(),

        // // @quasar/plugin-vite options list:
        // // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
        // quasar({
        //     autoImportComponentCase: 'combined',
        //     sassVariables: fileURLToPath(
        //         new URL('./src/quasar-variables.scss', import.meta.url)
        //     ),
        // }),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vuestic: ['vuestic-ui'],
                    monaco: ['monaco-editor'],
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
