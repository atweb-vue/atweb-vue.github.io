/// <reference types="react" />
import { WindowId } from "../types";
interface Props {
    onKeyDown?(e: KeyboardEvent): void;
    windowId: WindowId;
    children: React.ReactNode;
}
declare function FocusTarget({ onKeyDown, windowId, children }: Props): import("react/jsx-runtime").JSX.Element;
export default FocusTarget;
