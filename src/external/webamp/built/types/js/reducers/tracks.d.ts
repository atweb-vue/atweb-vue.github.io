import { PlaylistTrack, Action } from "../types";
export interface TracksState {
    [id: string]: PlaylistTrack;
}
declare const tracks: (state: TracksState | undefined, action: Action) => TracksState;
export default tracks;
export declare const getTrackDisplayName: (state: TracksState, id?: number | null) => string | null;
