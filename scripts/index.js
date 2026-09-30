import { Component } from '../scripts/components/utils/component.js';
import { header } from './components/header.js';
import { main } from './components/main.js';
import { footer } from './components/footer.js';

export const startGame = { start: false };
const headerElement = header();
const mainElement = main();
const footerElement = footer();
const wrapperElement = new Component({ tag: 'div', classes: ['wrapper'], text: '' });

function start() {
  wrapperElement.appendChildren([headerElement, mainElement, footerElement]);
  document.body.appendChild(wrapperElement.getNode());
}

document.addEventListener('DOMContentLoaded', () => {
  start();
});
