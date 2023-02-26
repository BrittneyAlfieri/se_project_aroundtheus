const containerSelectors = {
  cardSection: ".gallery__cards",
  cardSelector: "#card-template",
  previewPopup: "#image-modal",
  profileEditForm: "#edit-modal",
  cardAddForm: "#add-card-modal",
};

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

const cardAddPopup = document.querySelector("#add-card-modal");
const cardAddButton = document.querySelector("#add-button");
const imagePopup = document.querySelector("#image-modal");
const cardAddForm = document.querySelector("#add-card-form");
const cardNameValue = cardAddPopup.querySelector(".modal__input_name");
const cardLinkValue = cardAddPopup.querySelector(".modal__input_description");

export {
  profileEditOpen,
  profileForm,
  profileEditTitle,
  profileEditDescription,
  modalEditPopup,
  modalTitleInput,
  modalDescriptionInput,
  popups,
  cardAddPopup,
  cardAddButton,
  cardAddForm,
  imagePopup,
  cardNameValue,
  cardLinkValue,
  containerSelectors,
};
