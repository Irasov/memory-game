import { Component } from '../scripts/components/utils/component.js';
import { header } from './components/header.js';
import { main } from './components/main.js';
import { footer } from './components/footer.js';

export let resultGame = [];
export const gameState = { moves: 0, matchedPairs: 0 };
export const countMove = { moves: [false, false], id: [-1, -1], cards: [] };
export const noClick = new Component({ tag: 'div', classes: ['no-click'], text: '' });
const wrapperElement = new Component({ tag: 'div', classes: ['wrapper'], text: '' });

export function resetCountMove() {
  countMove.moves = [false, false];
  countMove.id = [-1, -1];
  countMove.cards = [];
}

function start() {
  if (localStorage.getItem('memo')) {
    resultGame = JSON.parse(localStorage.getItem('memo'));
  }
  const headerElement = header();
  const mainElement = main();
  const footerElement = footer();
  wrapperElement.appendChildren([headerElement, mainElement, footerElement]);
  document.body.appendChild(wrapperElement.getNode());
}

export function newGame() {
  resetCountMove();
  gameState.moves = 0;
  gameState.matchedPairs = 0;
  wrapperElement.destroyChildren();
  start();
}

export function setResultGame(result) {
  if (!localStorage.getItem('memo')) {
    localStorage.setItem('memo', JSON.stringify(result));
  } else if (resultGame.length < 10) {
    resultGame.push(result);
    localStorage.setItem('memo', JSON.stringify(resultGame));
  }
}

export function noClickAdd() {
  document.body.appendChild(noClick.getNode());
}

export function noClickRemove() {
  noClick.destroy();
}

document.addEventListener('DOMContentLoaded', () => {
  start();
});
