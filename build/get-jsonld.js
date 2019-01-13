"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
function default_1(element) {
    const { head } = document;
    const { parse } = JSON;
    const { dataset: data } = element;
    const { name } = data;
    const selector = `script${types_1.Selector.jsonld}[data-name="${name}"]`;
    const jsonldElement = head.querySelector(selector);
    let jsonldString;
    let jsonLd;
    if (jsonldElement) {
        jsonldString = jsonldElement.innerHTML;
        jsonLd = parse(jsonldString);
        return jsonLd;
    }
}
exports.default = default_1;
//# sourceMappingURL=get-jsonld.js.map