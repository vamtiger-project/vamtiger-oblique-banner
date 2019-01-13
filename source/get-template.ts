import html from './html';
import css from './css';
import { IGetTemplate, GetTemplate, StringConstant } from './types';

const { nothing } = StringConstant;
const template = document.createElement('template');
const stylesheet = `<style>${css}</style>`
const templateHtml = [
    stylesheet,
    html
].join(nothing);

template.innerHTML = templateHtml;

export default <P extends IGetTemplate>({ selector }: P) => {
    const templateElement = template.content.querySelector(selector);
    const currentTemplate = templateElement && templateElement.cloneNode(true) as GetTemplate<P>;
    
    return currentTemplate;
};