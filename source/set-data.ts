import loadScript from '../node_modules/vamtiger-browser-method/source/load-script';
import VamtigerObliqueBanner, { name } from './element';
import { IJsonLd, StringConstant, Attribute } from './types';

const { nothing } = StringConstant;

let count = 0;

export default async function (element: VamtigerObliqueBanner) {
    const { dataset: data } = element;
    const { stringify } = JSON;
    const { jsonld: url } = data;
    const currentName = `${name}-${++count}`;
    const jsonld = url && await fetch(url)
        .then<IJsonLd>(response => response.json());
    const josnldString = jsonld && stringify(jsonld);

    data.name = currentName;

    if (josnldString && jsonld) {
        await loadScript({
            name: currentName,
            js: josnldString,
            jsonld: true
        });
        
        return jsonld;
    }
}