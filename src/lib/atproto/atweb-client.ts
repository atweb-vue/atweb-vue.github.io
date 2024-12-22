import { CredentialManager } from '@atcute/client';
import { KittyAgent } from './kitty-agent';
import { parseAtUri } from '../utils';
import type { At } from '@atcute/client/lexicons';
import { parse as parseMime } from 'file-type-mime';
import { getPds as getPdsFromDid } from './did-document';
import { toString as ui8ToString, fromString as ui8FromString } from 'uint8arrays';
import type { SignedInUser } from './signed-in-user';

class AtwebClient {
    didCache = new Map<string, { did: At.DID; pds: string }>();

    private readonly agent: KittyAgent;

    constructor(signedInUser: SignedInUser) {

    }

    async getDidAndPds(handleOrDid: string): Promise<{ did: At.DID; pds: string }> {
        if (this.didCache.has(handleOrDid)) {
            return this.didCache.get(handleOrDid)!;
        }

        const did = await this.agent.resolveHandle(handleOrDid);
        const pds = await getPdsFromDid(did);
        if (!pds) throw new Error(`No PDS for ${handleOrDid} (${did})!`);

        didCache.set(handleOrDid, { did, pds });

        return { did, pds };
    }

    private formatGetBlobUrl(pds: string, did: At.DID, cid: string) {
        return `${pds}/xrpc/com.atproto.sync.getBlob?did=${encodeURIComponent(did)}&cid=${encodeURIComponent(cid)}`;
    }

export async function getGetBlobUrl(
    uri?: string,
): Promise<string | 'RecordNotFound' | 'CollectionUnsupported' | 'ProtocolUnsupported'> {
    if (uri?.startsWith('atfile://')) {
        const [did, rkey] = uri.slice('atfile://'.length).trim().split('/');

        const { value: record } = await agent.tryGet({
            collection: 'blue.zio.atfile.upload',
            repo: did,
            rkey: rkey,
        });

        if (!record || !record.blob) {
            return 'RecordNotFound';
        }

        const { pds } = await getDidAndPds(did);
        return formatGetBlobUrl(pds, did as At.DID, record.blob.ref.$link);
    } else if (uri?.startsWith('blob://')) {
        const [did, cid] = uri.slice('blob://'.length).trim().split('/');

        const { pds } = await getDidAndPds(did);
        return formatGetBlobUrl(pds, did as At.DID, cid);
    } else if (uri?.startsWith('at://')) {
        const at = parseAtUri(uri as At.Uri);

        const { did, pds } = await getDidAndPds(at.host);
        let cid: string;

        if (at.collection === 'io.github.atweb.file') {
            const { value: record } = await agent.tryGet({
                collection: 'io.github.atweb.file',
                repo: did,
                rkey: at.rkey,
            });

            if (!record) {
                return 'RecordNotFound';
            }

            cid = record.body.ref.$link;
        } else if (at.collection === 'blue.zio.atfile.upload') {
            const { value: record } = await agent.tryGet({
                collection: 'blue.zio.atfile.upload',
                repo: did,
                rkey: at.rkey,
            });

            if (!record || !record.blob) {
                return 'RecordNotFound';
            }

            cid = record.blob.ref.$link;
        } else {
            return 'CollectionUnsupported';
        }

        return formatGetBlobUrl(pds, did as At.DID, cid);
    }

    return 'ProtocolUnsupported';
}

export function atUriDownload(
    src: string | undefined,
    setValue: (value?: string) => void,
    onBeforeUnmount?: (hook: () => void) => void,
    onerror?: (error: Event) => void,
) {
    function fail(error: string) {
        onerror?.(
            new ErrorEvent('error', {
                error: new Error(`could not load image ${src}: ${error}`),
            }),
        );
        console.error(`could not load image ${src}: ${error}`);
    }

    if (src?.startsWith('atfile://') || src?.startsWith('blob://') || src?.startsWith('at://')) {
        (async () => {
            const blobUrl = await getGetBlobUrl(src);
            if (
                blobUrl === 'RecordNotFound' ||
                blobUrl === 'CollectionUnsupported' ||
                blobUrl === 'ProtocolUnsupported'
            ) {
                fail(blobUrl);
            }
            setValue(blobUrl);
        })();
    } else {
        setValue(src);
    }
}

export async function uploadPage(
    repo: string,
    path: string,
    pageContents: string | Uint8Array,
    existingCid?: string,
    mimeType?: string,
): Promise<{ rkey: string; cid: At.CID; uri: At.Uri; }> {
    if (typeof pageContents === 'string') {
        pageContents = new TextEncoder().encode(pageContents);
        mimeType = 'text/mdx';
    }

    const blob = await agent.uploadBlob(new Blob([pageContents], { type: mimeType }));

    const rkey = filepathToRkey(path);

    const result = await agent.put({
        collection: 'io.github.atweb.file',
        repo,
        rkey,
        swapCommit: existingCid,
        record: {
            $type: 'io.github.atweb.file',
            body: blob,
            filePath: path,
            createdAt: new Date().toISOString(),
            modifiedAt: new Date().toISOString(),
        }
    });

    return { ...result, rkey };
}

export function filepathToRkey(filepath: string) {
    if (filepath === '') throw new Error('File path is empty!');

    filepath = filepath
        // regex excludes : and ~ because we use those as control characters
        .replace(/[^A-Za-z0-9._]/g, $$ => {
            if ($$ == '\\' || $$ == '/') {
                return ':';
            } else {
                return '~' + $$
                    .charCodeAt(0)
                    .toString(16)
                    .padStart(4, '0');
            }
        });

    filepath = filepath.toLowerCase();

    if (filepath.length > 512) throw new Error('File path too long!');

    return filepath;
}

export function rkeyToFilepath(rkey: string) {
    return rkey
        .replace(/:/g, '/')
        .replace(/~(\d{4})/g, $$ => {
            return String.fromCharCode(parseInt($$.slice(1), 16));
        })
}
