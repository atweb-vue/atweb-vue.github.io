import { defineCustomElement } from 'vue';
import AtImgCe from './components/AtImg.ce.vue';

customElements.define('x-atproto-img', defineCustomElement(AtImgCe, {
    shadowRoot: false,
}));
