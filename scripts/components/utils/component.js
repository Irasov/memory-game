export class Component {
  #children = [];
  #node = null;
  constructor({ tag = 'div', classes = [], text = '' }, ...children) {
    const node = document.createElement(tag);
    node.textContent = text;
    if (classes.length > 0) node.classList.add(...classes);
    this.#node = node;
    if (children) this.appendChildren(children);
  }
  append(child) {
    this.#children.push(child);
    this.#node.append(child.getNode());
  }
  appendChildren(children) {
    children.forEach((child) => {
      this.append(child);
    });
  }
  getChildren() {
    return this.#children;
  }
  getNode() {
    return this.#node;
  }
  setTextContent(text) {
    this.#node.textContent = text;
  }
  setAttribute(attribute, value) {
    this.#node.setAttribute(attribute, value);
  }
  removeAttribute(attribute) {
    this.#node.removeAttribute(attribute);
  }
  toggleClass(className) {
    this.#node.classList.toggle(className);
  }
  addListner(event, listner) {
    this.#node.addEventListener(event, listner);
  }
  removeListener(event, listener) {
    this.#node.removeListener(event, listener);
  }
  destroyChildren() {
    this.#children.forEach((child) => {
      child.destroy();
    });
    this.#children.length = 0;
  }
  destroy() {
    if (this.#children.length > 0) this.destroyChildren();
    this.#node.remove();
  }
}
