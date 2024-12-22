import { ReactNode } from "react";
interface Props {
    windows: {
        [windowId: string]: ReactNode;
    };
}
export default function WindowManager({ windows: propsWindows }: Props): import("react/jsx-runtime").JSX.Element;
export {};
