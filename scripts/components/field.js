import { Component } from '../components/utils/component.js';
import { cardsList } from '../cardsList.js';
import { card } from './card.js';

export function field() {
  const cards = createCards();
  const body = new Component({ tag: 'div', classes: ['field__body'], text: '' });
  body.appendChildren(cards);
  const container = new Component({ tag: 'div', classes: ['field__container'], text: '' }, body);
  const field = new Component({ tag: 'div', classes: ['field'], text: '' }, container);
  return field;
}

function createCards() {
  const id = getRandId();
  const cards = [];
  console.log(cardsList);
  for (let i = 0; i < id.length; i += 1) {
    cards.push(card(cardsList[id[i]].image, cardsList[id[i]].id));
  }
  return cards;
}

function getRandId() {
  const ids = [];
  for (let i = 0; i <= 7; i++) {
    ids.push(i, i);
  }
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  console.log(ids);
  return ids;
}
