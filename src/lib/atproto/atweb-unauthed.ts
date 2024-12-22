import { CredentialManager, simpleFetchHandler } from "@atcute/client";
import { KittyAgent } from "./kitty-agent";
import type { At, IoGithubAtwebRing } from "@atcute/client/lexicons";
import { parseAtUri } from "../utils";
import { getDidAndPds } from "./pds-helpers";
import type { Awaitable } from "@vueuse/core";
import { AtUri } from "@atproto/syntax";
import { resolveHandleAnonymously } from "./handles/resolve";

const unauthedAgent = new KittyAgent({ handler: simpleFetchHandler({ service: 'https://bsky.social' }) });

export function formatGetBlobUrl(pds: string, did: At.DID, cid: string, useCdn = false): string {
    if (useCdn) {
        return `//wsrv.nl/?url=${encodeURIComponent(formatGetBlobUrl(pds, did, cid, false))}`;
        // return `https://cdn.bsky.app/img/feed_thumbnail/plain/${did}/${cid}@webp`;
    }

    return `${pds}/xrpc/com.atproto.sync.getBlob?did=${encodeURIComponent(did)}&cid=${encodeURIComponent(cid)}`;
}

export class GetGetBlobError extends Error {}

// mapping of AtUri -> blob CID
const blobCidCache = new Map<string, string>();
async function getCachedBlob(
    {
        repo,
        collection,
        rkey,
    }: { repo: string; collection: string; rkey: string },
    ifNotExist: () => Awaitable<At.CID>,
): Promise<At.CID> {
    const key = AtUri.make(repo, collection, rkey).toString();
    if (blobCidCache.has(key)) {
        return blobCidCache.get(key)!;
    }

    const result = await ifNotExist();
    blobCidCache.set(key, result);
    return result;
}

export async function getGetBlobUrl(
    locator: { handleOrDid: string, cid: At.CID }, useCdn?: boolean
): Promise<string>;
export async function getGetBlobUrl(
    uri?: string, useCdn?: boolean
): Promise<string>;
export async function getGetBlobUrl(
    uri?: string | { handleOrDid: string, cid: At.CID }, useCdn = false
): Promise<string> {
    if (typeof uri !== 'string' && typeof uri !== 'undefined') {
        const { handleOrDid, cid } = uri;
        const { did, pds } = await getDidAndPds(handleOrDid);
        return formatGetBlobUrl(pds, did, cid);
    } else if (uri?.startsWith('atfile://')) {
        const [did, rkey] = uri.slice('atfile://'.length).trim().split('/');

        const cid = await getCachedBlob(
            {
                collection: 'blue.zio.atfile.upload',
                repo: did,
                rkey: rkey,
            },
            async () => {
                const { value: record } = await unauthedAgent.tryGet({
                    collection: 'blue.zio.atfile.upload',
                    repo: did,
                    rkey: rkey,
                });

                if (!record || !record.blob) {
                    throw new GetGetBlobError('RecordNotFound');
                }

                return record.blob.ref.$link;
            },
        );

        const { pds } = await getDidAndPds(did);
        return formatGetBlobUrl(pds, did as At.DID, cid, useCdn);
    } else if (uri?.startsWith('blob://')) {
        const [did, cid] = uri.slice('blob://'.length).trim().split('/');

        const { pds } = await getDidAndPds(did);
        return formatGetBlobUrl(pds, did as At.DID, cid, useCdn);
    } else if (uri?.startsWith('at://')) {
        const at = parseAtUri(uri as At.Uri);

        const { did, pds } = await getDidAndPds(at.host);

        const cid = await getCachedBlob(
            {
                collection: at.collection,
                repo: did,
                rkey: at.rkey,
            },
            async () => {
                if (at.collection === 'io.github.atweb.file') {
                    const { value: record } = await unauthedAgent.tryGet({
                        collection: 'io.github.atweb.file',
                        repo: did,
                        rkey: at.rkey,
                    });

                    if (!record) {
                        throw new GetGetBlobError('RecordNotFound');
                    }

                    return record.body.ref.$link;
                } else if (at.collection === 'blue.zio.atfile.upload') {
                    const { value: record } = await unauthedAgent.tryGet({
                        collection: 'blue.zio.atfile.upload',
                        repo: did,
                        rkey: at.rkey,
                    });

                    if (!record || !record.blob) {
                        throw new GetGetBlobError('RecordNotFound');
                    }

                    return record.blob.ref.$link;
                } else {
                    throw new GetGetBlobError('CollectionUnsupported');
                }
            }
        );

        return formatGetBlobUrl(pds, did as At.DID, cid, useCdn);
    }

    throw new GetGetBlobError('ProtocolUnsupported');
}

