import { IMusicMetadataBrowserApi } from "./types";
import { IAudioMetadata } from "music-metadata-browser";
type MediaDataType = string | ArrayBuffer | Blob;
export declare function genMediaTags(file: MediaDataType, musicMetadata: IMusicMetadataBrowserApi): Promise<IAudioMetadata>;
export declare function genMediaDuration(url: string): Promise<number>;
export declare function genArrayBufferFromFileReference(fileReference: File): Promise<any>;
export declare function genStringFromFileReference(fileReference: File): Promise<string>;
interface PromptForFileReferenceOptions {
    accept?: string | null;
    directory?: boolean;
}
export declare function promptForFileReferences({ accept, directory }?: PromptForFileReferenceOptions): Promise<FileList>;
export declare function curUrlFromByteArray(arr: Uint8Array): string;
export declare function filenameFromUrl(url: string): string | null;
export {};
