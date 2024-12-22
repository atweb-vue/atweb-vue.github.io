import { Action, SkinImages, Cursors, SkinRegion, GenLetterWidths, PlaylistStyle, SkinGenExColors, DummyVizData } from "../types";
import { DisplaySerializedStateV1 } from "../serializedStates/v1Types";
export interface DisplayState {
    visualizerStyle: number;
    doubled: boolean;
    llama: boolean;
    disableMarquee: boolean;
    marqueeStep: number;
    skinImages: SkinImages;
    skinCursors: Cursors | null;
    skinRegion: SkinRegion;
    skinGenLetterWidths: GenLetterWidths | null;
    skinColors: string[];
    skinPlaylistStyle: PlaylistStyle | null;
    skinGenExColors: SkinGenExColors;
    working: boolean;
    closed: boolean;
    loading: boolean;
    playlistScrollPosition: number;
    zIndex: number;
    dummyVizData: DummyVizData | null;
}
declare const display: (state: DisplayState | undefined, action: Action) => DisplayState;
export default display;
export declare const getSerializedState: (state: DisplayState) => DisplaySerializedStateV1;
export declare const getVisualizerStyle: import("reselect").OutputSelector<DisplayState, string, (res: number) => string>;
