/// <reference types="react" />
type Size = [number, number];
interface Props {
    currentSize: Size;
    setWindowSize(size: Size): void;
    widthOnly?: boolean;
    id?: string;
}
declare function ResizeTarget(props: Props): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof ResizeTarget>;
export default _default;
