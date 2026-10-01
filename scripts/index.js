import { Component } from '../scripts/components/utils/component.js';
import { header } from './components/header.js';
import { main } from './components/main.js';
import { footer } from './components/footer.js';

export const startGame = { start: false };
export const gameState = { moves: 0, matchedPairs: 0 };
export const countMove = { moves: [false, false], id: [-1, -1], cards: [] };
const headerElement = header();
const mainElement = main();
const footerElement = footer();
const wrapperElement = new Component({ tag: 'div', classes: ['wrapper'], text: '' });

export function resetCountMove() {
  countMove.moves = [false, false];
  countMove.id = [-1, -1];
  countMove.cards = [];
}

function start() {
  wrapperElement.appendChildren([headerElement, mainElement, footerElement]);
  document.body.appendChild(wrapperElement.getNode());
}

document.addEventListener('DOMContentLoaded', () => {
  start();
});
