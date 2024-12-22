import type { At } from "@atcute/client/lexicons";
import { isDid } from ".";

export const resolveHandleViaHttp = async (handle: string): Promise<At.DID> => {
	const url = new URL('/.well-known/atproto-did', `https://${handle}`);

	const response = await fetch(url, { redirect: 'error' });
	if (!response.ok) {
		throw new Error(`domain is unreachable`);
	}

	const text = await response.text();

	const did = text.split('\n')[0]!.trim();
	if (isDid(did)) {
		return did;
	}

	throw new Error(`failed to resolve ${handle}`);
};
