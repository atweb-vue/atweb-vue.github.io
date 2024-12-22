import { getDidDocument, getPdsEndpoint } from './handles/did-document';
import type { At } from "@atcute/client/lexicons";
import { resolveHandleAnonymously } from "./handles/resolve";
import type { DidDocument } from '@atcute/client/utils/did';

const didPdsCache = new Map<string, { did: At.DID; pds: string, didDocument: DidDocument }>();

export async function getDidAndPds(handleOrDid: string): Promise<{ did: At.DID; pds: string, didDocument: DidDocument }> {
    if (didPdsCache.has(handleOrDid)) {
        return didPdsCache.get(handleOrDid)!;
    }

    const did = await resolveHandleAnonymously(handleOrDid);
    const didDocument = await getDidDocument(did);
    const pds = getPdsEndpoint(didDocument);
    if (!pds) throw new Error(`No PDS for ${handleOrDid} (${did})!`);

    didPdsCache.set(handleOrDid, { did, pds, didDocument });

    return { did, pds, didDocument };
}
