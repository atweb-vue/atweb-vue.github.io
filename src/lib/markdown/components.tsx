import type { MDXComponents } from './mdx-types';

import type { Slot } from 'vue';
import type { JSX } from 'vue/jsx-runtime';

import AtImg from '@/components/markdown-elements/AtImg.vue';
import AtLink from '@/components/markdown-elements/AtLink.vue';
import AtAnchor from '@/components/markdown-elements/AtAnchor.vue';
import AtWebStylesheet from '@/components/markdown-elements/AtWebStylesheet.vue';
import OmitVanillaCss from '@/components/markdown-elements/OmitVanillaCss.vue';
import AtStyle from '@/components/markdown-elements/AtStyle.vue';
import AtWebTitle from '@/components/markdown-elements/AtWebTitle.vue';
import WebampPlayer from '@/components/markdown-elements/WebampPlayer.vue';
import SpotifyPlayer from '@/components/markdown-elements/SpotifyPlayer.vue';
import OnekoKitty from '@/components/markdown-elements/OnekoKitty.vue';
import NewBlink from '@/components/markdown-elements/NewBlink.vue';
import LesbiBadge from '@/components/markdown-elements/LesbiBadge.vue';
import EightyEightThirtyOneBadge from '@/components/markdown-elements/EightyEightThirtyOneBadge.vue';
import UserbarBadge from '@/components/markdown-elements/UserbarBadge.vue';
import RingLink from '@/components/markdown-elements/RingLink.vue';
import BlueskyPost from '@/components/markdown-elements/BlueskyPost.vue';
import BlueskyProfileCard from '@/components/markdown-elements/BlueskyProfileCard.vue';
import BlueskyProfileFeed from '@/components/markdown-elements/BlueskyProfileFeed.vue';
import RenderJson from '@/components/markdown-elements/RenderJson.vue';
import NewMarquee from '@/components/markdown-elements/NewMarquee.vue';
import SocialLink from '@/components/markdown-elements/SocialLink.vue';

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
    RingLink: RingLink,
    Json: RenderJson,
    marquee: NewMarquee,
    SocialLink: SocialLink,
};
