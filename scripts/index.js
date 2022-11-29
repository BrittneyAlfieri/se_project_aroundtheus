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

function getCardElement(data) {
  const cardElement = query.Selector("#card-template").cloneNode(true);

  cardElement.querySelector(".card__info");

  const cardTitle = document.querySelector(".card__title");
  const cardImage = document.querySelector(".card__image");
}

const modalEditOpen = document.querySelector(".profile__edit");
const modalEditPopup = document.querySelector(".modal");
const modalEditClose = document.querySelector(".modal__close");
const modalForm = document.querySelector("#modal-form");
const modalEditTitle = document.querySelector(".profile__title");
const modalEditDescription = document.querySelector(".profile__subtitle");

const modalTitleInput = modalForm.querySelector(".modal__name");
const modalDescriptionInput = modalForm.querySelector(".modal__description");

function closePopup() {
  modalEditPopup.classList.remove("modal_opened");
}

modalEditClose.addEventListener("click", closePopup);

function openPopup() {
  modalEditPopup.classList.add("modal_opened");
}

modalEditOpen.addEventListener("click", function () {
  modalTitleInput.value = modalEditTitle.textContent;
  modalDescriptionInput.value = modalEditDescription.textContent;

  openPopup();
});

modalForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const titleValue = event.target.title.value;
  const descriptionValue = event.target.description.value;

  modalEditTitle.textContent = titleValue;
  modalEditDescription.textContent = descriptionValue;

  closePopup();
});
