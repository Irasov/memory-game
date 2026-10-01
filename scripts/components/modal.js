import { Component } from '../components/utils/component.js';
import { gameState } from '../index.js';

export function modal() {
  const title = new Component({
    tag: 'h2',
    classes: ['modal__title', 'title'],
    text: 'Победа!',
  });
  const subTitle = new Component({
    tag: 'p',
    classes: ['modal__subtitle'],
    text: `Вы завершили игру за ${gameState.moves} ходов!`,
  });
  const newGame = new Component({
    tag: 'button',
    classes: ['modal__new-game', 'btn'],
    text: 'Новая игра',
  });
  const close = new Component({
    tag: 'button',
    classes: ['modal__close', 'btn'],
    text: 'Закрыть',
  });
  const block = new Component({ tag: 'div', classes: ['modal__block'], text: '' }, newGame, close);
  const body = new Component(
    { tag: 'div', classes: ['modal__body'], text: '' },
    title,
    subTitle,
    block,
  );
  close.addListner('click', () => {
    modal.destroy();
  });
  const modal = new Component({ tag: 'div', classes: ['modal'], text: `` }, body);
  return modal;
}
