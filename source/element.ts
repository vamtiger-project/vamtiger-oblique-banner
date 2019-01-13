import getTemplate from './get-template';
import setData from './set-data';
import getJsonld from './get-jsonld';
import setObliqueImageContainers from './set-oblique-image-containers';
import { shadowRoot as shadowRootConfig, observedAttributes } from './config';
import { GetTemplate, Selector } from './types';

export const name = 'vamtiger-oblique-banner';

export default class VamtigerObliqueBanner extends HTMLElement {
    constructor() {
        super();
        const stylesheet = getTemplate({
            selector: Selector.style
        });
        const slot = getTemplate({
            selector: Selector.slot
        });
        const shadowRoot = this.attachShadow(shadowRootConfig);

        stylesheet && shadowRoot.appendChild(stylesheet);
        slot && shadowRoot.appendChild(slot);
    }

    async connectedCallback() {
        await setData(this);
        await setObliqueImageContainers(this);
    }

    get jsonld() {
        return getJsonld(this);
    }
}

