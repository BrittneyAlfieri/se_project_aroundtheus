import { popups } from "../scripts/constants";

class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(`.${popupSelector}`);
    this._closeButton = this._popupSelector.querySelector(".modal__close");
  }

  open() {
    popups.classList.add("modal_opened");
    popups.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    popups.classList.remove("modal_opened");
    popups.addEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose() {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".modal_opened");
      this.close(openedPopup);
    }
  }

  _setEventListeners() {
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("modal_opened")) {
        this.close();
      }
    });

    this._closeButton.addEventListener("click", () => this.close());
  }
}
export default Popup;
