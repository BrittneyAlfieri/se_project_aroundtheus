import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
  }
  _getInputValues() {
    this._inputElements = [
      ...this._popupSelector.querySelectorAll(".modal__input"),
    ];
    const inputValues = {};

    this._inputElements.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }

  setEventListeners() {
    this._popupSelector.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }

  close() {
    this.element.reset();

    super.close();
  }
}
