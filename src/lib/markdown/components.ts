import AtImg from '@/components/custom-elements/AtImg.vue';
import AtLink from '@/components/custom-elements/AtLink.vue';
import AtAnchor from '@/components/custom-elements/AtAnchor.vue';
import AtWebStylesheet from '@/components/custom-elements/AtWebStylesheet.vue';
import OmitVanillaCss from '@/components/custom-elements/OmitVanillaCss.vue';
import AtStyle from '@/components/custom-elements/AtStyle.vue';
import AtWebTitle from '@/components/custom-elements/AtWebTitle.vue';
import type { MDXComponents } from '../mdx-types';

export const components: MDXComponents = {
    img: AtImg,
    link: AtLink,
    a: AtAnchor,
    Stylesheet: AtWebStylesheet,
    OmitVanillaCss: OmitVanillaCss,
    style: AtStyle,
    title: AtWebTitle,
};
