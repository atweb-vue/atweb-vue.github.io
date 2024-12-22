import 'dotenv/config';
import { CredentialManager } from '@atcute/client';
import { isCidMatching } from '@parent/lib/atproto/cid.js';
import { KittyAgent } from '@parent/lib/atproto/kitty-agent.js';
import { filepathToRkey } from '@parent/lib/atproto/rkey.js';
import { readdir, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import Readline from 'node:readline/promises';
import { parseArgs } from "node:util";
import nodePath from 'path-browserify';
import { parse as parseMime } from 'file-type-mime';
import mime from 'mime';
import { create as createCid, format as formatCid } from '@atcute/cid';

let {
  // eslint-disable-next-line prefer-const
  values: { username, password, dryRun }, positionals: pos
} = parseArgs({
  options: {
    username: {
      type: "string",
      short: "u",
    },
    password: {
      type: "string",
      short: "p",
    },
    dryRun: {
        type: 'boolean',
    }
  },
  allowPositionals: true,
});

const rl = Readline.createInterface({ input: process.stdin, output: process.stdout });

username ??= process.env.BSKY_USERNAME ?? await rl.question('Bluesky Username > ');
password ??= process.env.BSKY_PASSWORD ?? await rl.question('Bluesky Password (or App Password) > ');

const session = new CredentialManager({ service: 'https://bsky.social' });
const agent = new KittyAgent({ handler: session });

await session.login({
    identifier: username,
    password
});

const command = pos[0];
if (command === 'upload') {
    const basePath = pos[1];
    if (!basePath) {
        throw new Error('Did not provide folder to upload!');
    }

    console.log(`Uploading ${basePath} to ${username}...`);

    const dir = await readdir(basePath, { recursive: true, withFileTypes: true });

    let answer = '';
    do {
        answer = (await rl.question(`Really upload ${dir.length} files? (Y/n) > `))
            .trim().toLowerCase();
    } while (answer !== 'y' && answer !== 'n');

    if (answer === 'y') {
        const { cids: blobs } = await agent.paginatedListBlobs({
            did: await agent.resolveHandle(username)
        });
        const allBlobs = new Set(blobs);

        for (const entry of dir) {
            if (entry.isDirectory()) continue;

            const realPath = join(entry.parentPath, entry.name);
            let path = realPath.replace(/\\/g, '/');
            path = nodePath.relative(basePath, path);

            const rkey = filepathToRkey(path);
            console.log(realPath, rkey, path);

            const file = await readFile(realPath);

            const cidCompare = formatCid(await createCid(0x55, file));
            if (allBlobs.has(cidCompare)) {
                console.log('already uploaded!');
                continue;
            }

            if (!dryRun) {
                // TODO find existing CID and don't upload if unchanged
                const blob = await agent.uploadBlob(
                    new Blob([file], {
                        type: mime.getType(realPath) ?? parseMime(file.buffer as ArrayBuffer)?.mime
                    })
                );

                await agent.put({
                    collection: 'io.github.atweb.file',
                    repo: username,
                    rkey,
                    record: {
                        $type: 'io.github.atweb.file',
                        body: blob,
                        createdAt: new Date().toISOString(),
                        modifiedAt: (await stat(realPath)).mtime.toISOString(),
                        filePath: path,
                    },
                    // swapRecord: cid
                });
            }
        }
    }
}

process.exit(1);
