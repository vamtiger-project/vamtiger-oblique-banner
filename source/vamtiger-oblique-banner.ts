import element, { name } from './element';

async function main() {
    customElements.define(name, element);
}

main().catch(console.warn);