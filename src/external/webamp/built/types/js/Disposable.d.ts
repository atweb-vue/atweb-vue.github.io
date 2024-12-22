type Teardown = (() => void) | {
    dispose: () => void;
};
export default class Disposable {
    _teardowns: Teardown[];
    disposed: boolean;
    constructor();
    add(...teardowns: Teardown[]): void;
    dispose(): void;
}
export {};
