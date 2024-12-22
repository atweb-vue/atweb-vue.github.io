import type { At } from "@atcute/client/lexicons";

export const isDid = (did: string): did is At.DID => {
	return /^did:([a-z]+):([a-zA-Z0-9._:%-]*[a-zA-Z0-9._-])$/.test(did);
};
