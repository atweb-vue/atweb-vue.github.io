/// <reference types="react/experimental" />
import * as React from "react";
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    children: string | number;
    className?: string;
}
export declare const characterClassName: (char: string | number) => string;
declare const Character: React.MemoExoticComponent<({ children: char, className, ...passThrough }: Props) => import("react/jsx-runtime").JSX.Element>;
export default Character;
