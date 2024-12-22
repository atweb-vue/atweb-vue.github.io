import * as React from "react";
import { ReactNode } from "react";
interface Props {
    children: ReactNode;
}
declare const Desktop: React.MemoExoticComponent<({ children }: Props) => React.ReactPortal>;
export default Desktop;
