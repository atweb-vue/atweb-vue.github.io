import { Slider as SliderType } from "../../types";
interface Props {
    id: string;
    band: SliderType;
    onChange(value: number): void;
    clickOriginatedInEq?: boolean;
}
export declare const spriteNumber: (value: number) => number;
export declare const spriteOffsets: (number: number) => {
    x: number;
    y: number;
};
export default function Band({ id, onChange, band, clickOriginatedInEq, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
