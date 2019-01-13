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
const load_script_1 = require("../node_modules/vamtiger-browser-method/source/load-script");
const element_1 = require("./element");
const types_1 = require("./types");
const { nothing } = types_1.StringConstant;
let count = 0;
function default_1(element) {
    return __awaiter(this, void 0, void 0, function* () {
        const { dataset: data } = element;
        const { stringify } = JSON;
        const { jsonld: url } = data;
        const currentName = `${element_1.name}-${++count}`;
        const jsonld = url && (yield fetch(url)
            .then(response => response.json()));
        const josnldString = jsonld && stringify(jsonld);
        data.name = currentName;
        if (josnldString && jsonld) {
            yield load_script_1.default({
                name: currentName,
                js: josnldString,
                jsonld: true
            });
            return jsonld;
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=set-data.js.map