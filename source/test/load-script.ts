import loadScript from '../../node_modules/vamtiger-browser-method/source/load-script';
import { expect } from 'chai';

export default () => describe('vamtiger-oblique-banner', function () {
    before(async function () {
        await loadScript({
            src: 'vamtiger-oblique-banner.js'
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="vamtiger-oblique-banner.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });

    it('custom element', function () {
        const vamtigerObliqueBanner = document.body.querySelector('vamtiger-oblique-banner');

        expect(vamtigerObliqueBanner instanceof HTMLElement).to.be.true;
    })
});