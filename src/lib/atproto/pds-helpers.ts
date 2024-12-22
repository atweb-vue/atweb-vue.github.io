import { getPdsFromDid } from './did-document';
import type { At } from "@atcute/client/lexicons";
import { resolveHandleAnonymously } from "./handles/resolve";

const didCache = new Map<string, { did: At.DID; pds: string }>();

export async function getDidAndPds(handleOrDid: string): Promise<{ did: At.DID; pds: string }> {
    if (didCache.has(handleOrDid)) {
        return didCache.get(handleOrDid)!;
    }

    const did = await resolveHandleAnonymously(handleOrDid);
    const pds = await getPdsFromDid(did);
    if (!pds) throw new Error(`No PDS for ${handleOrDid} (${did})!`);

    didCache.set(handleOrDid, { did, pds });

    return { did, pds };
}
