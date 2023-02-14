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

const { nameSelector } = document.querySelector(".profile__title");
const { jobSelector } = document.querySelector(".profile__subtitle");

const userInfo = new UserInfo({ nameSelector, jobSelector });

const profileForm = new PopupWithForm(
  containerSelectors.profileEditForm,
  (values) => {
    userInfo.setUserInfo(values);
    profileForm.close();
  }
);

const cardForm = new PopupWithForm(containerSelectors.cardAddForm, () => {
  cardForm.renderCard();
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
};

const containerSelector = new Section(
  {
    renderer: renderCard,

    handleFormSubmit: (item) => {
      renderCard(item);
    },
  },
  containerSelectors.cardSection
);

profileForm.setEventListeners();
containerSelector.renderItems(initialCards);
cardForm.setEventListeners();

profileEditOpen.addEventListener("click", function () {
  userInfo.getUserInfo();
  profileForm.open();
});

cardAddButton.addEventListener("click", function () {
  cardForm.open();
});
