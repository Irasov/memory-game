import { Component } from '../scripts/components/utils/component.js';
import { header } from './components/header.js';

const headerElement = header();
const wrapperElement = new Component({ tag: 'div', classes: ['wrapper'], text: '' });

function start() {
  wrapperElement.appendChildren([headerElement]);
  document.body.appendChild(wrapperElement.getNode());
}

document.addEventListener('DOMContentLoaded', () => {
  start();
});
