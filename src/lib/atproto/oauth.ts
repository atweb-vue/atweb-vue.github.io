import { configureOAuth, createAuthorizationUrl, finalizeAuthorization, getSession, OAuthUserAgent, resolveFromIdentity } from '@atcute/oauth-browser-client';
import type { FetchHandlerObject } from '@atcute/client';
import type { At } from '@atcute/client/lexicons';
import { useEventListener } from '@vueuse/core';

configureOAuth({
    metadata: {
        client_id: 'https://atweb-vue.github.io/oauth/client-metadata.json',
        redirect_uri: 'https://atweb-vue.github.io/oauth/redirect.html',
    },
});

export class AtpOauthClient {
    constructor() {}

    async authenticate(handle: string) {
        const { identity, metadata } = await resolveFromIdentity(handle);

        // passing `identity` is optional,
        // it allows for the login form to be autofilled with the user's handle or DID
        const authUrl = await createAuthorizationUrl({
            metadata: metadata,
            identity: identity,
            scope: 'atproto transition:generic',
        });

        console.log(authUrl);

        // recommended to wait for the browser to persist local storage before proceeding
        await new Promise(resolve => setTimeout(resolve, 200));

        const hashPromise = Promise.race([
            new Promise(resolve => useEventListener(window, 'message', event => {
                const hash = event.data as string;
                resolve(hash);
            })),
            new Promise(resolve => setTimeout(resolve, 180000)) // 3 minutes
        ]);

        // redirect the user to sign in and authorize the app
        window.open(authUrl, '_blank');

        // TODO setup a redirect instead
        const hash = (await hashPromise) as string | undefined;
        if (!hash) throw new Error('Authentication timed out');

        // `createAuthorizationUrl` asks for the server to redirect here with the
        // parameters assigned in the hash, not the search string.
        const params = new URLSearchParams(hash);

        // you'd be given a session object that you can then pass to OAuthUserAgent!
        const session = await finalizeAuthorization(params);

        return session;
    }
}
