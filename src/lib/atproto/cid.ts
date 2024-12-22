// import { sha256 } from '@noble/hashes/sha256';
import { parse as parseCid, create as createCid, format as formatCid } from '@atcute/cid';
import type { At } from '@atcute/client/lexicons';

export async function isCidMatching(data: ArrayBufferLike, blob: At.Blob) {
    const cid = parseCid(blob.ref.$link);
    const digest = cid.digest.digest;

    const actualDigest = new Uint8Array(await crypto.subtle.digest('sha-256', data));

    return isEqualBytes(digest, actualDigest);
}

// https://stackoverflow.com/a/77736145
export function isEqualBytes(bytes1: Uint8Array, bytes2: Uint8Array): boolean {
    if (typeof indexedDB !== 'undefined' && indexedDB.cmp) {
        return indexedDB.cmp(bytes1, bytes2) === 0;
    }

    if (bytes1.length !== bytes2.length) {
        return false;
    }

    for (let i = 0; i < bytes1.length; i++) {
        if (bytes1[i] !== bytes2[i]) {
            return false;
        }
    }

    return true;
}
