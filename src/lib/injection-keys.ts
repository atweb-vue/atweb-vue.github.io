import type { InjectionKey, ShallowRef } from "vue";
import type { downloadFile, Page } from "./atproto/atweb-unauthed";

export const injectPage = Symbol() as InjectionKey<ShallowRef<Page | undefined>>;
