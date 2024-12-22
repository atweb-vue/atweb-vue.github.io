import { AppState, PlaylistTrack, WebampWindow, WindowId, LoadedURLTrack, PlaylistStyle, TransitionType, MediaStatus, TimeMode, SkinImages, Cursors, SkinRegion, GenLetterWidths, MilkdropMessage, DummyVizData } from "./types";
import * as fromTracks from "./reducers/tracks";
import * as fromWindows from "./reducers/windows";
import { SerializedStateV1 } from "./serializedStates/v1Types";
export declare const getSliders: (state: AppState) => Record<import("./types").Slider, number>;
export declare const getEqfData: import("reselect").OutputSelector<AppState, {
    presets: {
        [key: string]: string | number;
    }[];
    type: string;
}, (res: Record<import("./types").Slider, number>) => {
    presets: {
        [key: string]: string | number;
    }[];
    type: string;
}>;
export declare const getTracks: (state: AppState) => fromTracks.TracksState;
export declare const getTrackUrl: (state: AppState) => (id: number) => string | null;
export declare const getTrackOrder: (state: AppState) => number[];
export declare const getTrackCount: import("reselect").OutputSelector<AppState, number, (res: number[]) => number>;
export declare const getOrderedTracks: import("reselect").OutputSelector<AppState, number[], (res1: fromTracks.TracksState, res2: number[]) => number[]>;
export declare const getUserTracks: import("reselect").OutputSelector<AppState, {
    url: string;
    metaData: {
        artist: string;
        title: string;
        album: string | undefined;
        albumArtUrl: string;
    };
}[], (res1: fromTracks.TracksState, res2: number[]) => {
    url: string;
    metaData: {
        artist: string;
        title: string;
        album: string | undefined;
        albumArtUrl: string;
    };
}[]>;
export declare const getSelectedTrackIds: (state: AppState) => Set<number>;
export declare const getSelectedTrackObjects: import("reselect").OutputSelector<AppState, PlaylistTrack[], (res1: PlaylistTrack[], res2: Set<number>) => PlaylistTrack[]>;
export declare const getRunningTimeMessage: import("reselect").OutputSelector<AppState, string, (res1: number, res2: number) => string>;
export declare const getCurrentTrackIndex: (state: AppState) => number;
export declare const getCurrentTrackNumber: import("reselect").OutputSelector<AppState, number, (res: number) => number>;
export declare const getCurrentTrackId: (state: AppState) => number | null;
export declare const getRandomTrackId: (state: AppState) => number | null;
export declare const getNextTrackId: (state: AppState, n?: number) => number | null;
export declare const getGenWindows: (state: AppState) => {
    [name: string]: fromWindows.WebampWindow;
};
export declare const getWindowOpen: import("reselect").OutputSelector<AppState, (windowId: WindowId) => boolean, (res: {
    [name: string]: fromWindows.WebampWindow;
}) => (windowId: WindowId) => boolean>;
export declare const getWindowHidden: import("reselect").OutputSelector<AppState, (windowId: WindowId) => boolean, (res: boolean) => (windowId: WindowId) => boolean>;
export declare const getWindowShade: import("reselect").OutputSelector<AppState, (windowId: WindowId) => boolean | undefined, (res: {
    [name: string]: fromWindows.WebampWindow;
}) => (windowId: WindowId) => boolean | undefined>;
export declare const getWindowSize: import("reselect").OutputSelector<AppState, (windowId: WindowId) => [number, number], (res: {
    [name: string]: fromWindows.WebampWindow;
}) => (windowId: WindowId) => [number, number]>;
export declare const getWindowPositions: import("reselect").OutputSelector<AppState, fromWindows.WindowPositions, (res: {
    [name: string]: fromWindows.WebampWindow;
}) => fromWindows.WindowPositions>;
export declare const getNumberOfVisibleTracks: import("reselect").OutputSelector<AppState, number, (res: (windowId: WindowId) => [number, number]) => number>;
export declare const getOverflowTrackCount: import("reselect").OutputSelector<AppState, number, (res1: number, res2: number) => number>;
export declare const getPlaylistScrollPosition: import("reselect").OutputSelector<AppState, number, (res1: number, res2: number) => number>;
export declare const getScrollOffset: import("reselect").OutputSelector<AppState, number, (res1: number, res2: number, res3: number) => number>;
export declare const getVisibleTrackIds: import("reselect").OutputSelector<AppState, number[], (res1: number, res2: number[], res3: number) => number[]>;
export declare function getAllTracksAreVisible(state: AppState): boolean;
export declare const getTrackIsVisibleFunction: import("reselect").OutputSelector<AppState, (id: number) => boolean, (res: number[]) => (id: number) => boolean>;
export declare const getVisibleTracks: import("reselect").OutputSelector<AppState, PlaylistTrack[], (res1: number[], res2: fromTracks.TracksState) => PlaylistTrack[]>;
export declare const getPlaylist: (state: AppState) => import("./reducers/playlist").PlaylistState;
export declare const getDuration: (state: AppState) => number | null;
export declare const getTrackDisplayName: import("reselect").OutputSelector<AppState, (trackId: number | null) => string | null, (res: fromTracks.TracksState) => (trackId: number | null) => string | null>;
export declare const getCurrentTrackDisplayName: import("reselect").OutputSelector<AppState, string | null, (res1: number | null, res2: (trackId: number | null) => string | null) => string | null>;
export declare const getMediaStatus: (state: AppState) => MediaStatus;
export declare const getMediaIsPlaying: (state: AppState) => boolean;
export declare const getCurrentTrack: import("reselect").OutputSelector<AppState, PlaylistTrack | null, (res1: number | null, res2: fromTracks.TracksState) => PlaylistTrack | null>;
export declare const getCurrentlyPlayingTrackIdIfLoaded: import("reselect").OutputSelector<AppState, number | null, (res1: boolean, res2: PlaylistTrack | null) => number | null>;
export declare const getCurrentTrackInfo: import("reselect").OutputSelector<AppState, LoadedURLTrack | null, (res: PlaylistTrack | null) => LoadedURLTrack | null>;
export declare const getMinimalMediaText: import("reselect").OutputSelector<AppState, string | null, (res1: number, res2: string | null) => string | null>;
export declare const getMediaText: import("reselect").OutputSelector<AppState, string | null, (res1: string | null, res2: number | null) => string | null>;
export declare const getNumberOfTracks: (state: AppState) => number;
export declare const getPlaylistURL: import("reselect").OutputSelector<AppState, string, (res1: number, res2: number, res3: number[], res4: fromTracks.TracksState, res5: (trackId: number | null) => string | null) => string>;
export declare function getFocusedWindow(state: AppState): WindowId | null;
export declare function getWindowPosition(state: AppState): (windowId: WindowId) => import("./types").Point;
export declare function getPositionsAreRelative(state: AppState): boolean;
export declare function getDoubled(state: AppState): boolean;
export declare function getLlamaMode(state: AppState): boolean;
export declare function getZIndex(state: AppState): number;
export declare const getWindowSizes: import("reselect").OutputSelector<AppState, {
    [key: string]: {
        height: number;
        width: number;
    };
}, (res1: {
    [name: string]: fromWindows.WebampWindow;
}, res2: boolean) => {
    [key: string]: {
        height: number;
        width: number;
    };
}>;
export declare const getWindowPixelSize: import("reselect").OutputSelector<AppState, (windowId: WindowId) => {
    height: number;
    width: number;
}, (res: {
    [key: string]: {
        height: number;
        width: number;
    };
}) => (windowId: WindowId) => {
    height: number;
    width: number;
}>;
export declare const getNormalizedWindowOrder: import("reselect").OutputSelector<AppState, WindowId[], (res1: WindowId[], res2: {
    [name: string]: fromWindows.WebampWindow;
}) => WindowId[]>;
export declare const getWindowsInfo: import("reselect").OutputSelector<AppState, fromWindows.WindowInfo[], (res1: {
    [key: string]: {
        height: number;
        width: number;
    };
}, res2: fromWindows.WindowPositions, res3: WindowId[]) => fromWindows.WindowInfo[]>;
export declare const getWindowGraph: import("reselect").OutputSelector<AppState, import("./resizeUtils").Graph, (res: fromWindows.WindowInfo[]) => import("./resizeUtils").Graph>;
export declare function getSkinColors(state: AppState): string[];
export declare const getSkinPlaylistStyle: (state: AppState) => PlaylistStyle;
export declare const getVisualizerStyle: (state: AppState) => string;
export declare const getVolume: (state: AppState) => number;
export declare const getBalance: (state: AppState) => number;
export declare const getShuffle: (state: AppState) => boolean;
export declare const getRepeat: (state: AppState) => boolean;
export declare const getChannels: import("reselect").OutputSelector<AppState, number | null, (res: PlaylistTrack | null) => number | null>;
export declare const getTimeElapsed: (state: AppState) => number;
export declare function getSerlializedState(state: AppState): SerializedStateV1;
export declare function getEqualizerEnabled(state: AppState): boolean;
export declare function getEqualizerAuto(state: AppState): boolean;
export declare function getBrowserWindowSize(state: AppState): {
    height: number;
    width: number;
};
export declare const getOpenWindows: import("reselect").OutputSelector<AppState, {
    [key: string]: fromWindows.WebampWindow;
}, (res: {
    [name: string]: fromWindows.WebampWindow;
}) => {
    [key: string]: fromWindows.WebampWindow;
}>;
export declare const getStackedLayoutPositions: import("reselect").OutputSelector<AppState, fromWindows.WindowPositions, (res1: {
    [key: string]: fromWindows.WebampWindow;
}, res2: boolean) => fromWindows.WindowPositions>;
export declare const getUserInputFocus: (state: AppState) => string | null;
export declare const getUserInputScrubPosition: (state: AppState) => number;
export declare const getMarqueeText: (state: AppState) => string;
export declare const getKbps: import("reselect").OutputSelector<AppState, string | null, (res: PlaylistTrack | null) => string | null>;
export declare const getKhz: import("reselect").OutputSelector<AppState, string | null, (res: PlaylistTrack | null) => string | null>;
export declare function getMilkdropMessage(state: AppState): MilkdropMessage | null;
export declare function getMilkdropWindowEnabled(state: AppState): boolean;
export declare function getMilkdropDesktopEnabled(state: AppState): boolean;
export declare function getMilkdropFullscreenEnabled(state: AppState): boolean;
export declare function getPresets(state: AppState): any;
export declare function getButterchurn(state: AppState): any;
export declare function getPresetTransitionType(state: AppState): TransitionType;
export declare function getCurrentPresetIndex(state: AppState): number | null;
export declare function getCurrentPreset(state: AppState): any | null;
export declare function getPresetNames(state: AppState): string[];
export declare function getPresetOverlayOpen(state: AppState): boolean;
export declare function getPresetsAreCycling(state: AppState): boolean;
export declare function getRandomizePresets(state: AppState): boolean;
export declare function getClosed(state: AppState): boolean;
export declare function getSkinImages(state: AppState): SkinImages;
export declare function getSkinCursors(state: AppState): Cursors | null;
export declare function getSkinRegion(state: AppState): SkinRegion;
export declare function getSkinLetterWidths(state: AppState): GenLetterWidths | null;
export declare function getPreampLineUrl(state: AppState): string | null;
export declare function getLineColorsUrl(state: AppState): string | null;
export declare const getPreampLineImage: import("reselect").OutputSelector<AppState, Promise<HTMLImageElement | null>, (res: string | null) => Promise<HTMLImageElement | null>>;
export declare const getLineColorsImage: import("reselect").OutputSelector<AppState, Promise<HTMLImageElement | null>, (res: string | null) => Promise<HTMLImageElement | null>>;
export declare function getDummyVizData(state: AppState): DummyVizData | null;
export declare function getMarqueeStep(state: AppState): number;
export declare function getNetworkConnected(state: AppState): boolean;
export declare function getTimeMode(state: AppState): TimeMode;
export declare function getLoading(state: AppState): boolean;
export declare function getWorking(state: AppState): boolean;
export declare function getAvaliableSkins(state: AppState): import("./types").Skin[];
