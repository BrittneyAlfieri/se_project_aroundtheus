class Section {
  constructor({ renderer }, containerSelector) {
    this.renderer = renderer;
    this.containerSelector = document.querySelector(`.${containerSelector}`);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._containerSelector.append(element);
  }
}

export default Section;
