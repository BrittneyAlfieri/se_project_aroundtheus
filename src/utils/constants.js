const containerSelectors = {
  cardSection: ".gallery__cards",
  cardSelector: "#card-template",
  previewPopup: "#image-modal",
  profileEditForm: "#edit-modal",
  cardAddForm: "#add-card-modal",
  confirmPopup: "#confirm-delete-modal",
  avatarImageForm: "edit-avatar-image",
};

const profileEditOpen = document.querySelector(".profile__edit");
const profileForm = document.querySelector("#modal-profile-form");
const profileEditTitle = document.querySelector(".profile__title");
const profileAvatar = document.querySelector(".profile__avatar");
const profileEditDescription = document.querySelector(".profile__subtitle");
const modalEditPopup = document.querySelector("#edit-modal");

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
  modalDescriptionInput,
  popups,
  cardAddPopup,
  cardAddButton,
  cardAddForm,
  imagePopup,
  cardNameValue,
  cardLinkValue,
  containerSelectors,
  profileAvatar,
};
