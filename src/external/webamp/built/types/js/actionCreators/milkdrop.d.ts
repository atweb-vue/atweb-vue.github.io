/// <reference types="react" />
import { TransitionType, ButterchurnOptions, StatePreset, Thunk, Action } from "../types";
export declare function initializePresets(presetOptions: ButterchurnOptions): Thunk;
export declare function loadPresets(presets: StatePreset[]): Thunk;
export declare function appendPresetFileList(fileList: FileList): Thunk;
export declare function selectNextPreset(transitionType?: TransitionType): Thunk;
export declare function selectPreviousPreset(transitionType?: TransitionType): Thunk;
export declare function selectRandomPreset(transitionType?: TransitionType): Thunk;
export declare function requestPresetAtIndex(index: number, transitionType: TransitionType, addToHistory: boolean): Thunk;
export declare function handlePresetDrop(e: React.DragEvent): Thunk;
export declare function toggleRandomizePresets(): Action;
export declare function togglePresetCycling(): Action;
export declare function scheduleMilkdropMessage(message: string): Action;
