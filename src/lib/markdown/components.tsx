import 'bluesky-profile-card-embed';
import 'bluesky-profile-feed-embed';

import type { MDXComponents } from './mdx-types';

import type { Slot } from 'vue';
import type { JSX } from 'vue/jsx-runtime';

import AtImg from '@/components/custom-elements/AtImg.vue';
import AtLink from '@/components/custom-elements/AtLink.vue';
import AtAnchor from '@/components/custom-elements/AtAnchor.vue';
import AtWebStylesheet from '@/components/custom-elements/AtWebStylesheet.vue';
import OmitVanillaCss from '@/components/custom-elements/OmitVanillaCss.vue';
import AtStyle from '@/components/custom-elements/AtStyle.vue';
import AtWebTitle from '@/components/custom-elements/AtWebTitle.vue';
import WebampPlayer from '@/components/custom-elements/WebampPlayer.vue';
import SpotifyPlayer from '@/components/custom-elements/SpotifyPlayer.vue';
import OnekoKitty from '@/components/custom-elements/OnekoKitty.vue';
import NewBlink from '@/components/custom-elements/NewBlink.vue';
import LesbiBadge from '@/components/custom-elements/LesbiBadge.vue';
import EightyEightThirtyOneBadge from '@/components/custom-elements/EightyEightThirtyOneBadge.vue';
import UserbarBadge from '@/components/custom-elements/UserbarBadge.vue';
import RingLink from '@/components/custom-elements/RingLink.vue';
import BlueskyPost from '@/components/custom-elements/BlueskyPost.vue';
import BlueskyProfileCard from '@/components/custom-elements/BlueskyProfileCard.vue';
import BlueskyProfileFeed from '@/components/custom-elements/BlueskyProfileFeed.vue';

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
    BlueskyPost: BlueskyPost,
    BlueskyProfileCard: BlueskyProfileCard,
    BlueskyProfileFeed: BlueskyProfileFeed,
    Webamp: WebampPlayer,
    Spotify: SpotifyPlayer,
    Oneko: OnekoKitty,
    blink: NewBlink,
    LesbiBadge: LesbiBadge,
    Badge: EightyEightThirtyOneBadge,
    Userbar: UserbarBadge,
    RingLink: RingLink
};
