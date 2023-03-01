export default class Card {
  constructor({ cardData, handleCardClick }, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes;
    this._userId = cardData.userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.firstElementChild.cloneNode(true);
  }

  getCardView() {
    this._element = this._getTemplate();
    this._setEventListenersCard();
    const imageElement = this._element.querySelector(".card__image");
    const imageTitle = this._element.querySelector(".card__title");
    const imageLikes = this._element.querySelector(".card__like-counter");
    imageElement.src = this._link;
    imageElement.alt = `Photo of ${this._name}`;
    imageTitle.textContent = this._name;
    imageLikes.textContent = this._likes.length;

    return this._element;
  }

  _setEventListenersCard() {
    this._element
      .querySelector(".card__delete")
      .addEventListener("click", () => this._handleDeleteButton());

    this._element
      .querySelector(".card__button")
      .addEventListener("click", () => this._handleLikeButton());
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () =>
        this._handleCardClick({ name: this._name, link: this._link })
      );
  }

  _handleLikeButton() {
    this._element
      .querySelector(".card__button")
      .classList.toggle("card__heart_active");
  }

  _handleDeleteButton() {
    const popupConfirmPopup = document
      .querySelector("#confirm-delete-modal")
      .classList.add("modal_opened");

    //this._element.remove();
  }

  //create a function
  //loop through cards array for each card for card Id number that is in server
  //if that matches user id number then add trash bin class
  //else remove trash bin class
}
