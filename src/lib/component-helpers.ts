import { GetGetBlobError, getGetBlobUrl } from "./atproto/atweb-unauthed";
import path from 'path-browserify';
import { filepathToRkey } from "./atproto/rkey";
import { AtUri } from "@atproto/syntax";

export async function getRelativeOrAbsoluteBlobUrl(
    src: string | undefined,
    currentPath: { path: string, repo: string },
    useCdn = false,
) {
    try {
        if (!src) {
            return '';
        }

        if (src.startsWith('://') ||
            src.startsWith('//') ||
            src.startsWith('http://') ||
            src.startsWith('https://')) {
            return src;
        }

        if (src.startsWith('atfile://') ||
            src.startsWith('blob://') ||
            src.startsWith('at://')) {
            return await getGetBlobUrl(src, useCdn);
        }

        if (src.includes('://')) {
            throw new Error('unknown protocol');
        }

        if (src.startsWith('/')) {
            return await getGetBlobUrl(
                `at://${currentPath.repo}/io.github.atweb.file/${filepathToRkey(src)}`,
                useCdn
            );
        } else {
            // relative path
            const relativePath = path.normalize(path.join(path.dirname(currentPath.path), src));

            return await getGetBlobUrl(
                `at://${currentPath.repo}/io.github.atweb.file/${filepathToRkey(relativePath)}`,
                useCdn
            );
        }
    } catch (err) {
        throw new Error(`While getting blob URL for ${src}`, { cause: err });
    }
}

export async function resolveHref(
    src: string | undefined,
    currentPath: { path: string, repo: string },
) {
    if (!src) {
        return '';
    }

    if (src.startsWith('://') ||
        src.startsWith('//') ||
        src.startsWith('http://') ||
        src.startsWith('https://')) {
        return src;
    }

    if (src.startsWith('atfile://') ||
        src.startsWith('blob://')) {
        return await getGetBlobUrl(src);
    }

    if (src.startsWith('at://')) {
        const atUri = new AtUri(src);
        const repo = atUri.host;
        const path = atUri.rkey;
        if (atUri.collection === 'io.github.atweb.file') {
            return `/page/${repo}/${path}`;
        } if (atUri.collection === 'blue.zio.atfile.upload') {
            return await getGetBlobUrl(src);
        }

        throw new Error(`Unsupported collection ${atUri.collection}`);
    }

    if (src.includes('://')) {
        throw new Error('unknown protocol');
    }

    if (src.startsWith('/')) {
        return `/page/${currentPath.repo}/${filepathToRkey(src)}`;
    } else {
        // relative path
        const relativePath = path.normalize(path.join(path.dirname(currentPath.path), src));

        return `/page/${currentPath.repo}/${filepathToRkey(relativePath)}`;
    }
}
