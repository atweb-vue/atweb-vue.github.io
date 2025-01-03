import { computedAsync, watchOnce, type MapOldSources } from '@vueuse/core';
import {
    type Slot,
    type VNode,
    type VNodeArrayChildren,
    type Slots,
    type WatchSource,
    type WatchCallback,
    type WatchOptions,
    type WatchStopHandle,
    watch,
    type MultiWatchSources,
    type WatchHandle,
    type Reactive,
    inject,
} from 'vue';
import type { ReactiveMarker } from '@vue/reactivity/dist/reactivity.d.ts';
import { useRouter, type RouteLocationAsPath, type RouteLocationAsRelative, type RouteLocationAsString } from 'vue-router';
import { getRelativeOrAbsoluteBlobUrl } from './component-helpers';
import { pageMetaKey } from './injection-keys';

export function getSlotChildrenText(
    children: Slot | VNode[] | VNodeArrayChildren | undefined,
): string {
    if (!children) return '';
    if (!Array.isArray(children)) children = children();

    return children
        .map(node => {
            if (!node) return '';
            if (typeof node !== 'object') return '' + node;
            if (Array.isArray(node)) return getSlotChildrenText(node);
            if (!node.children || typeof node.children === 'string')
                return node.children || '';
            if (Array.isArray(node.children))
                return getSlotChildrenText(node.children);
            if (node.children.default)
                return getSlotChildrenText(
                    (node.children as any as Slots).default?.(),
                );
        })
        .join('');
}

type MaybeUndefined<T, I> = I extends true ? T | undefined : T;
type MapSources<T, Immediate> = {
    [K in keyof T]: T[K] extends WatchSource<infer V> ? MaybeUndefined<V, Immediate> : T[K] extends object ? MaybeUndefined<T[K], Immediate> : never;
};

export function watchImmediateAsync<
    T
>(
    source: WatchSource<T>,
    cb: WatchCallback<T, T | undefined>,
    options?: Omit<WatchOptions, 'immediate'>,
): Promise<WatchHandle>;
export function watchImmediateAsync<
    T extends Readonly<MultiWatchSources>,
>(
    sources: readonly [...T] | T,
    cb: [T] extends [ReactiveMarker]
        ? WatchCallback<T, T | undefined>
        : WatchCallback<MapSources<T, false>, MapSources<T, true>>,
    options?: Omit<WatchOptions, 'immediate'>,
): Promise<WatchHandle>;
export function watchImmediateAsync<
    T extends MultiWatchSources
>(
    sources: [...T],
    cb: WatchCallback<MapSources<T, false>, MapSources<T, true>>,
    options?: Omit<WatchOptions, 'immediate'>,
): Promise<WatchHandle>;
export function watchImmediateAsync<
    T extends object
>(
    source: T,
    cb: WatchCallback<T, T | undefined>,
    options?: Omit<WatchOptions, 'immediate'>,
): Promise<WatchHandle>;

/**
 * Shorthand for watching value with {immediate: true} that returns a
 * Promise with the awaitable result of the first call
 *
 * @see https://vueuse.org/watchImmediate
 */
export async function watchImmediateAsync(
    source: any,
    cb: any,
    options?: Omit<WatchOptions, 'immediate'>,
) {
    let firstRun = true;
    let awaitable: any = null;
    const watcher = watch(
        source as any,
        (...args) => {
            if (firstRun) {
                firstRun = false;
                awaitable = cb(...args);
                return;
            }

            cb(...args);
        },
        {
            ...options,
            immediate: true,
        },
    );

    if (firstRun) {
        throw new Error('Callback was not immediately called');
    }
    await awaitable;
    awaitable = null;

    return watcher;
}

export function resolveRoute(route: RouteLocationAsString | RouteLocationAsRelative | RouteLocationAsPath) {
    const router = useRouter();
    // https://stackoverflow.com/a/70989279
    const resolved = router.resolve(route);
    const absoluteURL = new URL(resolved.href, window.location.origin).href;
    return absoluteURL;
}

export function computedAtUrlProperty(src: string | undefined, elementName: string, useCdn = false) {
    const pageMeta = inject(pageMetaKey);

    return computedAsync(async () => {
        if (!pageMeta?.value) {
            console.warn(`no pageMeta for ${elementName} ${src}`);
            return;
        }

        try {
            return await getRelativeOrAbsoluteBlobUrl(
                src,
                { path: pageMeta.value.filePath, repo: pageMeta.value.did },
                useCdn
            );
        } catch (err) {
            console.warn(err);
            return;
        }
    });
}
