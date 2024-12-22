/// <reference types="react" />
export declare const Hr: () => import("react/jsx-runtime").JSX.Element;
interface ParentProps {
    label: string;
    children: React.ReactNode;
}
export declare const Parent: ({ children, label }: ParentProps) => import("react/jsx-runtime").JSX.Element;
interface LinkNodeProps {
    label: string;
    href: string;
    target?: string;
}
export declare const LinkNode: (props: LinkNodeProps) => import("react/jsx-runtime").JSX.Element;
interface NodeProps {
    label: string;
    checked?: boolean;
    hotkey?: string;
    className?: string;
    onClick?: () => void;
}
export declare const Node: (props: NodeProps) => import("react/jsx-runtime").JSX.Element;
interface ContextMenuProps {
    children: React.ReactNode;
    offsetTop: number;
    offsetLeft: number;
    top?: boolean;
    bottom?: boolean;
    selected: boolean;
}
export default function ContextMenu({ children, offsetTop, offsetLeft, top, bottom, selected, }: ContextMenuProps): import("react/jsx-runtime").JSX.Element | null;
export {};
