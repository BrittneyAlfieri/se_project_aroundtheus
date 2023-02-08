export default class Card {
  constructor({ cardData, handleCardClick }, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document.querySelector(this._cardSelector).cloneNode(true).content;
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
      .addEventListener("click", () =>
        this._handleCardClick({ name: this._name, link: this._link })
      );
  }

  _handleLikeButton() {
    this._element.querySelector(".card__button").classList("card__heart_active")
      .toggle;
  }

  _handleDeleteButton = () => {
    this._element.remove;
  };
}
