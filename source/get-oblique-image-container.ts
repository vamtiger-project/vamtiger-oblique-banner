import getTemplate from './get-template';
import { IImage, Selector, StringConstant } from './types';

const { nothing } = StringConstant

export default function (data: IImage) {
    const { 
        image: src,
        name,
        description
    } = data;
    const alt = `${name}: ${description}`;
    const obliqueImageContainer = getTemplate({
        selector: Selector.obliqueBanner
    });
    const image = obliqueImageContainer && obliqueImageContainer.querySelector(Selector.img);

    if (image) {
        // image.src = src;
        image.alt = alt;

        image.addEventListener('load', handleLoad);
        image.addEventListener('error', handleError);
    }

    return obliqueImageContainer;
}

function handleLoad(event: Event) {
    const image = event.currentTarget as HTMLImageElement;

    image.dataset.loaded = nothing;
    
    image.removeEventListener('loaded', handleLoad);
}

function handleError(event: ErrorEvent) {
    const { error } = event;
    const image = event.currentTarget as HTMLImageElement;

    image.dataset.error = error && error.message || nothing;

    image.removeEventListener('error', handleLoad);
}