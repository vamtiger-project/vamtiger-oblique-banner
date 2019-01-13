export declare enum ObservedAttributes {
    jsonld = "jsonld"
}
export declare enum StringConstant {
    nothing = ""
}
export declare enum Attribute {
    jsonld = "jsonld"
}
export declare enum Selector {
    jsonld = "[type=\"application/ld+json\"]",
    style = "style",
    container = ".container",
    slot = "slot",
    obliqueBanner = "[slot=\"oblique-banner\"]",
    picture = "picture",
    img = "img"
}
export interface IGetTemplate {
    selector: Selector;
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
export declare type GetTemplate<P extends IGetTemplate> = P['selector'] extends Selector.style ? HTMLStyleElement : P['selector'] extends Selector.slot ? HTMLSlotElement : P['selector'] extends Selector.obliqueBanner ? HTMLElement : P['selector'] extends Selector.picture ? HTMLPictureElement : P['selector'] extends Selector.img ? HTMLImageElement : never;
export declare type ExcludeUndefined<T> = {
    [K in keyof T]: NonNullable<T>;
};
