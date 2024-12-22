/// <reference types="react" />
type Props = {
    children: string;
    id?: string;
};
export default function Css({ children, id }: Props): import("react").ReactPortal;
export {};
