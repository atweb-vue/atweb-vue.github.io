import { ref, shallowRef } from "vue";
import type { Page, PageMeta } from "./atproto/atweb-unauthed";

export const pageMeta = shallowRef<PageMeta>();
export const page = shallowRef<Page>();
export const useVanillaCss = ref(true);
