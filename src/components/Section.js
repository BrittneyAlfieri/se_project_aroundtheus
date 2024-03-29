export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._element = document.querySelector(containerSelector);
  }

  renderItems(cards) {
    cards.forEach((card) => {
      this._renderer(card);
    });
  }

  addItem(element) {
    this._element.prepend(element);
  }
}
