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
    userInfo.setUserInfo(values);
    profileForm.close();
  }
);

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
cardPreview.open();
profileForm.setEventListeners();
userInfo.setUserInfo(newUserInfo);

profileEditOpen.addEventListener("click", function () {
  profileForm.open();
});

cardAddButton.addEventListener("click", function () {
  profileForm.open();
});