export interface PageMeta {
    filePath: string;
    did: At.DID;
}

export interface Page extends PageMeta {
    $type: 'io.github.atweb.file';

    blob: Uint8Array | string;
    blobBuffer: Uint8Array;
    blobString: string;
    bodyOriginal: At.Blob<string>;

    uri: At.Uri;

    createdAt: string;
    modifiedAt: string;

    aliases?: string[];
    description?: string;
    icon?: string;
    tags?: string[];
    title?: string;
}

export async function downloadFile(did: At.DID, rkey: string): Promise<Page> {
    const { value: record, uri } = await unauthedAgent.get({
        collection: 'io.github.atweb.file',
        repo: did,
        rkey
    });

    console.log(rkey);

    const blob = await unauthedAgent.getBlob({
        did,
        cid: record.body.ref.$link,
    });

    console.log(blob);

    return {
        ...record,
        blob: blob,
        bodyOriginal: record.body,
        uri,
        did,

        get blobBuffer() {
            return typeof blob === 'string' ? new TextEncoder().encode(blob) : blob;
        },

        get blobString() {
            return typeof blob === 'string' ? blob : new TextDecoder().decode(blob);
        }
    };
}

export async function getRingsUserIsAMemberOf(didOrHandle: string) {
    const { records } = await unauthedAgent.list({
        collection: 'io.github.atweb.ringMembership',
        repo: didOrHandle,
    });

    const rings: Array<Awaited<ReturnType<typeof getRing>> & { mainPage: AtUri }> = [];
    for (const record of records) {
        const uri = new AtUri(record.value.ring);

        const entry = await tryGetRing(uri.host, uri.rkey);

        if (entry) {
            rings.push({...entry, mainPage: new AtUri(record.value.mainPage)});
        }
    }

    return rings;
}

async function arrayFromAsync<T>(generator: AsyncIterable<T>): Promise<T[]> {
    const arr: T[] = [];
    for await (const e of generator) {
        arr.push(e);
    }
    return arr;
}

export async function tryGetRing(repo: string, rkey: string) {
    const result = await unauthedAgent.tryGet({
        collection: 'io.github.atweb.ring',
        repo,
        rkey,
    });

    if (!result.value) return undefined;

    return {
        name: result.value.name,
        createdAt: result.value.createdAt,
        members: await arrayFromAsync(getMembershipStatuses(repo, result.value.members ?? [])),
        cid: result.cid,
        uri: new AtUri(result.uri),
    };
}

export async function getRing(repo: string, rkey: string) {
    const result = await unauthedAgent.get({
        collection: 'io.github.atweb.ring',
        repo,
        rkey,
    });

    return {
        name: result.value.name,
        createdAt: result.value.createdAt,
        members: await arrayFromAsync(getMembershipStatuses(repo, result.value.members ?? [])),
        cid: result.cid,
        uri: new AtUri(result.uri),
    };
}

async function *getMembershipStatuses(owner: string, members: IoGithubAtwebRing.Member[]) {
    owner = await resolveHandleAnonymously(owner);

    for (const member of members) {
        const uri = new AtUri(member.membership);
        const result = await unauthedAgent.tryGet({
            collection: 'io.github.atweb.ringMembership',
            repo: uri.host,
            rkey: uri.rkey,
        });
        const isMember = !!result.value;
        const isOwner = isMember && uri.host === owner;

        yield {
            membership: uri,
            mainPage: result.value?.mainPage ? new AtUri(result.value.mainPage) : undefined,
            isMember,
            isOwner,
        };
    }
}

