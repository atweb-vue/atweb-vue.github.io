import {
    FtpSrv,
    GeneralError,
    FileSystem,
    type FtpConnection,
    FileSystemError,
} from 'ftp-srv';
import type { KittyAgent } from '@parent/lib/atproto/kitty-agent.js';
import {
    constants,
    createReadStream,
    createWriteStream,
    type Stats,
} from 'node:fs';
import fs from 'node:fs/promises';
import nodePath from 'node:path';
import type { Awaitable } from '@vueuse/core';
import { v4 as uuidv4 } from 'uuid';
import type { At, IoGithubAtwebFile, Records } from '@atcute/client/lexicons';
import posixPath from 'node:path/posix';
import { filepathToRkey } from '@parent/lib/atproto/rkey.js';

const UNIX_SEP_REGEX = /\//g;
const WIN_SEP_REGEX = /\\/g;

async function promiseMap<T, R>(
    arr: Iterable<T>,
    mapper: (e: T) => Awaitable<R>,
) {
    const outArr = [];
    for (const entry of arr) {
        outArr.push(await mapper(entry));
    }
    return outArr;
}

function set<O, K extends string | number | symbol, V>(
    object: O,
    key: K,
    value: V,
): O & { [k in K]: V } {
    (object as any)[key] = value;
    return object as any;
}

class FSFileSystem extends FileSystem {
    cwd: string;
    private _root: string;

    constructor(
        connection: FtpConnection,
        { root, cwd }: { root?: string; cwd?: string } = {},
    ) {
        super(connection, { root, cwd });
        this.cwd = nodePath.normalize((cwd || '/')).replace(WIN_SEP_REGEX, '/');
        this._root = nodePath.resolve(root || process.cwd());
    }

    _resolvePath(path = '.') {
        // Unix separators normalize nicer on both unix and win platforms
        const resolvedPath = path.replace(WIN_SEP_REGEX, '/');

        // Join cwd with new path
        const joinedPath = nodePath.isAbsolute(resolvedPath)
            ? nodePath.normalize(resolvedPath)
            : nodePath.join('/', this.cwd, resolvedPath);

        // Create local filesystem path using the platform separator
        const fsPath = nodePath.resolve(
            nodePath
                .join(this.root, joinedPath)
                .replace(UNIX_SEP_REGEX, nodePath.sep)
                .replace(WIN_SEP_REGEX, nodePath.sep),
        );

        // Create FTP client path using unix separator
        const clientPath = joinedPath.replace(WIN_SEP_REGEX, '/');

        return {
            clientPath,
            fsPath,
        };
    }

    currentDirectory(): string {
        return this.cwd;
    }

    get(fileName: string): Promise<Stats & { name: string }> {
        const { fsPath } = this._resolvePath(fileName);
        return fs.stat(fsPath)
            .then(stat => set(stat, 'name', fileName));
    }

    async list(path = '.') {
        const { fsPath } = this._resolvePath(path);
        const fileNames = await fs.readdir(fsPath);
        return promiseMap(fileNames, async fileName => {
            const filePath = nodePath.join(fsPath, fileName);
            try {
                await fs.access(filePath, constants.F_OK);
                const stat = await fs.stat(filePath);
                return set(stat, 'name', fileName);
            } catch {
                return null;
            }
        }).then(e => e.filter(e => e !== null));
    }

    async chdir(path = '.') {
        const { fsPath, clientPath } = this._resolvePath(path);
        const stat = await fs.stat(fsPath);
        if (!stat.isDirectory())
            throw new FileSystemError('Not a valid directory');
        this.cwd = clientPath;
        return this.currentDirectory();
    }

    async write(fileName: string, { append = false, start = undefined } = {}) {
        const { fsPath, clientPath } = this._resolvePath(fileName);
        const stream = createWriteStream(fsPath, {
            flags: !append ? 'w+' : 'a+',
            start,
        });
        stream.once('error', () => fs.unlink(fsPath));
        stream.once('close', () => stream.end());
        return {
            stream,
            clientPath,
        };
    }

