/// <reference types="react" />
type Props = {
    children: {
        [id: string]: string[];
    };
};
export default function ClipPaths({ children }: Props): import("react").ReactPortal;
export {};
