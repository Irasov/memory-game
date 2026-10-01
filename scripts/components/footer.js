import { Component } from '../components/utils/component.js';
import { gameState } from '../index.js';

export function footer() {
  const move = new Component({
    tag: 'span',
    classes: ['footer__move'],
    text: `Ходы: ${gameState.moves}`,
  });
  const pairs = new Component({
    tag: 'span',
    classes: ['footer__pairs'],
    text: `Пары: ${gameState.matchedPairs} из 8`,
  });
  const body = new Component({ tag: 'div', classes: ['footer__body'], text: '' }, move, pairs);
  const container = new Component({ tag: 'div', classes: ['footer__container'], text: '' }, body);
  const footer = new Component({ tag: 'footer', classes: ['footer'], text: '' }, container);
  return footer;
}
