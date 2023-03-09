import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
  }
  _getInputValues() {
    const inputElements = [...this._element.querySelectorAll(".modal__input")];
    const formValues = {};

    inputElements.forEach((input) => {
      formValues[input.name] = input.value;
    });

    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._element.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }

  setLoading(isLoading, buttonText) {
    const button = this._element.querySelector(".modal__button");
    if (isLoading) {
      button.textContent = "Saving...";
    } else {
      button.textContent = buttonText;
    }
  }

  close() {
    this._element.querySelector(".modal__container").reset();

    super.close();
  }
}
