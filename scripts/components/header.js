import { Component } from '../components/utils/component.js';
import { newGame } from '../index.js';
import { modalRes } from './modalRes.js';

export function header() {
  const title = new Component({
    tag: 'h1',
    classes: ['header__title', 'title'],
    text: 'Memory Game',
  });
  const startButton = new Component({
    tag: 'button',
    classes: ['header__start', 'btn'],
    text: 'Новая Игра',
  });
  startButton.addListner('click', newGame);
  const resultButton = new Component({
    tag: 'button',
    classes: ['header__results', 'btn'],
    text: 'Таблица лидеров',
  });
  resultButton.addListner('click', () => {
    document.body.appendChild(modalRes().getNode());
  });
  const block = new Component(
    { tag: 'div', classes: ['header__block'], text: '' },
    startButton,
    resultButton,
  );
  const body = new Component({ tag: 'div', classes: ['header__body'], text: '' }, title, block);
  const container = new Component({ tag: 'div', classes: ['header__container'], text: '' }, body);
  const header = new Component({ tag: 'header', classes: ['header'], text: '' }, container);
  return header;
}
