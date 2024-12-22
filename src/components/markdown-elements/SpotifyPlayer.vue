<script setup lang="ts">
import { type EmbedController, useSpotifyIFrameAPI } from '@/lib/spotify';
import { useScriptTag, watchImmediate } from '@vueuse/core';
import { onBeforeUnmount, onMounted, onUnmounted, shallowRef, useTemplateRef } from 'vue';

const props = defineProps<{
    uri?: string;
    width?: number;
    height?: number;
}>();

const spotifyElement = useTemplateRef('spotifyElement');
const IFrameAPI = useSpotifyIFrameAPI();
const EmbedController = shallowRef<EmbedController>();

onMounted(() => {
    watchImmediate(IFrameAPI, IFrameAPI => {
        if (!IFrameAPI) return;

        IFrameAPI.createController(spotifyElement.value!, {
            uri: props.uri,
            width: props.width,
            height: props.height,
        }, controller => {
            EmbedController.value = controller;
        });
    });
});

onBeforeUnmount(() => {
    EmbedController.value?.destroy();
});

</script>

<template>
    <component :is="'script'"><slot></slot></component>
    <div v-bind="$attrs" ref="spotifyElement"></div>
</template>
