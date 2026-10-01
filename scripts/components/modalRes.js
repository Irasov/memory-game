import { Component } from '../components/utils/component.js';

export function modalRes() {
  const close = new Component({
    tag: 'button',
    classes: ['result__close', 'btn'],
    text: 'Закрыть',
  });
  close.addListner('click', () => {
    modal.destroy();
  });
  const list = new Component({
    tag: 'div',
    classes: ['result__list'],
    text: '',
  });
  if (!localStorage.getItem('memo')) {
    list.setTextContent('Пока нет результатов');
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
