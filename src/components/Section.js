export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._element = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._element.append(element);
  }
}
