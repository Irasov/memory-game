import { Component } from '../components/utils/component.js';
import { resultGame } from '../index.js';

export function modalRes() {
  const close = new Component({
    tag: 'button',
    classes: ['result__close', 'btn'],
    text: 'Закрыть',
  });
  close.addListner('click', () => {
    modal.destroy();
  });
  const nTitle = new Component({
    tag: 'span',
    classes: ['result__n-title'],
    text: 'Место',
  });
  const dTitle = new Component({
    tag: 'span',
    classes: ['result__d-title'],
    text: 'Дата',
  });
  const mTitle = new Component({
    tag: 'span',
    classes: ['result__m-title'],
    text: 'Ходы',
  });
  const listTitle = new Component(
    {
      tag: 'div',
      classes: ['result__list-title'],
      text: '',
    },
    nTitle,
    dTitle,
    mTitle,
  );
  const list = new Component(
    {
      tag: 'div',
      classes: ['result__list'],
      text: '',
    },
    listTitle,
  );
  if (!localStorage.getItem('memo')) {
    list.setTextContent('Пока нет результатов');
  } else {
    resultGame.sort((a, b) => a.moves - b.moves);
    resultGame.forEach((item, index) => {
      const itemElement = createResultItem(item, index);
      list.append(itemElement);
    });
  }
  const title = new Component({
    tag: 'h2',
    classes: ['result__title', 'title'],
    text: 'Таблица лидеров',
  });
  const body = new Component(
    { tag: 'div', classes: ['result__body'], text: '' },
    title,
    list,
    close,
  );
  const modal = new Component({ tag: 'div', classes: ['result'], text: '' }, body);
  return modal;
}

function createResultItem(item, index) {
  const itemElement = new Component(
    { tag: 'div', classes: ['result__item'], text: '' },
    new Component({ tag: 'span', classes: ['result__number'], text: `${index + 1}.` }),
    new Component({ tag: 'span', classes: ['result__date'], text: `${item.date}` }),
    new Component({ tag: 'span', classes: ['result__moves'], text: `${item.moves}` }),
  );
  return itemElement;
}
