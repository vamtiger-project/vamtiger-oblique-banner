"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const load_shadow_stylesheet_1 = require("../node_modules/vamtiger-browser-method/source/load-shadow-stylesheet");
const get_oblique_image_container_1 = require("./get-oblique-image-container");
const types_1 = require("./types");
const { nothing } = types_1.StringConstant;
function default_1(element) {
    const { jsonld } = element;
    const { '@graph': images } = jsonld || [];
    const obliqueImageContainers = images
        .map(get_oblique_image_container_1.default);
    const css = [
        ':host {',
        `    grid-template-columns: repeat(${obliqueImageContainers.length}, 1fr)`,
        '}'
    ].join(nothing);
    load_shadow_stylesheet_1.default({
        css,
        element
    });
    obliqueImageContainers.forEach(obliqueImageContainer => obliqueImageContainer && element.appendChild(obliqueImageContainer));
}
exports.default = default_1;
//# sourceMappingURL=set-oblique-image-containers.js.map