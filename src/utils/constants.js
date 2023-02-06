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

const containerSelectors = {
  cardSection: ".gallery__cards",
  cardSelector: "card-template",
  previewPopup: "image-modal",
  profileEditForm: "#edit-modal",
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
  initialCards,
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
