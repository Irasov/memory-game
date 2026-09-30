import { Component } from '../components/utils/component.js';

export function header() {
  const header = new Component({ tag: 'header', classes: ['header'], text: '' });
  return header;
}
