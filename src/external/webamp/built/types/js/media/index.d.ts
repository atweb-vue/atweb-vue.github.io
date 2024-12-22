import { Band } from "../types";
import Emitter from "../emitter";
import ElementSource from "./elementSource";
interface StereoBalanceNodeType extends AudioNode {
    constructor(context: AudioContext): StereoBalanceNodeType;
    balance: {
        value: number;
    };
}
export default class Media {
    _emitter: Emitter;
    _context: AudioContext;
    _balance: StereoBalanceNodeType;
    _staticSource: GainNode;
    _preamp: GainNode;
    _analyser: AnalyserNode;
    _gainNode: GainNode;
    _source: ElementSource;
    _bands: {
        [band: number]: BiquadFilterNode;
    };
    constructor();
    getAnalyser(): AnalyserNode;
    duration(): number;
    timeElapsed(): number;
    timeRemaining(): number;
    percentComplete(): number;
    play(): Promise<void>;
    pause(): void;
    stop(): void;
    seekToPercentComplete(percent: number): void;
    setVolume(volume: number): void;
    setPreamp(value: number): void;
    setBalance(balance: number): void;
    setEqBand(band: Band, value: number): void;
    disableEq(): void;
    enableEq(): void;
    on(event: string, callback: (...args: any[]) => void): void;
    seekToTime(time: number): void;
    loadFromUrl(url: string, autoPlay: boolean): Promise<void>;
    dispose(): void;
}
export {};
