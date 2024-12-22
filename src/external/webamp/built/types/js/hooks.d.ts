/// <reference types="react" />
import { Action, Thunk, AppState } from "./types";
interface Size {
    width: number;
    height: number;
}
export declare function useUnmountedRef(): {
    current: boolean;
};
export declare function usePromiseValueOrNull<T>(propValue: Promise<T>): T | null;
export declare function useScreenSize(): Size;
export declare function useWindowSize(): Size;
export declare function useIsHovered(): {
    ref: import("react").Dispatch<import("react").SetStateAction<HTMLElement | null>>;
    hover: boolean;
};
export declare function useOnClickAway(ref: Element | null, callback: null | (() => void)): void;
export declare function useTypedSelector<T>(selector: (state: AppState) => T): T;
export declare function useActionCreator<T extends (...args: any[]) => Action | Thunk>(actionCreator: T): (...funcArgs: Parameters<T>) => void;
export declare function useTypedDispatch(): (action: Action | Thunk) => void;
export {};
