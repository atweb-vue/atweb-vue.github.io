import Emitter from "../emitter";
import { MediaStatus } from "../types";
export default class ElementSource {
    _emitter: Emitter;
    _context: AudioContext;
    _source: AudioNode;
    _destination: AudioNode;
    _audio: HTMLAudioElement;
    _stalled: boolean;
    _status: MediaStatus;
    on(eventType: string, cb: (...args: any[]) => void): () => void;
    constructor(context: AudioContext, destination: AudioNode);
    _setStalled(stalled: boolean): void;
    disconnect(): void;
    loadUrl(url: string): Promise<void>;
    play(): Promise<void>;
    pause(): void;
    stop(): void;
    seekToTime(time: number): void;
    getStalled(): boolean;
    getStatus(): MediaStatus;
    getDuration(): number;
    getTimeElapsed(): number;
    _setStatus(status: MediaStatus): void;
    dispose(): void;
}
