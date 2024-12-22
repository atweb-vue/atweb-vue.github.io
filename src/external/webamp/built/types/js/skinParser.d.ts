export default skinParser;
declare function skinParser(zipFileBuffer: any, JSZip: any): Promise<{
    colors: string[];
    playlistStyle: import("./types").PlaylistStyle;
    images: any;
    genLetterWidths: {} | null;
    cursors: any;
    region: {
        [section: string]: string[];
    };
    genExColors: import("./types").SkinGenExColors | null;
}>;
