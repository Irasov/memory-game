import { Component } from '../components/utils/component.js';
import { countMove } from '../index.js';
import { gameState } from '../index.js';
import { updateFooter } from './footer.js';

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
  card.addListner('click', () => {
    card.addClass('rotate');
    if (!countMove.moves[0]) {
      countMove.moves[0] = true;
      countMove.id[0] = id;
    } else if (!countMove.moves[1]) {
      countMove.moves[1] = true;
      countMove.id[1] = id;
    }
    if (countMove.moves[0] && countMove.moves[1]) {
      gameState.moves++;
    }
    if (countMove.id[0] === countMove.id[1] && countMove.id[0] !== -1) {
      gameState.matchedPairs++;
      updateFooter(gameState.moves, gameState.matchedPairs);
      countMove = { moves: [false, false], id: [-1, -1] };
    }
    console.log(gameState);
  });
  return card;
}
