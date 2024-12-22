import { Band, Thunk, Action } from "../types";
export declare function setEqBand(band: Band, value: number): Action;
export declare function setEqToMax(): Thunk;
export declare function setEqToMid(): Thunk;
export declare function setEqToMin(): Thunk;
export declare function setPreamp(value: number): Action;
export declare function toggleEq(): Thunk;
export declare function toggleEqAuto(): Thunk;
