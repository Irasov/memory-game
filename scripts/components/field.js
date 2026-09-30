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
  console.log(getRandId());
}

function getRandId(min, max) {
  const ids = [];
  for (let i = 1; i <= 8; i++) {
    ids.push(i, i);
  }
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids;
}
