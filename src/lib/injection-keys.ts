import type { InjectionKey, ShallowRef } from "vue";
import type { Page, PageMeta } from "./atproto/atweb-unauthed";

export const pageKey = Symbol('page') as InjectionKey<ShallowRef<Page | undefined>>;
export const pageMetaKey = Symbol('pageMeta') as InjectionKey<ShallowRef<PageMeta | undefined>>;
