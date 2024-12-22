import JSZip from "jszip";
import { PlaylistStyle, SkinGenExColors, CursorImage } from "./types";
import { Sprite } from "./skinSprites";
export declare const getFileExtension: (fileName: string) => string | null;
export declare function getFileFromZip(zip: JSZip, fileName: string, ext: string, mode: "blob" | "text" | "base64" | "uint8array"): Promise<{
    contents: string | Uint8Array | Blob;
    name: string;
} | null>;
export declare function getImgFromBlob(blob: Blob): Promise<ImageBitmap | HTMLImageElement | null>;
export declare function getSpriteUrisFromImg(img: HTMLImageElement | ImageBitmap, sprites: Sprite[]): {
    [spriteName: string]: string;
};
export declare function getImgFromFilename(zip: JSZip, fileName: string): Promise<HTMLImageElement | ImageBitmap | null>;
export declare function getSpriteUrisFromFilename(zip: JSZip, fileName: string): Promise<{
    [spriteName: string]: string;
}>;
export declare function getCursorFromFilename(zip: JSZip, fileName: string): Promise<CursorImage | null>;
export declare function getPlaylistStyle(zip: JSZip): Promise<PlaylistStyle>;
export declare function getGenExColors(zip: JSZip): Promise<null | SkinGenExColors>;
