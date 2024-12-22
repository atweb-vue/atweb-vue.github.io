import 'bluesky-post-embed';
import 'bluesky-profile-card-embed';
import 'bluesky-profile-feed-embed';

import type { MDXComponents } from './mdx-types';

import AtImg from '@/components/custom-elements/AtImg.ce.vue';
import AtLink from '@/components/custom-elements/AtLink.ce.vue';
import AtAnchor from '@/components/custom-elements/AtAnchor.ce.vue';
import AtWebStylesheet from '@/components/custom-elements/AtWebStylesheet.ce.vue';
import OmitVanillaCss from '@/components/custom-elements/OmitVanillaCss.ce.vue';
import AtStyle from '@/components/custom-elements/AtStyle.ce.vue';
import AtWebTitle from '@/components/custom-elements/AtWebTitle.ce.vue';
import { type Slot } from 'vue';
import type { JSX } from 'vue/jsx-runtime';
import WebampPlayer from '@/components/custom-elements/WebampPlayer.ce.vue';
import SpotifyPlayer from '@/components/custom-elements/SpotifyPlayer.vue';
import OnekoKitty from '@/components/custom-elements/OnekoKitty.ce.vue';

type Props = Record<string, any>;

interface Context {
    atts: Record<string, any>;
    slots: { [name: string]: Slot };
}

const extraComponents: Record<
    string,
    (props: Props, context: Context) => JSX.Element
> = {
    hr: () => <hr class="va-separator" />,
    h1: (_, { slots }) => <h1 class="va-h1">{slots.default()}</h1>,
    h2: (_, { slots }) => <h2 class="va-h2">{slots.default()}</h2>,
    h3: (_, { slots }) => <h3 class="va-h3">{slots.default()}</h3>,
    h4: (_, { slots }) => <h4 class="va-h4">{slots.default()}</h4>,
    h5: (_, { slots }) => <h5 class="va-h5">{slots.default()}</h5>,
    h6: (_, { slots }) => <h6 class="va-h6">{slots.default()}</h6>,
    ol: (_, { slots }) => <ol class="va-ordered">{slots.default()}</ol>,
    ul: (_, { slots }) => <ul class="va-unordered">{slots.default()}</ul>,
    blockquote: (_, { slots }) => <blockquote class="va-blockquote">{slots.default()}</blockquote>,
    uppercase: (_, { slots }) => <span class="va-text-uppercase">{slots.default()}</span>,
    lowercase: (_, { slots }) => <span class="va-text-lowercase">{slots.default()}</span>,
    capitalize: (_, { slots }) => <span class="va-text-capitalize">{slots.default()}</span>,
    highlighted: (_, { slots }) => <span class="va-text-highlighted">{slots.default()}</span>,
    left: (_, { slots }) => <span class="va-text-left">{slots.default()}</span>,
    right: (_, { slots }) => <span class="va-text-right">{slots.default()}</span>,
    center: (_, { slots }) => <span class="va-text-center">{slots.default()}</span>,
    justify: (_, { slots }) => <span class="va-text-justify">{slots.default()}</span>,
    truncate: (_, { slots }) => <span class="va-text-truncate">{slots.default()}</span>,
    'no-wrap': (_, { slots }) => <span class="va-text-no-wrap">{slots.default()}</span>,

    p: (_, { slots }) => <p class="va-paragraph">{slots.default()}</p>,
};

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
    ...(extraComponents as unknown as MDXComponents)
};
