export default class Card {
  constructor({ cardData, handleCardClick }, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector);
    cardElement.clonenode(true);
    cardElement.content(".card");

    return cardElement;
  }

  getCardView() {
    this._element = this._getTemplate();
    this._setEventListenersCard();
    const imageElement = this._element.querySelector(".card__image");
    imageElement.src = cardData.link;
    imageElement.alt = `Photo of ${cardData._name}`;
    this._element.querySelector(".card__title").textContent = cardData.name;

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
      .addEventListener("click", () =>
        this._handleCardClick({ name: this._text, src: this._link })
      );
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
