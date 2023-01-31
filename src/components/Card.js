import { openPopup } from "../scripts/utils.js";
import { imagePopup } from "../scripts/constants.js";

class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  getCardView() {
    this._element = this._getTemplate();
    this._setEventListenersCard();
    const imageElement = this._element.querySelector(".card__image");
    imageElement.src = this._link;
    imageElement.alt = `Photo of ${this._name}`;
    this._element.querySelector(".card__title").textContent = this._name;

    return this._element;
  }

  _setEventListenersCard() {
    this._element
      .querySelector(".card__delete")
      .addEventListener("click", () => this._handleDeleteButton(this));

    this._element
      .querySelector(".card__button")
      .addEventListener("click", () => this._handleLikeButton(this));

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => this._handleImagePreview(this));
  }

  _handleLikeButton() {
    this._element
      .querySelector(".card__button")
      .classList.toggle("card__heart_active");
  }

  _handleDeleteButton = () => {
    this._element.remove();
  };
}

export default Card;
