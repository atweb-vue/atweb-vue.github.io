import { KittyAgent } from './kitty-agent';
import { parseAtUri } from '../utils';
import type { At, IoGithubAtwebFile } from '@atcute/client/lexicons';
import { parse as parseMime } from 'file-type-mime';
import { toString as ui8ToString, fromString as ui8FromString } from 'uint8arrays';
import { user, type Account, type User } from './signed-in-user';
import { getDidAndPds } from './pds-helpers';
import { AtUri } from '@atproto/syntax';
import { filepathToRkey } from './rkey';
import { lookupMime } from '../mime';

export class AtwebClient {
    get agent(): KittyAgent {
        return this.user.agent;
    }

    get user() {
        if (!user.value) throw new Error('Not signed in');
        return user.value;
    }

    async listFiles(): Promise<(IoGithubAtwebFile.Record & { uri: AtUri })[]> {
        const files = await this.agent.list({
            collection: 'io.github.atweb.file',
            repo: this.user.did,
        });

        return files.records.map(e => ({
            ...e.value,
            uri: new AtUri(e.uri),
        }));
    }

    async uploadPage(
        path: string,
        pageContents: string | Uint8Array,
        existingCid?: string,
        mimeType?: string,
    ): Promise<{ rkey: string; cid: At.CID; uri: At.Uri; }> {
        if (typeof pageContents === 'string') {
            pageContents = new TextEncoder().encode(pageContents);
            mimeType = 'text/mdx';
        }

        mimeType ??= lookupMime(path) ?? undefined;

        const blob = await this.agent.uploadBlob(new Blob([pageContents], { type: mimeType }));

        const rkey = filepathToRkey(path);

        const result = await this.agent.put({
            collection: 'io.github.atweb.file',
            repo: this.user.did,
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
}
