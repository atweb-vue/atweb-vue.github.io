import { type DuplicationProcessWay, MimeType } from 'mime-type';
import db from 'mime-db';
const mime = new MimeType(db as any, 0 as DuplicationProcessWay);

export function lookupMime(path: string): string | undefined {
    const type = mime.lookup(path);
    return Array.isArray(type) ? type[0] : type;
}
