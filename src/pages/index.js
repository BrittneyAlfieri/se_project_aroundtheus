import "../pages/index.css";
import {
  containerSelectors,
  profileEditOpen,
  cardAddButton,
  profileAvatar,
} from "../utils/constants";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo";
import FormValidator from "../scripts/FormValidator";
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";

const api = new Api({
  baseurl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "4bdff29d-c843-4001-843a-f9e5eda05fad",
    "Content-Type": "application/json",
  },
});

const nameSelector = ".profile__title";
const aboutSelector = ".profile__subtitle";

const userInfo = new UserInfo({ nameSelector, aboutSelector });

const popupConfirm = new PopupWithConfirm(containerSelectors.confirmPopup);

popupConfirm.setEventListeners();

const profileForm = new PopupWithForm(
  containerSelectors.profileEditForm,
  (values) => {
    api.patchProfileData(values).then((data) => {
      userInfo.setUserInfo(data);
    });

    profileForm.close();
  }
);

const cardForm = new PopupWithForm(containerSelectors.cardAddForm, (values) => {
  api.addNewCard(values).then((data) => {
    renderCard(data);
  });
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

let userId;

const renderCard = (cardData) => {
  const cardEl = new Card(
    {
      cardData,
      userId: userId,
      handleCardClick: (imageData) => {
        cardPreview.open(imageData);
      },
      handleDeleteClick: (cardId) => {
        popupConfirm.open();
        popupConfirm.setSubmitAction(() => {
          api.deleteCard(cardId).then(() => {
            popupConfirm.close();
            cardEl.removeCard();
          });
        });
      },
      handleLikeClick: (userId, cardLikeId) => {
        if (this._likes !== this._userId) {
          api.addCardLike(userId, cardLikeId).then(() => {
            addLike();
          });
        }
      },
      //call this handleLikeClick:
      // pass cardId, to handleLikeClick and api.AddCardLike
      // write a statement that if the user id doesnt match card likes id call api.addCardLike & addLike function
      // write statement that if the user id does match one of the card likes ids call api.removeCardLike & removeLike function
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
cardForm.setEventListeners();

profileEditOpen.addEventListener("click", () => {
  const user = userInfo.getUserInfo();
  const nameFormInput = document.querySelector("#profile-name");
  const aboutFormInput = document.querySelector("#profile-description");

  nameFormInput.value = user.name;
  aboutFormInput.value = user.about;

  profileForm.open();
});

cardAddButton.addEventListener("click", () => {
  cardFormValidator.disableButton();
  cardForm.open();
});

profileAvatar.addEventListener("mouseover", (event) => {
  if (event.target === "mouseover") {
    profileAvatar.classList.add(".profile__avatar_edit");
  } else {
    profileAvatar.classList.remove(".profile__avatar_edit");
  }
});

api.getAppInfo().then(([cards, userData]) => {
  userId = userData._id;
  containerSelector.renderItems(cards), userInfo.setUserInfo(userData);
});
