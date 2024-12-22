import AtImg from '@/components/custom-elements/AtImg.ce.vue';
import AtLink from '@/components/custom-elements/AtLink.ce.vue';
import AtAnchor from '@/components/custom-elements/AtAnchor.ce.vue';
import AtWebStylesheet from '@/components/custom-elements/AtWebStylesheet.ce.vue';
import OmitVanillaCss from '@/components/custom-elements/OmitVanillaCss.ce.vue';
import AtStyle from '@/components/custom-elements/AtStyle.ce.vue';
import AtWebTitle from '@/components/custom-elements/AtWebTitle.ce.vue';
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
