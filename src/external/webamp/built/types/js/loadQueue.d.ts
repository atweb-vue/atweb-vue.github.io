export default class LoadQueue {
    constructor({ threads }: {
        threads: any;
    });
    _queue: any;
    _availableThreads: any;
    push(task: any, priority: any): () => void;
    _run(): void;
}
