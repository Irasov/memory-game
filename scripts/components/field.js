import { Component } from '../components/utils/component.js';

export function field() {
  const cards = createCards();
  const body = new Component({ tag: 'div', classes: ['field__body'], text: '' });
  const container = new Component({ tag: 'div', classes: ['field__container'], text: '' }, body);
  const field = new Component({ tag: 'div', classes: ['field'], text: '' }, container);
  return field;
}
