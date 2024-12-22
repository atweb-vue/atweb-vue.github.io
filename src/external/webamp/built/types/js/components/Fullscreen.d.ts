import { ReactNode } from "react";
interface Props {
    enabled: boolean;
    children: ReactNode;
    onChange(fullscreen: boolean): void;
}
declare function FullScreen(props: Props): import("react/jsx-runtime").JSX.Element;
export default FullScreen;
