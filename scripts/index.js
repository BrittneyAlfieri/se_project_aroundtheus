import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { closePopup, openPopup, closeByEscape } from "./utils.js";
import {
  profileEditOpen,
  profileForm,
  profileEditTitle,
  profileEditDescription,
  modalEditPopup,
  modalTitleInput,
  modalDescriptionInput,
  popups,
  closeButtons,
  cardAddPopup,
  cardAddButton,
  cardAddForm,
  initialCards,
  cardNameValue,
  cardLinkValue,
} from "./Const.js";

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("modal_opened")) {
      closePopup(popup);
    }
  });
});

closeButtons.forEach((button) => {
  const popup = button.closest(".modal");

  button.addEventListener("click", () => closePopup(popup));
});

profileEditOpen.addEventListener("click", function () {
  modalTitleInput.value = profileEditTitle.textContent;
  modalDescriptionInput.value = profileEditDescription.textContent;

  openPopup(modalEditPopup);
});

cardAddButton.addEventListener("click", function () {
  openPopup(cardAddPopup);
});

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const titleValue = event.target.title.value;
  const descriptionValue = event.target.description.value;

  profileEditTitle.textContent = titleValue;
  profileEditDescription.textContent = descriptionValue;

  closePopup(modalEditPopup);
});

cardAddForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const cardData = { name: cardNameValue.value, link: cardLinkValue.value };

  renderCard(cardData);

  closePopup(cardAddPopup);

  cardAddForm.reset();
});

initialCards.forEach((cardData) => {
  renderCard(cardData);
});

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template");
  document.querySelector(".gallery__cards").prepend(card.getCardView());
}

const validationConfig = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_error",
  errorClass: "modal__error_visible",
};

const editFormElement = modalEditPopup.querySelector(".modal__container");
const cardFormElement = cardAddPopup.querySelector(".modal__container");

const editFormValidator = new FormValidator(validationConfig, editFormElement);
const cardFormValidator = new FormValidator(validationConfig, cardFormElement);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
