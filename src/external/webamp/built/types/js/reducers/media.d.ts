import { Action, MediaStatus, TimeMode } from "../types";
import { MediaSerializedStateV1 } from "../serializedStates/v1Types";
export interface MediaState {
    timeMode: TimeMode;
    timeElapsed: number;
    volume: number;
    balance: number;
    shuffle: boolean;
    repeat: boolean;
    status: MediaStatus;
}
declare const media: (state: MediaState | undefined, action: Action) => MediaState;
export declare function getSerializedState(state: MediaState): MediaSerializedStateV1;
export default media;
