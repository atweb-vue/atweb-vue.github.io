/// <reference types="react" />
/// <reference types="react/experimental" />
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    renderMenu: () => React.ReactNode;
    top?: boolean;
    bottom?: boolean;
}
declare function ContextMenuTarget(props: Props): import("react/jsx-runtime").JSX.Element;
export default ContextMenuTarget;
