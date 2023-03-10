import "../pages/index.css";
import {
  containerSelectors,
  profileEditOpen,
  cardAddButton,
  profileAvatar,
  avatarSelector,
  aboutSelector,
  nameSelector,
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

const userInfo = new UserInfo({ nameSelector, aboutSelector, avatarSelector });

const avatarEditForm = new PopupWithForm(
  containerSelectors.avatarImageForm,
  (values) => {
    avatarEditForm.setLoading(true);
    api
      .patchProfileImage(values.link)
      .then((data) => {
        userInfo.setUserInfo(data);
        avatarEditForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        avatarEditForm.setLoading(false, "Save");
      });
  }
);

const popupConfirm = new PopupWithConfirm(containerSelectors.confirmPopup);

popupConfirm.setEventListeners();

const profileForm = new PopupWithForm(
  containerSelectors.profileEditForm,
  (values) => {
    profileForm.setLoading(true);
    api
      .patchProfileData(values)
      .then((data) => {
        userInfo.setUserInfo(data);
        profileForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        profileForm.setLoading(false, "Save");
      });
  }
);

const cardForm = new PopupWithForm(containerSelectors.cardAddForm, (values) => {
  cardForm.setLoading(true);
  api
    .addNewCard(values)
    .then((data) => {
      renderCard(data);
      cardForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      cardForm.setLoading(false, "Create");
    });
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
const avatarFormElement = document.querySelector("#edit-avatar-image");

const editFormValidator = new FormValidator(validationConfig, editFormElement);
const cardFormValidator = new FormValidator(validationConfig, cardFormElement);
const avatarFormValidator = new FormValidator(
  validationConfig,
  avatarFormElement
);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

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
          api
            .deleteCard(cardId)
            .then(() => {
              popupConfirm.close();
              cardEl.removeCard();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      },
      handleLikeClick: (cardId) => {
        if (cardEl.isLiked()) {
          api
            .removeCardLike(cardId)
            .then((data) => {
              cardEl.setLikesInfo(data.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api
            .addCardLike(cardId)
            .then((data) => {
              cardEl.setLikesInfo(data.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        }
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
cardForm.setEventListeners();
avatarEditForm.setEventListeners();

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

profileAvatar.addEventListener("click", () => {
  avatarFormValidator.disableButton();
  avatarEditForm.open();
});

api.getAppInfo().then(([cards, userData]) => {
  userId = userData._id;
  containerSelector.renderItems(cards), userInfo.setUserInfo(userData);
});
