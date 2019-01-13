import VamtigerObliqueBanner, { name } from './element';
import { Selector, IJsonLd } from './types';

export default function (element: VamtigerObliqueBanner) {
    const { head } = document;
    const { parse } = JSON;
    const { dataset: data } = element;
    const { name } = data;
    const selector = `script${Selector.jsonld}[data-name="${name}"]`;
    const jsonldElement = head.querySelector<HTMLScriptElement>(selector);
    
    let jsonldString: string;
    let jsonLd: IJsonLd;

    if (jsonldElement) {
        jsonldString = jsonldElement.innerHTML;
        jsonLd = parse(jsonldString);

        return jsonLd;
    }
}