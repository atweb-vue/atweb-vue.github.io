import { getPdsFromDid } from './handles/did-document';
import type { At } from "@atcute/client/lexicons";
import { resolveHandleAnonymously } from "./handles/resolve";

const didPdsCache = new Map<string, { did: At.DID; pds: string }>();

export async function getDidAndPds(handleOrDid: string): Promise<{ did: At.DID; pds: string }> {
    if (didPdsCache.has(handleOrDid)) {
        return didPdsCache.get(handleOrDid)!;
    }

    const did = await resolveHandleAnonymously(handleOrDid);
    const pds = await getPdsFromDid(did);
    if (!pds) throw new Error(`No PDS for ${handleOrDid} (${did})!`);

    didPdsCache.set(handleOrDid, { did, pds });

    return { did, pds };
}
