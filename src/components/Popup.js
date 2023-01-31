import { popups, closeButtons } from "../scripts/constants";

class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(`.${popupSelector}`);
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
      this.close();
    }
  }

  _setEventListeners() {
    popups.forEach((popup) => {
      popup.addEventListener("mousedown", (evt) => {
        if (evt.target.classList.contains("modal_opened")) {
          this.close();
        }
      });
    });
  }
}
