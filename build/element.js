"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_template_1 = require("./get-template");
const set_data_1 = require("./set-data");
const get_jsonld_1 = require("./get-jsonld");
const set_oblique_image_containers_1 = require("./set-oblique-image-containers");
const config_1 = require("./config");
const types_1 = require("./types");
exports.name = 'vamtiger-oblique-banner';
class VamtigerObliqueBanner extends HTMLElement {
    constructor() {
        super();
        const stylesheet = get_template_1.default({
            selector: types_1.Selector.style
        });
        const slot = get_template_1.default({
            selector: types_1.Selector.slot
        });
        const shadowRoot = this.attachShadow(config_1.shadowRoot);
        stylesheet && shadowRoot.appendChild(stylesheet);
        slot && shadowRoot.appendChild(slot);
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            yield set_data_1.default(this);
            yield set_oblique_image_containers_1.default(this);
        });
    }
    get jsonld() {
        return get_jsonld_1.default(this);
    }
}
exports.default = VamtigerObliqueBanner;
//# sourceMappingURL=element.js.map