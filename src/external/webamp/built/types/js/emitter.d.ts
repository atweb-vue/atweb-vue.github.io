export default class Emitter {
    _listeners: {
        [event: string]: Array<(...args: any[]) => void>;
    };
    constructor();
    on(event: string, callback: (...args: any[]) => void): () => void;
    trigger(event: string, ...args: any[]): void;
    dispose(): void;
}
