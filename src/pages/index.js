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

const newUserInfo = {
  name: "",
  job: "",
};
const userName = document.querySelector(".profile__title");
const userJob = document.querySelector(".profile__subtitle");

const userInfo = new UserInfo(userName, userJob);

const profileForm = new PopupWithForm(
  containerSelectors.profileEditForm,
  (values) => {
    userInfo.getUserInfo(values);
    profileForm.close();
  }
);

const cardForm = new PopupWithForm(containerSelectors.cardAddForm, () => {
  cardForm.close();
});

const validationConfig = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(validationConfig, profileForm);
const cardFormValidator = new FormValidator(validationConfig, cardForm);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

const cardPreview = new PopupWithImage(containerSelectors.previewPopup);
const containerSelector = new Section(
  {
    renderer: (cardData) => {
      const cardEl = new Card(
        {
          cardData,
          handleCardClick: (imageData) => {
            console.log(imageData);
            cardPreview.open(imageData);
          },
        },
        containerSelectors.cardSelector
      );

      containerSelector.addItem(cardEl.getCardView());
    },
  },
  containerSelectors.cardSection
);

containerSelector.renderItems(initialCards);

cardForm.setEventListeners();
userInfo.setUserInfo(newUserInfo);
profileForm.setEventListeners();

profileEditOpen.addEventListener("click", function () {
  profileForm.open();
});

cardAddButton.addEventListener("click", function () {
  cardForm.open();
});
