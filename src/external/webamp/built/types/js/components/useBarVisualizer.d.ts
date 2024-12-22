export declare function usePaintBar({ renderHeight, height, }: {
    renderHeight: number;
    height: number;
}): (ctx: CanvasRenderingContext2D, x: number, barHeight: number, peakHeight: number) => void;
export declare function usePaintBarFrame({ renderHeight, height, analyser, }: {
    renderHeight: number;
    height: number;
    analyser: AnalyserNode;
}): (canvasCtx: CanvasRenderingContext2D) => void;
