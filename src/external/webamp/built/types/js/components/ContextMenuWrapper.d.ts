import { ReactNode } from "react";
interface Props {
    renderContents(): ReactNode;
    children: ReactNode;
}
export default function ContextMenuWraper({ children, renderContents, ...passThroughProps }: Props): import("react/jsx-runtime").JSX.Element;
export {};
