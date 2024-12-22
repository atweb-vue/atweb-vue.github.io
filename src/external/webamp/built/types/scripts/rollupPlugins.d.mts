export function getPlugins({ minify, outputFile, vite }: {
    minify: any;
    outputFile: any;
    vite: any;
}): (import("rollup").Plugin<any> | {
    name: string;
    resolveId(source: any, importer: any): string | null;
} | {
    name: string;
    resolveId(importee: string, importer: string): {
        id: any;
        moduleSideEffects: boolean;
    } | null;
    load(id: string): string | undefined;
    transform(code: string, id: string): any;
} | import("rollup").Plugin | null)[];
