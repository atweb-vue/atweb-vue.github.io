import { WindowInfo } from "./types";
interface PositionDiff {
    [key: string]: {
        x: number;
        y: number;
    };
}
export interface SizeDiff {
    [key: string]: {
        width: number;
        height: number;
    };
}
export declare function getPositionDiff(graph: Graph, sizeDiff: SizeDiff): PositionDiff;
interface Edges {
    below?: string;
    right?: string;
}
export interface Graph {
    [id: string]: Edges;
}
export declare function generateGraph(windows: WindowInfo[]): Graph;
export {};
