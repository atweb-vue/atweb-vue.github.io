import 'bluesky-post-embed';
import 'bluesky-profile-card-embed';
import 'bluesky-profile-feed-embed';

import type { MDXComponents } from './mdx-types';

import type { Slot } from 'vue';
import type { JSX } from 'vue/jsx-runtime';

import AtImg from '@/components/custom-elements/AtImg.ce.vue';
import AtLink from '@/components/custom-elements/AtLink.ce.vue';
import AtAnchor from '@/components/custom-elements/AtAnchor.ce.vue';
import AtWebStylesheet from '@/components/custom-elements/AtWebStylesheet.ce.vue';
import OmitVanillaCss from '@/components/custom-elements/OmitVanillaCss.ce.vue';
import AtStyle from '@/components/custom-elements/AtStyle.ce.vue';
import AtWebTitle from '@/components/custom-elements/AtWebTitle.ce.vue';
import WebampPlayer from '@/components/custom-elements/WebampPlayer.ce.vue';
import SpotifyPlayer from '@/components/custom-elements/SpotifyPlayer.vue';
import OnekoKitty from '@/components/custom-elements/OnekoKitty.ce.vue';
import NewBlink from '@/components/custom-elements/NewBlink.ce.vue';
import LesbiBadge from '@/components/custom-elements/LesbiBadge.ce.vue';
import EightyEightThirtyOneBadge from '@/components/custom-elements/EightyEightThirtyOneBadge.ce.vue';
import UserbarBadge from '@/components/custom-elements/UserbarBadge.ce.vue';
import RingLink from '@/components/custom-elements/RingLink.ce.vue';

type Props = Record<string, any>;

interface Context {
    atts: Record<string, any>;
    slots: { [name: string]: Slot };
}

export const components: MDXComponents = {
    img: AtImg,
    link: AtLink,
    a: AtAnchor,
    Stylesheet: AtWebStylesheet,
    OmitVanillaCss: OmitVanillaCss,
    style: AtStyle,
    title: AtWebTitle,
    BlueskyPost: 'bluesky-post',
    BlueskyProfileCard: 'bluesky-profile-card',
    BlueskyProfileFeed: 'bluesky-profile-feed',
    Webamp: WebampPlayer,
    Spotify: SpotifyPlayer,
    Oneko: OnekoKitty,
    blink: NewBlink,
    LesbiBadge: LesbiBadge,
    Badge: EightyEightThirtyOneBadge,
    Userbar: UserbarBadge,
    RingLink: RingLink
};
