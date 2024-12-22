/* eslint-disable */
// This file is automatically generated, do not edit!

import '@atcute/client/lexicons';

declare module '@atcute/client/lexicons' {
    namespace IoGithubAtwebFile {
        /** A file on atweb. */
        interface Record {
            $type: 'io.github.atweb.file';
            /** The contents of the file. */
            body: At.Blob;
            /** This record's creation date. */
            createdAt: string;
            /** The path to the file inside the vault. */
            filePath: string;
            /** The file's creation or modification date. */
            modifiedAt: string;
            /** Aliases for the file, if any. */
            aliases?: string[];
            /** File description, if any. */
            description?: string;
            /** Link to a remote icon image for the file, if any. */
            icon?: string;
            /** Tags for the file, if any. */
            tags?: string[];
            /** A descriptive title for the file, if any. */
            title?: string;
        }
    }

    namespace IoGithubAtwebRing {
        /** Represents a webring. */
        interface Record {
            $type: 'io.github.atweb.ring';
            /** This record's creation date. */
            createdAt: string;
            name: string;
            /** The invited members of this webring. */
            members?: IoGithubAtwebRing.Member[];
        }
        /** Represents a webring invitation. */
        interface Member {
            [Brand.Type]?: 'io.github.atweb.ring#member';
            /** Link to the membership record for this member. */
            membership?: At.Uri;
        }
    }

    namespace IoGithubAtwebRingMembership {
        /** Represents an account requesting to be part of a webring. */
        interface Record {
            $type: 'io.github.atweb.ringMembership';
            /** This record's creation date. */
            createdAt: string;
            /** The page that will be linked to when navigating to this user's site in the webring. */
            mainPage: At.Uri;
            /** Link to the webring record that this user belongs to. */
            ring: At.Uri;
        }
    }

    namespace IoGithubAtwebSite {
        /** An atweb website's metadata. */
        interface Record {
            $type: 'io.github.atweb.site';
            /** This record's creation date. */
            createdAt: string;
            /** Website description, if any. */
            description?: string;
            /** Link to a remote icon image for the website, if any. */
            icon?: string;
            /** Link to the entry point (index page) for this website. Defaults to index.mdx. */
            index?: At.Uri;
            /** A descriptive title for the website, if any. */
            title?: string;
        }
    }

    namespace BlueZioAtfileFinger {
        /** A fingerprint of a browser upload. */
        interface Browser {
            [Brand.Type]?: 'blue.zio.atfile.finger#browser';
            id?: string;
            userAgent?: string;
        }
        /** A fingerprint of a machine upload. */
        interface Machine {
            [Brand.Type]?: 'blue.zio.atfile.finger#machine';
            app?: string;
            host?: string;
            id?: string;
            os?: string;
        }
    }

    namespace BlueZioAtfileLock {
        /** A reference to a locked file. */
        interface Record {
            $type: 'blue.zio.atfile.lock';
            lock?: boolean;
        }
    }

    namespace BlueZioAtfileMeta {
        /** Unknown metadata for an uploaded file. */
        interface Unknown {
            [Brand.Type]?: 'blue.zio.atfile.meta#unknown';
            reason?: string;
        }
    }

    namespace BlueZioAtfileUpload {
        /** A reference to an uploaded blob. */
        interface Record {
            $type: 'blue.zio.atfile.upload';
            blob?: At.Blob;
            checksum?: BlueZioAtfileUpload.Checksum;
            createdAt?: string;
            file?: BlueZioAtfileUpload.File;
            finger?: Brand.Union<
                BlueZioAtfileFinger.Browser | BlueZioAtfileFinger.Machine
            >;
            meta?: Brand.Union<BlueZioAtfileMeta.Unknown>;
        }
        interface Checksum {
            [Brand.Type]?: 'blue.zio.atfile.upload#checksum';
            algo?: string;
            hash?: string;
        }
        interface File {
            [Brand.Type]?: 'blue.zio.atfile.upload#file';
            mimeType?: string;
            modifiedAt?: string;
            name?: string;
            size?: number;
        }
    }

    interface Records {
        'io.github.atweb.file': IoGithubAtwebFile.Record;
        'io.github.atweb.ring': IoGithubAtwebRing.Record;
        'io.github.atweb.ringMembership': IoGithubAtwebRingMembership.Record;
        'io.github.atweb.site': IoGithubAtwebSite.Record;
        'blue.zio.atfile.lock': BlueZioAtfileLock.Record;
        'blue.zio.atfile.upload': BlueZioAtfileUpload.Record;
    }

    interface Queries {}

    interface Procedures {}
}
