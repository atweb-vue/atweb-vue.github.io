import { KittyAgent } from './kitty-agent';
import { parseAtUri } from '../utils';
import type { At, IoGithubAtwebFile, IoGithubAtwebRing } from '@atcute/client/lexicons';
import { parse as parseMime } from 'file-type-mime';
import { toString as ui8ToString, fromString as ui8FromString } from 'uint8arrays';
import { user, type Account, type User } from './signed-in-user';
import { getDidAndPds } from './pds-helpers';
import { AtUri } from '@atproto/syntax';
import { filepathToRkey } from './rkey';
import { lookupMime } from '../mime';
import { now as tidNow } from '@atcute/tid';

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

    async createRing(
        name: string,
        creatorMainPage: string,
    ): Promise<{ cid: At.CID; uri: AtUri; }> {
        const tid = tidNow();

        const membership = await this.agent.create({
            collection: 'io.github.atweb.ringMembership',
            repo: this.user.did,
            rkey: tid,
            record: {
                $type: 'io.github.atweb.ringMembership',
                ring: AtUri.make(this.user.did, 'io.github.atweb.ring', tid).toString(),
                mainPage: AtUri.make(this.user.did, 'io.github.atweb.page', filepathToRkey(creatorMainPage)).toString(),
                createdAt: new Date().toISOString(),
            }
        });

        const result = await this.agent.create({
            collection: 'io.github.atweb.ring',
            repo: this.user.did,
            rkey: tid,
            record: {
                $type: 'io.github.atweb.ring',
                name: name,
                members: [{
                    membership: membership.uri,
                }],
                createdAt: new Date().toISOString(),
            }
        });

        return { ...result, uri: new AtUri(result.uri) };
    }

    async updateRingMembers(
        rkey: string,
        memberships: (string | AtUri | { membership: AtUri; })[],
        swapRecord?: string,
    ) {
        const { value } = await this.agent.get({
            collection: 'io.github.atweb.ring',
            repo: this.user.did,
            rkey,
            cid: swapRecord,
        });

        await this.agent.put({
            collection: 'io.github.atweb.ring',
            repo: this.user.did,
            rkey,
            record: {
                ...value,
                members: memberships.map(e => ({
                    membership: typeof e !== 'string' && 'membership' in e
                        ? e.membership.toString()
                        : e.toString()
                }))
            },
            swapRecord
        });
    }

    async deleteRing(
        rkey: string,
        swapRecord?: string,
    ) {
        await this.agent.delete({
            collection: 'io.github.atweb.ring',
            repo: this.user.did,
            rkey,
            swapRecord,
        });
    }

    async acceptInvite(inviterDid: string, rkey: string, mainPage: string) {
        await this.agent.put({
            collection: 'io.github.atweb.ringMembership',
            repo: this.user.did,
            rkey,
            record: {
                $type: 'io.github.atweb.ringMembership',
                createdAt: new Date().toISOString(),
                ring: AtUri.make(inviterDid, 'io.github.atweb.ring', rkey).toString(),
                mainPage: AtUri.make(this.user.did, 'io.github.atweb.page', filepathToRkey(mainPage)).toString(),
            }
        });
    }

    async setMainPage(rkey: string, mainPage: string) {
        const { value, cid } = await this.agent.get({
            collection: 'io.github.atweb.ringMembership',
            repo: this.user.did,
            rkey,
        });

        await this.agent.put({
            collection: 'io.github.atweb.ringMembership',
            repo: this.user.did,
            rkey,
            record: {
                $type: 'io.github.atweb.ringMembership',
                ring: value.ring,
                createdAt: value.createdAt,
                mainPage: AtUri.make(this.user.did, 'io.github.atweb.page', filepathToRkey(mainPage)).toString(),
            },
            swapRecord: cid,
        });
    }
}
