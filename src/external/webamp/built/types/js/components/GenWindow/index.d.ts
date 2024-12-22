import * as React from "react";
import { WindowId } from "../../types";
interface WindowSize {
    width: number;
    height: number;
}
interface Props {
    windowId: WindowId;
    children: (windowSize: WindowSize) => React.ReactNode;
    title: string;
    onKeyDown?(e: KeyboardEvent): void;
}
export declare const GenWindow: ({ children, title, windowId, onKeyDown }: Props) => import("react/jsx-runtime").JSX.Element;
export default GenWindow;
