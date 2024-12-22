/// <reference types="react" />
import { WindowInfo } from "./types";
interface Time {
    minutesFirstDigit: string;
    minutesSecondDigit: string;
    secondsFirstDigit: string;
    secondsSecondDigit: string;
}
interface IniData {
    [section: string]: {
        [key: string]: string;
    };
}
export declare function imgFromUrl(url: string): Promise<HTMLImageElement>;
export declare const getTimeObj: (time: number | null) => Time;
export declare const getTimeStr: (time: number | null, truncate?: boolean) => string;
export declare const parseViscolors: (text: string) => string[];
export declare const parseIni: (text: string) => IniData;
export declare const clamp: (value: number, min: number, max: number) => number;
export declare const sum: (values: number[]) => number;
export declare function base64FromDataArray(dataArray: Uint8Array): string;
export declare const base64FromArrayBuffer: (arrayBuffer: ArrayBuffer) => string;
export declare function downloadURI(uri: string, name: string): void;
export declare const toPercent: (min: number, max: number, value: number) => number;
export declare const percentToRange: (percent: number, min: number, max: number) => number;
export declare const percentToIndex: (percent: number, length: number) => number;
export declare const normalizeEqBand: (oldValue: number) => number;
export declare const denormalizeEqBand: (oldValue: number) => number;
export declare function merge<T extends object, S extends object>(target: T, source: S): T & S;
export declare function segment<V>(min: number, max: number, value: number, newValues: V[]): V;
export declare function shuffle<T>(array: T[]): T[];
export declare function sort<T>(array: T[], iteratee: (value: T) => number | string): T[];
export declare function moveSelected<V>(arr: V[], isSelected: (index: number) => boolean, offset: number): V[];
export declare function spliceIn<T>(original: T[], start: number, newValues: T[]): T[];
export declare function replaceAtIndex<T>(arr: T[], index: number, newValue: T): T[];
export declare function debounce(func: Function, delay: number): Function;
export declare function throttle(func: Function, delay: number): Function;
export declare function uniqueId(): number;
export declare function objectForEach<V>(obj: {
    [key: string]: V;
}, cb: (value: V, key: string) => void): void;
export declare function objectMap<V, N>(obj: {
    [key: string]: V;
}, cb: (value: V, key: string) => N): {
    [key: string]: N;
};
export declare function objectFilter<V>(obj: {
    [key: string]: V;
}, predicate: (value: V, key: string) => boolean): {
    [key: string]: V;
};
export declare const calculateBoundingBox: (windows: WindowInfo[]) => {
    left: number;
    top: number;
    bottom: number;
    right: number;
} | null;
export declare function findLastIndex<T>(arr: T[], cb: (val: T) => boolean): number;
export declare function getWindowSize(): {
    width: number;
    height: number;
};
export declare function getScreenSize(): {
    width: number;
    height: number;
};
type PosEvent = MouseEvent | TouchEvent | React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>;
export declare function getX(e: PosEvent): number;
export declare function getY(e: PosEvent): number;
export declare function weakMapMemoize<T extends object, R>(func: (value: T) => R): (value: T) => R;
export {};
