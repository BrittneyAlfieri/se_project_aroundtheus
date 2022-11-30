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

const modalEditOpen = document.querySelector(".profile__edit");
const modalEditPopup = document.querySelector("#edit-modal");
const modalEditClose = modalEditPopup.querySelector(".modal__close");
const modalForm = document.querySelector("#modal-form");
const modalEditTitle = document.querySelector(".profile__title");
const modalEditDescription = document.querySelector(".profile__subtitle");
const modalTitleInput = modalForm.querySelector(".modal__name");
const modalDescriptionInput = modalForm.querySelector(".modal__description");

const cardAddPopup = document.querySelector("#add-card-modal");
const cardAddButton = document.querySelector(".profile__add");
const cardAddCloseButton = cardAddPopup.querySelector(".modal__close");

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
}

modalEditOpen.addEventListener("click", function () {
  modalTitleInput.value = modalEditTitle.textContent;
  modalDescriptionInput.value = modalEditDescription.textContent;

  openPopup(modalEditPopup);
});

modalEditClose.addEventListener("click", function () {
  closePopup(modalEditPopup);
});

cardAddButton.addEventListener("click", function () {
  openPopup(cardAddPopup);
});

cardAddCloseButton.addEventListener("click", function () {
  closePopup(cardAddPopup);
});

modalForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const titleValue = event.target.title.value;
  const descriptionValue = event.target.description.value;

  modalEditTitle.textContent = titleValue;
  modalEditDescription.textContent = descriptionValue;

  closePopup(modalEditPopup);
});

const cardGallery = document.querySelector(".gallery__cards");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

initialCards.forEach(function (cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardGallery.appendChild(cardElement);
});
