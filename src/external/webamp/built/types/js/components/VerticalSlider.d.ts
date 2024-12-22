import { ReactNode } from "react";
type Props = {
    height: number;
    width: number;
    handleHeight: number;
    value: number;
    handle: ReactNode;
    onBeforeChange?: () => void;
    onChange: (value: number) => void;
    onAfterChange?: () => void;
    requireClicksOriginateLocally?: boolean;
    disabled?: boolean;
};
export default function VerticalSlider({ value, height, width, handle, handleHeight, onBeforeChange, onChange, onAfterChange, requireClicksOriginateLocally, disabled, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
