import { ref, shallowRef } from "vue";
import type { Page } from "./atproto/atweb-unauthed";

export const page = shallowRef<Page>();
export const useVanillaCss = ref(true);
