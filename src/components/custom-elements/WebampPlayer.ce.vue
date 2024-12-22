<script setup lang="ts">
import { getRelativeOrAbsoluteBlobUrl } from '@/lib/component-helpers';
import { injectPage } from '@/lib/injection-keys';
import { page } from '@/lib/shared-globals';
import { watchImmediateAsync } from '@/lib/vue-utils';
import { watchImmediate } from '@vueuse/core';
import { inject, onBeforeUnmount, onMounted, ref, shallowRef, useTemplateRef, watch } from 'vue';
import type { InjectableDependencies, PrivateOptions, Options as WebampOptions, Track, WindowLayout } from '#webamp-lazy';
const { default: WebampLazy } = await import('#webamp-lazy');

const props = defineProps<{
    /**
     * An object representing the initial skin to use.
     *
     * If omitted, the default skin, included in the bundle, will be used.
     * Note: This URL must be served the with correct CORs headers.
     *
     * Example: `{ url: './path/to/skin.wsz' }`
     */
    initialSkin?: {
        url: string;
    };
    /**
     * An array of `Track`s to prepopulate the playlist with.
     */
    initialTracks?: Track[];
    /**
     * An array of objects representing available skins.
     *
     * These will appear in the "Options" menu under "Skins".
     * Note: These URLs must be served with the correct CORs headers.
     *
     * Example: `[ { url: "./green.wsz", name: "Green Dimension V2" } ]`
     */
    availableSkins?: {
        url: string;
        name: string;
    }[];
    /**
     * Configure how the Winamp windows should be laid out on initial render.
     */
    windowLayout?: WindowLayout;
    /**
     * Controls if "double size mode", where the fixed sized windows are rendered
     * at 2x, should be enabled
     *
     *  **Note:** In keeping with the original Winamp, double size mode does not
     *  apply to resizable windows like the equalizer or Milkdrop.
     *
     * Default: `false`
     */
    enableDoubleSizeMode?: boolean;
    /**
     * Should global hotkeys be enabled?
     *
     * Default: `false`
     */
    enableHotkeys?: boolean;
    /**
     * An array of additional file pickers.
     *
     * These will appear in the "Options" menu under "Play".
     *
     * For example, this option can be used to provide a "Dropbox" file picker.
     */
    filePickers?: Array<
        {
            /**
             * The name that will appear in the context menu.
             *
             * Example: `"My File Picker..."`
             */
            contextMenuName: string;
            /**
             * A function which returns a Promise that resolves to an array of `Track`s
             *
             * Example: `() => Promise.resolve([{ url: './rick_roll.mp3' }])`
             */
            filePicker: () => Promise<Track[]>;
            /**
             * Indicates if this options should be made available when the user is offline.
             */
            requiresNetwork: boolean;
        }
    >;
    zIndex?: number;
    handleTrackDropEvent?: (e: DragEvent) => Track[] | null | Promise<Track[] | null>; // actually React.DragEvent<HTMLDivElement>
    handleAddUrlEvent?: () => Track[] | null | Promise<Track[] | null>;
    handleLoadListEvent?: () => Track[] | null | Promise<Track[] | null>;
    handleSaveListEvent?: (tracks: Track[]) => null | Promise<null>;
}>();

const webampElement = useTemplateRef('webampElement');
const webamp = shallowRef<WebampLazy>();

onMounted(() => {
    webamp.value = new WebampLazy(Object.assign({
        __butterchurnOptions: {
            importButterchurn: () => {
                // Only load butterchurn when music starts playing to reduce initial page load
                return import("butterchurn");
            },
            getPresets: async () => {
                // Load presets from preset URL mapping on demand as they are used
                const { default: namesToPresetUrls } = await import('@/lib/webamp/butterchurn-presets');
                return Object.keys(namesToPresetUrls).map((name) => {
                    return {
                        name,
                        getButterchrunPresetObject() {
                            return namesToPresetUrls[name as keyof typeof namesToPresetUrls]();
                        }
                    };
                });
            },
            butterchurnOpen: true,
        },
        // windowLayout: {
        //     main: { position: { top: 0, left: 0 } },
        //     equalizer: { position: { top: 0, left: 116 } },
        //     playlist: { position: { top: 0, left: 232 }, size: { extraWidth: 0, extraHeight: 4 } },
        //     milkdrop: { position: { top: 275, left: 0 }, size: { extraWidth: 7, extraHeight: 12 } },
        // },
        requireJSZip: async () => (await import('jszip')).default,
        requireMusicMetadata: async () => await import('music-metadata'),
    } satisfies (WebampOptions | PrivateOptions | InjectableDependencies), props as WebampOptions));
    webamp.value.renderWhenReady(webampElement.value!);
});

onBeforeUnmount(() => {
    webamp.value?.dispose();
})
</script>

<template>
    <div v-bind="$attrs" ref="webampElement"></div>
</template>
