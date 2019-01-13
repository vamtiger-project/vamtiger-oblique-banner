export enum ObservedAttributes {
    jsonld = 'jsonld'
}

export enum StringConstant {
    nothing = '',
    newLine = '\n'
}

export enum Attribute {
    jsonld = 'jsonld'
}

export enum Selector {
    jsonld = '[type="application/ld+json"]',
    style = 'style',
    container = '.container',
    slot = 'slot',
    obliqueBanner = '[slot="oblique-banner"]',
    picture = 'picture',
    img = 'img'
}

export interface IGetTemplate {
    selector: Selector
}

export interface IJsonLd {
    "@context": string;
    author: IAuthor;
    "@graph": IImage[];
}

export interface IAuthor {
    "@type": string;
    name: string;
}

export interface IImage {
    "@type": string;
    name: string;
    description: string;
    image: string;
}

export type GetTemplate<P extends IGetTemplate> = 
    P['selector'] extends Selector.style ? HTMLStyleElement :
    P['selector'] extends Selector.slot ? HTMLSlotElement :
    P['selector'] extends Selector.obliqueBanner ? HTMLElement :
    P['selector'] extends Selector.picture ? HTMLPictureElement :
    P['selector'] extends Selector.img ? HTMLImageElement :
    never;

export type ExcludeUndefined<T> = {
    [K in keyof T]: NonNullable<T>;
}