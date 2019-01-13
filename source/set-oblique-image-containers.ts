import loadShadowStylesheet from '../node_modules/vamtiger-browser-method/source/load-shadow-stylesheet';
import getObliqueImageContainer from './get-oblique-image-container';
import VamtigerObliqueBanner from './element';
import { IJsonLd, StringConstant } from './types';

const { newLine } = StringConstant;

export default function (element: VamtigerObliqueBanner) {
    const { jsonld } = element;
    const { '@graph': images } = (jsonld as IJsonLd) || [];
    const obliqueImageContainers = images
        .map(getObliqueImageContainer);
    const css = [
        ':host {',
        `    grid-template-columns: repeat(${obliqueImageContainers.length}, 1fr)`,
        '}'
    ].join(newLine);

    loadShadowStylesheet({
        css,
        element
    });

    obliqueImageContainers.forEach(obliqueImageContainer => obliqueImageContainer && element.appendChild(obliqueImageContainer));
}