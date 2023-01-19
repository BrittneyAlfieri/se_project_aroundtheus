class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._inputElements = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    this._form = formElement;
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

  _toggleButtonState(submitButton, inactiveButtonClass) {
    if (hasInvalidInput(inputElements)) {
      disableButton(submitButton, inactiveButtonClass);
      return;
    }
    enableButton(submitButton, inactiveButtonClass);
  }

  _hasInvalidInput(inputElements) {
    return !inputElements.every((inputElement) => inputElement.validity.valid);
  }

  _setEventListeners() {
    this._inputElements = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    this._form.addEventListener("reset", () => {
      disableButton(submitButton, inactiveButtonClass);
    });

    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (event) => {
        checkInputValidity(this._form, inputElement, config);
        toggleButtonState(inputElements, submitButton, config);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, options);
  }
}

export default FormValidator;
