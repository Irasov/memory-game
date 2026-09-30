import { Component } from '../components/utils/component.js';
import { startGame } from '../index.js';

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
  startButton.addListner('click', gameStart);
  const resultButton = new Component({
    tag: 'button',
    classes: ['header__results', 'btn'],
    text: 'Таблица лидеров',
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

function gameStart() {
  startGame.start = true;
  console.log('Game start', startGame.start);
}
