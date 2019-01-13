"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const html_1 = require("./html");
const css_1 = require("./css");
const types_1 = require("./types");
const { nothing } = types_1.StringConstant;
const template = document.createElement('template');
const stylesheet = `<style>${css_1.default}</style>`;
const templateHtml = [
    stylesheet,
    html_1.default
].join(nothing);
template.innerHTML = templateHtml;
exports.default = ({ selector }) => {
    const templateElement = template.content.querySelector(selector);
    const currentTemplate = templateElement && templateElement.cloneNode(true);
    return currentTemplate;
};
//# sourceMappingURL=get-template.js.map