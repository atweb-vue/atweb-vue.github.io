/// <reference types="react" />
/// <reference types="react/experimental" />
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    onPointerDown?: (e: React.PointerEvent<HTMLDivElement>) => void;
}
declare function ClickedDiv(props: Props): import("react/jsx-runtime").JSX.Element;
export default ClickedDiv;
