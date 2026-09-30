import { Component } from '../components/utils/component.js';
import { cards } from '../cards.js';

export function field() {
  const cards = createCards();
  const body = new Component({ tag: 'div', classes: ['field__body'], text: '' });
  const container = new Component({ tag: 'div', classes: ['field__container'], text: '' }, body);
  const field = new Component({ tag: 'div', classes: ['field'], text: '' }, container);
  return field;
}

function createCards() {
  const cloneCards = cards.map((item) => ({ ...item }));
  let count = 16;
  while (count) {}
}

function getRandId(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
