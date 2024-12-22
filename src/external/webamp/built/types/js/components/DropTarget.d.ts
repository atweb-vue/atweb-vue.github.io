/// <reference types="react" />
/// <reference types="react/experimental" />
import { WindowId } from "../types";
interface Coord {
    x: number;
    y: number;
}
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    handleDrop(e: React.DragEvent<HTMLDivElement>, coord: Coord): void;
    windowId: WindowId;
}
declare const DropTarget: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default DropTarget;
