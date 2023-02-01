import { popups, profileForm } from "../scripts/constants";
import Popup from "../components/Popup.js";

class PopupWithForm extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector);
    this.data = data;
  }
  _getInputValues() {}

  setEventListeners() {
    profileForm.addEventListener("submit", function (event) {
      event.preventDefault();
      this._getInputValues();
    });

    cardAddForm.addEventListener("submit", function (event) {
      event.preventDefault();
      this._getInputValues();
      renderCard(cardData);
      this.close();
    });
  }

  close() {
    this.element.reset();

    super.close();
  }
}
