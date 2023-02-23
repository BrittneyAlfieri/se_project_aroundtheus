import "../pages/index.css";
import {
  initialCards,
  containerSelectors,
  profileEditOpen,
  cardAddButton,
} from "../utils/constants";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo";
import FormValidator from "../scripts/FormValidator";
import Api from "../components/Api.js";

const api = new Api({
  baseurl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "4bdff29d-c843-4001-843a-f9e5eda05fad",
    "Content-Type": "application/json",
  },
});

api.getInfo();

const nameSelector = ".profile__title";
const jobSelector = ".profile__subtitle";

const userInfo = new UserInfo({ nameSelector, jobSelector });

const profileForm = new PopupWithForm(
  containerSelectors.profileEditForm,
  (values) => {
    userInfo.setUserInfo(values);
    profileForm.close();
  }
);

const cardForm = new PopupWithForm(containerSelectors.cardAddForm, (values) => {
  renderCard(values);
  cardForm.close();
});

const validationConfig = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_error",
  errorClass: "modal__error_visible",
};
const editFormElement = document.querySelector("#modal-profile-form");
const cardFormElement = document.querySelector("#add-card-form");

const editFormValidator = new FormValidator(validationConfig, editFormElement);
const cardFormValidator = new FormValidator(validationConfig, cardFormElement);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

const cardPreview = new PopupWithImage(containerSelectors.previewPopup);
cardPreview.setEventListeners();

const renderCard = (cardData) => {
  const cardEl = new Card(
    {
      cardData,
      handleCardClick: (imageData) => {
        cardPreview.open(imageData);
      },
    },
    containerSelectors.cardSelector
  );
  containerSelector.addItem(cardEl.getCardView());
};

const containerSelector = new Section(
  {
    renderer: renderCard,
  },
  containerSelectors.cardSection
);

profileForm.setEventListeners();
containerSelector.renderItems(initialCards);
cardForm.setEventListeners();

profileEditOpen.addEventListener("click", () => {
  const user = userInfo.getUserInfo();
  const nameFormInput = document.querySelector("#profile-name");
  const jobFormInput = document.querySelector("#profile-description");

  nameFormInput.value = user.name;
  jobFormInput.value = user.job;

  profileForm.open();
});

cardAddButton.addEventListener("click", () => {
  cardFormValidator.disableButton();
  cardForm.open();
});
