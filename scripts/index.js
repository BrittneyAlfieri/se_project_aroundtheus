import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { closePopup, openPopup, closeByEscape } from "./utils.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80",
  },
  {
    name: "Lake Louise",
    link: "https://images.unsplash.com/photo-1553545616-b592535aa4cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Bald Mountains",
    link: "https://images.unsplash.com/photo-1631745818498-579a5463598c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },
  {
    name: "Latemar",
    link: "https://images.unsplash.com/photo-1518733262568-b51ef2fac5b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    name: "Vanoise National Park",
    link: "https://images.unsplash.com/photo-1601809774049-90a98e3a10c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  },
  {
    name: "Lago Di Braies",
    link: "https://images.unsplash.com/photo-1601893920895-e3ed4a655d27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
];

const profileEditOpen = document.querySelector(".profile__edit");
const profileForm = document.querySelector("#modal-profile-form");
const profileEditTitle = document.querySelector(".profile__title");
const profileEditDescription = document.querySelector(".profile__subtitle");
const modalEditPopup = document.querySelector("#edit-modal");
const modalTitleInput = profileForm.querySelector(".modal__input_name");
const modalDescriptionInput = profileForm.querySelector(
  ".modal__input_description"
);
const popups = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".modal__close");

const cardAddPopup = document.querySelector("#add-card-modal");
const cardAddButton = document.querySelector("#add-button");
const imagePopup = document.querySelector("#image-modal");
const cardAddForm = document.querySelector("#add-card-form");

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
