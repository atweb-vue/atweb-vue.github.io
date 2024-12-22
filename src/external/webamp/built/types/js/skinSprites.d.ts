export type SpriteName = string;
export interface Sprite {
    name: SpriteName;
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare const FONT_LOOKUP: {
    [letter: string]: [number, number];
};
export declare const imageConstFromChar: (char: string) => string;
interface SpriteMap {
    [sheet: string]: Sprite[];
}
declare const sprites: SpriteMap;
export default sprites;
