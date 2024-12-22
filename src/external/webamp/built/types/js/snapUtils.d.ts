import { Box, Point, Diff, BoundingBox } from "./types";
export declare const SNAP_DISTANCE = 15;
export declare const top: (box: Box) => number;
export declare const bottom: (box: Box) => number;
export declare const left: (box: Box) => number;
export declare const right: (box: Box) => number;
export declare const near: (a: number, b: number) => boolean;
export declare const overlapX: (a: Box, b: Box) => boolean;
export declare const overlapY: (a: Box, b: Box) => boolean;
export declare const snap: (boxA: Box, boxB: Box) => {
    x: number | undefined;
    y: number | undefined;
};
export declare const snapDiff: (a: Box, b: Box) => Point;
export declare const snapDiffManyToMany: (as: Box[], bs: Box[]) => Point;
export declare const snapToMany: (boxA: Box, otherBoxes: Box[]) => Diff;
export declare const snapWithin: (boxA: Box, boundingBox: BoundingBox) => Diff;
export declare const snapWithinDiff: (a: Box, b: BoundingBox) => {
    x: number;
    y: number;
};
export declare const applySnap: (original: Point, ...snaps: Diff[]) => Diff;
export declare const boundingBox: (nodes: Box[]) => Box;
export declare function traceConnection<B extends Box>(areConnected: (candidate: Box, n: Box) => boolean): (candidates: B[], node: B) => Set<B>;
export declare const applyDiff: (a: Point, b: Point) => {
    x: number;
    y: number;
};
export declare const applyMultipleDiffs: (initial: Point, ...diffs: Point[]) => {
    x: number;
    y: number;
};
