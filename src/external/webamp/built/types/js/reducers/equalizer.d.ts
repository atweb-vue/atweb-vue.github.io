import { Slider, Action } from "./../types";
import { EqualizerSerializedStateV1 } from "../serializedStates/v1Types";
export interface EqualizerState {
    on: boolean;
    auto: boolean;
    sliders: Record<Slider, number>;
}
declare const equalizer: (state: EqualizerState | undefined, action: Action) => EqualizerState;
export declare function getSerializedState(state: EqualizerState): EqualizerSerializedStateV1;
export default equalizer;
