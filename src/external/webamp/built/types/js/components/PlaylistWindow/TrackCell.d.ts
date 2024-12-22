import { ReactNode } from "react";
interface Props {
    id: number;
    index: number;
    handleMoveClick: (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
    children: ReactNode;
}
declare function TrackCell({ children, handleMoveClick, index, id }: Props): import("react/jsx-runtime").JSX.Element;
export default TrackCell;
