// enabling validation by calling enableValidation()
// pass all the settings on call

function showInputError(
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) {
  const errorMessageElement = formElement.querySelector(
    `${inputElement.id}-error`
  );
  inputElement.classList.add(inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(errorClass);
}

function hideInputError(
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) {
  const errorMessageElement = formElement.querySelector(
    `${inputElement.id}-error`
  );
  inputElement.classList.remove(inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(errorClass);
}

function checkInputValidity(formElement, inputElement, options) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, options);
  } else {
    hideInputError(formElement, inputElement, options);
  }
}

function setEventListeners(formElement, options) {
  const { inputSelector } = options;
  const inputElements = Array.from(formElement.querySelectorAll(inputSelector));
  const submitButton = formElement.querySelector(".modal__button");
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, options);
      toggleButton(inputElement, submitButton, options);
    });
  });
}

function disableButton(submitButton) {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
}

function enableButton(submitButton) {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

function hasInvalidInput(inputList) {
  return !inputList.every((inputElement) => inputElement.validity.valid);
}

function toggleButton(inputElements, submitButton, { inactiveButtonClass }) {
  if (hasInvalidInput(inputElements)) {
    disableButton();
    return;
  }

  enableButton();
}

function enableValidation(options) {
  const formElements = Array.from(
    document.querySelectorAll(options.formSelector)
  );
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, options);

    //look for all inputs inside of form
    // loop through all the inputs to see if all are valid
    // if input is not valid
    //get validation message
    // add error class to input
    // display error message
    // disable button
    // if all inputs are valid
    //enable button
    // reset error messages
  });
}

const config = {
  formSelector: ".modal__container",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: ".modal__button_disabled",
  inputErrorClass: ".modal__input_error",
  errorClass: ".modal__error_visible",
};

enableValidation(config);
