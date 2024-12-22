import { Action, Thunk, WindowId, WindowPositions, WindowLayout } from "../types";
export declare function toggleDoubleSizeMode(): Thunk;
export declare function toggleLlamaMode(): Action;
export declare function toggleEqualizerShadeMode(): Thunk;
export declare function toggleMainWindowShadeMode(): Thunk;
export declare function togglePlaylistShadeMode(): Thunk;
export declare function closeWindow(windowId: WindowId): Action;
export declare function setFocusedWindow(window: WindowId | null): Action;
export declare function setWindowSize(windowId: WindowId, size: [number, number]): Action;
export declare function toggleWindow(windowId: WindowId): Action;
export declare function updateWindowPositions(positions: WindowPositions, absolute?: boolean): Action;
export declare function centerWindowsInContainer(container: HTMLElement): Thunk;
export declare function centerWindowsInView(): Thunk;
export declare function centerWindows(box: {
    left: number;
    top: number;
    width: number;
    height: number;
}): Thunk;
export declare function browserWindowSizeChanged(size: {
    height: number;
    width: number;
}): Thunk;
export declare function resetWindowSizes(): Action;
export declare function stackWindows(): Thunk;
export declare function setWindowLayout(layout?: WindowLayout): Thunk;
export declare function ensureWindowsAreOnScreen(): Thunk;
