export declare function usePaintOscilloscopeFrame({ analyser, height, width, renderWidth, }: {
    analyser: AnalyserNode;
    height: number;
    width: number;
    renderWidth: number;
}): (canvasCtx: CanvasRenderingContext2D) => void;
