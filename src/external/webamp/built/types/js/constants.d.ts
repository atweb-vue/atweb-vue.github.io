import { Band, MediaTagRequestStatus, MediaStatus, LoadStyle, TimeMode, WindowId } from "./types";
export declare const BANDS: Band[];
export declare const WINDOWS: {
    [key: string]: WindowId;
};
export declare const LOAD_STYLE: Record<LoadStyle, LoadStyle>;
export declare const MEDIA_TAG_REQUEST_STATUS: Record<MediaTagRequestStatus, MediaTagRequestStatus>;
export declare const UTF8_ELLIPSIS = "\u2026";
export declare const CHARACTER_WIDTH = 5;
export declare const WINDOW_RESIZE_SEGMENT_WIDTH = 25;
export declare const WINDOW_RESIZE_SEGMENT_HEIGHT = 29;
export declare const WINDOW_HEIGHT = 116;
export declare const WINDOW_WIDTH = 275;
export declare const TRACK_HEIGHT = 13;
export declare const LETTERS: string[];
export declare const DEFAULT_SKIN: {
    images: {
        EQ_PREAMP_LINE: string;
        EQ_GRAPH_LINE_COLORS: string;
    };
    colors: string[];
    playlistStyle: {
        normal: string;
        current: string;
        normalbg: string;
        selectedbg: string;
        font: string;
    };
};
export declare const VISUALIZERS: {
    OSCILLOSCOPE: string;
    BAR: string;
    NONE: string;
    MILKDROP: string;
};
export declare const VISUALIZER_ORDER: string[];
export declare const TIME_MODE: Record<TimeMode, TimeMode>;
export declare const MEDIA_STATUS: Record<MediaStatus, MediaStatus>;
