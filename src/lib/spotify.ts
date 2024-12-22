import { useScriptTag } from '@vueuse/core';
import { shallowRef } from 'vue';

export interface IFrameAPI {
    createController(element: Element, options: { uri?: string, width?: number, height?: number }, callback: (EmbedController: EmbedController) => void): void;
}
export interface EmbedController {
    loadUri(spotifyUri: string, preferVideo?: boolean, startAt?: number): void;
    play(): void;
    pause(): void;
    resume(): void;
    togglePlay(): void;
    restart(): void;
    seek(seconds: number): void;
    destroy(): void;

    addListener(event: 'ready', callback: () => void): void;
    addListener(event: 'playback_update', callback: (e: {data: {isPaused: boolean, isBuffering: boolean, duration: number, position: number }}) => void): void;
}

declare global {
    interface Window {
        onSpotifyIframeApiReady: (IFrameAPI: IFrameAPI) => void;
    }
}

const IFrameAPI = shallowRef<IFrameAPI>();
window.onSpotifyIframeApiReady = api => {
    IFrameAPI.value = api;
};
const { load: loadSpotify } = useScriptTag('https://open.spotify.com/embed/iframe-api/v1', () => {}, { manual: true });
loadSpotify();

export function useSpotifyIFrameAPI() {
    return IFrameAPI;
}
