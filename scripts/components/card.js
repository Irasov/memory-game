import { Component } from '../components/utils/component.js';

export function card(image, id) {
  const cardImg = new Component({ tag: 'img', classes: ['card__img'], text: '' });
  cardImg.setAttribute('src', image);
  cardImg.setAttribute('alt', 'back card');
  const card = new Component(
    { tag: 'div', classes: ['card'], text: '' },
    new Component(
      { tag: 'div', classes: ['card__body'], text: '' },
      new Component({ tag: 'div', classes: ['card__front'], text: '' }),
      new Component({ tag: 'div', classes: ['card__back'], text: '' }, cardImg),
    ),
  );
  card.setAttribute('data-id', id);
  return card;
}
