import { popups } from "../utils/constants";

export default class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
    this._closeButton = document.querySelector(".modal__close");
  }

  open() {
    popups.classList.add("modal_opened");
    popups.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    popups.classList.remove("modal_opened");
    popups.addEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".modal_opened");
      this.close();
    }
  }

  _setEventListeners() {
    this._element.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("modal_opened")) {
        this.close();
      }
    });

    this._closeButton.addEventListener("click", () => this.close());
  }
}
