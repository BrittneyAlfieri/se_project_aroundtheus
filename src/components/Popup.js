export default class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
    this._closeButton = this._element.querySelector(".modal__close");
  }

  open() {
    this._element.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._element.classList.remove("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".modal_opened");
      this.close(openedPopup);
    }
  }

  _setEventListeners() {
    this._element.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("modal_opened")) {
        this.close();
      }
    });

    this._closeButton.addEventListener("click", () => this.close());

    console.log("click");
  }
}
