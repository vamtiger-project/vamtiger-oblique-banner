"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_template_1 = require("./get-template");
const types_1 = require("./types");
const { nothing } = types_1.StringConstant;
function default_1(data) {
    const { image: src, name, description } = data;
    const alt = `${name}: ${description}`;
    const obliqueImageContainer = get_template_1.default({
        selector: types_1.Selector.obliqueBanner
    });
    const image = obliqueImageContainer && obliqueImageContainer.querySelector(types_1.Selector.img);
    if (image) {
        // image.src = src;
        image.alt = alt;
        image.addEventListener('load', handleLoad);
        image.addEventListener('error', handleError);
    }
    return obliqueImageContainer;
}
exports.default = default_1;
function handleLoad(event) {
    const image = event.currentTarget;
    image.dataset.loaded = nothing;
    image.removeEventListener('loaded', handleLoad);
}
function handleError(event) {
    const { error } = event;
    const image = event.currentTarget;
    image.dataset.error = error && error.message || nothing;
    image.removeEventListener('error', handleLoad);
}
//# sourceMappingURL=get-oblique-image-container.js.map