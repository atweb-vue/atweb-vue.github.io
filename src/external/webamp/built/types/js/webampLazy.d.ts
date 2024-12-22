import ReactDOM from "react-dom/client";
import { Store, Track, LoadedURLTrack, Middleware, ButterchurnOptions, PartialState, Options, MediaStatus } from "./types";
import Media from "./media";
import Emitter from "./emitter";
import { SerializedStateV1 } from "./serializedStates/v1Types";
import Disposable from "./Disposable";
export interface PrivateOptions {
    __initialState?: PartialState;
    __customMiddlewares?: Middleware[];
    __butterchurnOptions?: ButterchurnOptions;
    __customMediaClass?: typeof Media;
}
export interface InjectableDependencies {
    requireJSZip: () => Promise<any>;
    requireMusicMetadata: () => Promise<any>;
}
declare class Webamp {
    static VERSION: string;
    _actionEmitter: Emitter;
    _root: ReactDOM.Root | null;
    _disposable: Disposable;
    options: Options & PrivateOptions & InjectableDependencies;
    media: Media;
    store: Store;
    /**
     * Returns a true if the current browser supports the features that Webamp depends upon.
     *
     * It is recommended to check this before you attempt to instantiate an instance of Winamp.
     */
    static browserIsSupported(): boolean;
    constructor(options: Options & PrivateOptions & InjectableDependencies);
    /**
     * Play the current tack
     */
    play(): void;
    /**
     * Pause the current tack
     */
    pause(): void;
    /**
     * Stop the currently playing audio. Equivalent to pressing the "stop" button
     */
    stop(): void;
    /**
     * Set volume from 0 - 100
     */
    setVolume(volume: number): void;
    /**
     * Seek backward n seconds in the curent track
     */
    seekBackward(seconds: number): void;
    /**
     * Seek forward n seconds in the curent track
     */
    seekForward(seconds: number): void;
    /**
     * Seek to a given time within the current track
     */
    seekToTime(seconds: number): void;
    /**
     * Play the next track
     */
    nextTrack(): void;
    /**
     * Play the previous track
     */
    previousTrack(): void;
    /**
     * Add an array of `Track`s to the end of the playlist.
     */
    appendTracks(tracks: Track[]): void;
    /**
     * Replace the playlist with an array of `Track`s and begin playing the first track.
     */
    setTracksToPlay(tracks: Track[]): void;
    /**
     * Get the current "playing" status.
     */
    getMediaStatus(): MediaStatus | null;
    /**
     * A callback which will be called when Webamp is _about to_ close. Returns an
     * "unsubscribe" function. The callback will be passed a `cancel` function
     * which you can use to conditionally prevent Webamp from being closed.
     *
     * @returns An "unsubscribe" function. Useful if at some point in the future you want to stop listening to these events.
     */
    onWillClose(cb: (cancel: () => void) => void): () => void;
    /**
     * A callback which will be called when Webamp is closed.
     *
     * @returns An "unsubscribe" function. Useful if at some point in the future you want to stop listening to these events.
     */
    onClose(cb: () => void): () => void;
    /**
     * Equivalent to selection "Close" from Webamp's options menu. Once closed,
     * you can open it again with `.reopen()`.
     */
    close(): void;
    /**
     * After `.close()`ing this instance, you can reopen it by calling this method.
     */
    reopen(): void;
    /**
     * A callback which will be called when a new track starts loading.
     *
     * This can happen on startup when the first track starts buffering, or when a subsequent track starts playing.
     * The callback will be called with an object `({url: 'https://example.com/track.mp3'})` containing the URL of the track.
     * Note: If the user drags in a track, the URL may be an ObjectURL.
     *
     * @returns An "unsubscribe" function. Useful if at some point in the future you want to stop listening to these events.
     */
    onTrackDidChange(cb: (trackInfo: LoadedURLTrack | null) => void): () => void;
    /**
     * A callback which will be called when Webamp is minimized.
     *
     * @returns An "unsubscribe" function. Useful if at some point in the future you want to stop listening to these events.
     */
    onMinimize(cb: () => void): () => void;
    /**
     * Set the skin to use. This can be a URL or a base64 encoded string. The skin
     * will be loaded asynchronously.
     *
     * NOTE: If the URL is not on the same domain as the page, you will need to consider CORS.
     * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
     */
    setSkinFromUrl(url: string): void;
    /**
     * Returns a promise that resolves when the skin is done loading.
     */
    skinIsLoaded(): Promise<void>;
    /**
     * Webamp will wait until it has fetched the skin and fully parsed it and then render itself.
     *
     * Webamp is rendered into a new DOM node at the end of the <body> tag with the id `#webamp`.
     *
     * If a domNode is passed, Webamp will place itself in the center of that DOM node.
     *
     * @returns A promise is returned which will resolve after the render is complete.
     */
    renderWhenReady(node: HTMLElement): Promise<void>;
    /**
     * **Note:** _This method is not fully functional. It is currently impossible to
     * clean up a Winamp instance. This method makes an effort, but it still leaks
     * the whole instance. In the future the behavior of this method will improve,
     * so you might as well call it._
     *
     * When you are done with a Webamp instance, call this method and Webamp will
     * attempt to clean itself up to avoid memory leaks.
     */
    dispose(): void;
    __loadSerializedState(serializedState: SerializedStateV1): void;
    __getSerializedState(): SerializedStateV1;
    __onStateChange(cb: () => void): () => void;
    _bufferTracks(tracks: Track[]): void;
}
export default Webamp;