    async read(fileName: string, { start = undefined } = {}) {
        const { fsPath, clientPath } = this._resolvePath(fileName);
        const stat = await fs.stat(fsPath);
        if (stat.isDirectory())
            throw new FileSystemError('Cannot read a directory');
        const stream = createReadStream(fsPath, { flags: 'r', start });
        return {
            stream,
            clientPath,
        };
    }

    async delete(path: string) {
        const { fsPath } = this._resolvePath(path);
        const stat = await fs.stat(fsPath);
        if (stat.isDirectory()) return fs.rmdir(fsPath);
        else return fs.unlink(fsPath);
    }

    async mkdir(path: string) {
        const { fsPath } = this._resolvePath(path);
        await fs.mkdir(fsPath, { recursive: true });
        return fsPath;
    }

    rename(from: string, to: string) {
        const { fsPath: fromPath } = this._resolvePath(from);
        const { fsPath: toPath } = this._resolvePath(to);
        return fs.rename(fromPath, toPath);
    }

    chmod(path: string, mode: string) {
        const { fsPath } = this._resolvePath(path);
        return fs.chmod(fsPath, mode);
    }

    getUniqueName() {
        return uuidv4().replace(/\W/g, '');
    }
}

class AtpFs {
    constructor(
        private readonly user: At.DID,
        private readonly agent: KittyAgent,
    ) {}

    private async get(rkey: string) {
        const result = await this.agent.tryGet({
            collection: 'io.github.atweb.file',
            repo: this.user,
            rkey,
        });
        if (result.value === undefined) return undefined;
        return {
            ...result.value,
            cid: result.cid,
            uri: result.uri,
        }
    }

    private async getAll() {
        const files = await this.agent.paginatedList({
            collection: 'io.github.atweb.file',
            repo: this.user,
        });
        return new Map<string, IoGithubAtwebFile.Record>(
            files.records.map(record => [
                // rkey
                record.uri.slice(record.uri.lastIndexOf('/') + 1),
                // record
                record.value
            ])
        );
    }

    async stat(rkey: string): Promise<Stats> {
        const record = await this.get(rkey);
        if (!record) {
            return {
                isFile: () => false,
                isDirectory: () => true,
                isBlockDevice: () => false,
                isCharacterDevice: () => false,
                isSymbolicLink: () => false,
                isFIFO: () => false,
                isSocket: () => false,
                dev: 0,
                ino: 0,
                mode: 0,
                nlink: 0,
                uid: 0,
                gid: 0,
                rdev: 0,
                size: 0,
                blksize: 0,
                blocks: 0,
                atimeMs: 0,
                mtimeMs: 0,
                ctimeMs: 0,
                birthtimeMs: 0,
                atime: new Date(),
                mtime: new Date(),
                ctime: new Date(),
                birthtime: new Date(),
            } satisfies Stats;
        }
        return {
            isFile: () => true,
            isDirectory: () => false,
            isBlockDevice: () => false,
            isCharacterDevice: () => false,
            isSymbolicLink: () => false,
            isFIFO: () => false,
            isSocket: () => false,
            dev: 0,
            ino: 0,
            mode: 0,
            nlink: 0,
            uid: 0,
            gid: 0,
            rdev: 0,
            size: record.body.size,
            blksize: 0,
            blocks: 0,
            atimeMs: 0,
            mtimeMs: 0,
            ctimeMs: 0,
            birthtimeMs: 0,
            atime: new Date(record.modifiedAt),
            mtime: new Date(record.modifiedAt),
            ctime: new Date(record.createdAt),
            birthtime: new Date(record.createdAt),
        } satisfies Stats;
    }

    async readdirStat(rkey: string): Promise<(Stats & { name: string })[]> {
        const files = await this.getAll();
        const prefix = files.get(rkey)!.filePath;
    }
}

class MyFileSystem extends FileSystem {
    cwd: string;
    private _root: string;
    atpFs: AtpFs;

