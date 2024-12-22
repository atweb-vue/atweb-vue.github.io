import { ReactNode } from "react";
interface Props {
    id: string;
    children: ReactNode | Array<ReactNode>;
}
declare function PlaylistMenu(props: Props): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof PlaylistMenu>;
export default _default;
