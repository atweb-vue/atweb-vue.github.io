import { Action, StatePreset, TransitionType, MilkdropMessage } from "../types";
export interface MilkdropState {
    display: "WINDOW" | "DESKTOP" | "FULLSCREEN";
    overlay: boolean;
    presetHistory: number[];
    presets: StatePreset[];
    currentPresetIndex: number | null;
    butterchurn: any;
    transitionType: TransitionType;
    randomize: boolean;
    cycling: boolean;
    message: MilkdropMessage | null;
}
export declare const milkdrop: (state: MilkdropState | undefined, action: Action) => MilkdropState;
export default milkdrop;
