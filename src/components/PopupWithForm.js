import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
  }
  _getInputValues() {
    this._inputElements = [
      ...this._popupSelector.querySelectorAll(".modal__input"),
    ];
    let inputValues = {};

    this._inputElements.forEach((input) => {
      inputValues[input.name] = input.textContent;
    });

    return inputValues;
  }

  setEventListeners() {
    this._popupSelector.addEventListener("submit", (event) => {
      event.preventDefault();
      handleSubmit(inputValues);
      this.close();
    });
  }

  close() {
    this.element.reset();

    super.close();
  }
}
