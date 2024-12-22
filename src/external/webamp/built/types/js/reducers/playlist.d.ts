import { Action } from "../types";
export interface PlaylistState {
    trackOrder: number[];
    lastSelectedIndex: number | null;
    currentTrack: number | null;
    selectedTracks: Set<number>;
}
declare const playlist: (state: PlaylistState | undefined, action: Action) => PlaylistState;
export default playlist;
