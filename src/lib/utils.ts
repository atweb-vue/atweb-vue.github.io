import type { At } from "@atcute/client/lexicons";
import { AtUri } from "@atproto/syntax";

export function parseAtUri(uri: At.Uri) {
    if (!uri.startsWith('at://'))
        throw new Error('Not an AT URI');

    return new AtUri(uri);
}
