import {
    getSession,
    OAuthUserAgent,
    type Session,
} from '@atcute/oauth-browser-client';
import { reactive, ref, shallowRef, watch } from 'vue';
import { useLocalStorage, watchImmediate } from '@vueuse/core';
import type { At } from '@atcute/client/lexicons';

import { AtpOauthClient } from './oauth';
import { KittyAgent } from './kitty-agent';
import { AtwebClient } from './atweb-client';
import { getDidAndPds } from './pds-helpers';
import { resolveHandleAnonymously } from './handles/resolve';

export interface Account {
    handle: string;
    did: At.DID;
    pds: string;
}

export interface Agents {
    agent: KittyAgent;
    client: AtwebClient;
}

const account = useLocalStorage<Account | null>('user', null, {
    serializer: {
        read(raw) {
            return JSON.parse(raw);
        },
        write(value) {
            return JSON.stringify(value);
        },
    }
});
const agents = shallowRef<Agents>();

class LoginState {
    get handle(): string { return account.value!.handle; }
    get did(): At.DID { return account.value!.did; }
    get pds(): string { return account.value!.pds; }
    get agent(): KittyAgent { return agents.value!.agent; }
    get client(): AtwebClient { return agents.value!.client; }
}

export type User = { [K in keyof LoginState]: LoginState[K] };

export const user = ref<LoginState>();

watchImmediate([account, agents], ([account, agents]) => {
    user.value = account !== undefined && agents !== undefined ? new LoginState() : undefined;
});

const oauthClient = new AtpOauthClient();
export async function authenticateIfNecessary(
    handle: string,
    refreshOnly = false,
) {
    if (!agents.value || !account.value || account.value.handle !== handle) {
        let session: Session | undefined;
        try {
            session = await getSession(
                await resolveHandleAnonymously(handle),
                { allowStale: false },
            );
        } catch (err) {
            console.warn('Could not refresh session:', err);
        }

        console.log('seession', session);

        if (refreshOnly && !session) return false;

        session ??= await oauthClient.authenticate(handle, refreshOnly);

        const oauthAgent = new OAuthUserAgent(session);

        const agent = new KittyAgent({ handler: oauthAgent });

        account.value = {
            ...(await getDidAndPds(handle)),
            handle,
        };

        agents.value = {
            agent,
            client: new AtwebClient(),
        };

        return true;
    }
}

function isTokenUsable({ token }: Session): boolean {
    const expires = token.expires_at;
    return expires == null || Date.now() + 60_000 <= expires;
}

export function authenticateOnStartup() {
    if (account.value) { // automatically sign in if possible
        authenticateIfNecessary(account.value.handle, true)
            .then(result =>
                console.log(`early authentication complete: ${result}}`));
    }
}
