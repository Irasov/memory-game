import { Component } from '../components/utils/component.js';
import { field } from './field.js';

export function main() {
  const main = new Component({ tag: 'main', classes: ['main'], text: '' }, field());
  return main;
}
