import "../pages/index.css";
import { initialCards, containerSelectors } from "../utils/constants";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo";

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
            cardPreview.open(imageData);
          },
        },
        containerSelectors.cardSelector
      );
      containerSelector.additem(cardEl.getCardView());
    },
  },
  containerSelectors.cardSection
);

containerSelector.renderItems(initialCards);
cardPreview.setEventListeners();
profileForm.setEventListeners();

const newUserInfo = {
  name: "",
  job: "",
};
const userName = document.querySelector(".profile__title");
const userJob = document.querySelector(".profile__subtitle");

userInfo.setUserInfo(newUserInfo);

profileEditOpen.addEventListener("click", function (event) {
  const titleValue = event.target.title.value;
  const descriptionValue = event.target.description.value;

  profileEditTitle.textContent = titleValue;
  profileEditDescription.textContent = descriptionValue;

  this.open();
});

cardAddButton.addEventListener("click", function () {
  this.open();
});
