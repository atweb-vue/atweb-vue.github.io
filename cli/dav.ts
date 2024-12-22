import type { KittyAgent } from '@parent/lib/atproto/kitty-agent.js';
import type { Readable, Writable } from 'stream';
import { v2 as webdav } from 'webdav-server';
import { FileSystem, VirtualFileSystem, VirtualSerializer, type FileSystemSerializer, type ISerializableFileSystem } from 'webdav-server/lib/index.v2.js';

class AtFileSystem extends VirtualFileSystem {
    constructor(
        agent: KittyAgent
    ) {
        super(new VirtualSerializer());
    }

    protected _openWriteStream(path: webdav.Path, ctx: webdav.OpenWriteStreamInfo, callback: webdav.ReturnCallback<Writable>): void {

    }

    protected _openReadStream(path: webdav.Path, ctx: webdav.OpenReadStreamInfo, callback: webdav.ReturnCallback<Readable>): void {

    }

    protected _delete(path: webdav.Path, ctx: webdav.DeleteInfo, callback: webdav.SimpleCallback): void {

    }

    protected _size(path: webdav.Path, ctx: webdav.SizeInfo, callback: webdav.ReturnCallback<number>): void {

    }

    protected _readDir(path: webdav.Path, ctx: webdav.ReadDirInfo, callback: webdav.ReturnCallback<string[] | webdav.Path[]>): void {

    }
}

const server = new webdav.WebDAVServer({
    port: 1900,
    rootFileSystem: new AtFileSystem()
});
