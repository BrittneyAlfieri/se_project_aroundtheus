class FormValidator {
  constructor(config, formElement) {
    this._form = formElement;
    console.log(this._form);
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }

  _showInputError(inputElement) {
    const errorMessageElement = this._form.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorMessageElement.textContent = inputElement.validationMessage;
    errorMessageElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorMessageElement = this._form.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorMessageElement.textContent = inputElement.validationMessage;
    errorMessageElement.classList.remove(this._errorClass);
  }

  _disableButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _enableButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  toggleButtonState = () => {
    const isFormValid = this._checkFormValidity();
    if (isFormValid) {
      this._enableButton();
    } else {
      this._disableButton();
    }
  };

  _checkFormValidity = () =>
    this._inputElements.every((input) => input.validity.valid);

  _setEventListeners() {
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._inputElements = [...this._form.querySelectorAll(this._inputSelector)];

    this._form.addEventListener("reset", () => {
      this._disableButton();
    });

    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (event) => {
        this._checkFormValidity();
        this.toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}

export default FormValidator;