    constructor(
        private readonly user: At.DID,
        private readonly agent: KittyAgent,
        connection: FtpConnection,
        { root, cwd }: { root?: string; cwd?: string } = {},
    ) {
        super(connection, { root, cwd });
        this.cwd = nodePath.normalize((cwd || '/')).replace(WIN_SEP_REGEX, '/');
        this._root = nodePath.resolve(root || '/');
        this.atpFs = new AtpFs(user, agent);
    }

    private resolveFtpPath(path = '.') {
        // Unix separators normalize nicer on both unix and win platforms
        const resolvedPath = path.replace(WIN_SEP_REGEX, '/');

        // Join cwd with new path
        // Create FTP client path
        const clientPath = nodePath.isAbsolute(resolvedPath)
            ? posixPath.normalize(resolvedPath)
            : posixPath.join('/', this.cwd, resolvedPath);

        // Create ATProto rkey path
        const atpPath = filepathToRkey(clientPath);

        return {
            clientPath,
            atpPath,
        };
    }

    currentDirectory(): string {
        return this.cwd;
    }

    async get(fileName: string): Promise<Stats & { name: string }> {
        const { atpPath } = this.resolveFtpPath(fileName);
        const stat = await this.atpFs.stat(atpPath);
        return set(stat, 'name', fileName);
    }

    async list(path = '.') {
        const { atpPath } = this.resolveFtpPath(path);
        const fileNames = await this.atpFs.readdirStat(atpPath);
        return fileNames;
    }

    async chdir(path = '.') {
        const { fsPath, clientPath } = this.resolveFtpPath(path);
        const stat = await fs.stat(fsPath);
        if (!stat.isDirectory())
            throw new FileSystemError('Not a valid directory');
        this.cwd = clientPath;
        return this.currentDirectory();
    }

    async write(fileName: string, { append = false, start = undefined } = {}) {
        const { fsPath, clientPath } = this.resolveFtpPath(fileName);
        const stream = createWriteStream(fsPath, {
            flags: !append ? 'w+' : 'a+',
            start,
        });
        stream.once('error', () => fs.unlink(fsPath));
        stream.once('close', () => stream.end());
        return {
            stream,
            clientPath,
        };
    }

    async read(fileName: string, { start = undefined } = {}) {
        const { fsPath, clientPath } = this.resolveFtpPath(fileName);
        const stat = await fs.stat(fsPath);
        if (stat.isDirectory())
            throw new FileSystemError('Cannot read a directory');
        const stream = createReadStream(fsPath, { flags: 'r', start });
        return {
            stream,
            clientPath,
        };
    }

    async delete(path: string) {
        const { fsPath } = this.resolveFtpPath(path);
        const stat = await fs.stat(fsPath);
        if (stat.isDirectory()) return fs.rmdir(fsPath);
        else return fs.unlink(fsPath);
    }

    async mkdir(path: string) {
        const { fsPath } = this.resolveFtpPath(path);
        await fs.mkdir(fsPath, { recursive: true });
        return fsPath;
    }

    rename(from: string, to: string) {
        const { fsPath: fromPath } = this.resolveFtpPath(from);
        const { fsPath: toPath } = this.resolveFtpPath(to);
        return fs.rename(fromPath, toPath);
    }

    chmod(path: string, mode: string) {
        const { fsPath } = this.resolveFtpPath(path);
        return fs.chmod(fsPath, mode);
    }

    getUniqueName() {
        return uuidv4().replace(/\W/g, '');
    }
}

const port = 21;
const ftpServer = new FtpSrv({
    url: 'ftp://0.0.0.0:' + port,
    anonymous: false,
});

const sessions = new Map<string, KittyAgent>();

ftpServer.on('login', ({ connection, username, password }, resolve, reject) => {
    if (username === 'anonymous' && password === 'anonymous') {
        return resolve({
            root: '/',
            fs: new MyFileSystem(connection, { root: '/' })
        });
    }
    return reject(new GeneralError('Invalid username or password', 401));
});
