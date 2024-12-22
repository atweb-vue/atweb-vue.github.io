import { defineCustomElement, type ComponentPublicInstance, type CustomElementOptions } from 'vue';
import AtImgCe from './components/custom-elements/AtImg.ce.vue';
import AtLinkCe from './components/custom-elements/AtLink.ce.vue';
import AtAnchorCe from './components/custom-elements/AtAnchor.ce.vue';
import AWStylesheetCe from './components/custom-elements/AWStylesheet.ce.vue';

const defaultOpts = {
    shadowRoot: false,
} satisfies CustomElementOptions;

function defineElement<T extends {
    new (...args: any[]): ComponentPublicInstance<any>;
}>(name: string, component: T, options: CustomElementOptions = {}) {
    customElements.define(
        name,
        defineCustomElement(
            component,
            Object.assign({}, defaultOpts, options)
        ),
    );
}

defineElement('x-atproto-img', AtImgCe);
defineElement('x-atproto-link', AtLinkCe);
defineElement('x-atproto-anchor', AtAnchorCe);
defineElement('x-atweb-stylesheet', AWStylesheetCe);
