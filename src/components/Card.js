export default class Card {
  constructor(
    { cardData, userId, handleCardClick, handleDeleteClick },
    cardSelector
  ) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._id = cardData._id;
    this._likes = cardData.likes;
    console.log(this._likes);
    this._userId = userId;
    this._userCardId = cardData["owner"]._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
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

    if (this._userCardId === this._userId) {
      this._element
        .querySelector(".card__delete")
        .classList.add("card__delete_visible");
    } else {
      this._element
        .querySelector(".card__delete")
        .classList.remove("card__delete_visible");
    }

    return this._element;
  }

  _setEventListenersCard() {
    this._element
      .querySelector(".card__delete")
      .addEventListener("click", () => this._handleDeleteClick(this._id));

    this._element
      .querySelector(".card__button")
      .addEventListener("click", () => this._handleLikeClick());
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () =>
        this._handleCardClick({ name: this._name, link: this._link })
      );
  }

  // _handleLikeButton() {
  //   this._element
  //     .querySelector(".card__button")
  //     .classList.toggle("card__heart_active");
  // }

  addLike() {
    if (this._likes !== this._userId) {
      this._element
        .querySelector(".card__button")
        .classList.add("card__heart_active");
    }
  }

  removeLike() {
    if (this._likes === this._userId) {
      this._element
        .querySelector(".card__button")
        .classList.remove("card__heart_active");
    }
  }

  removeCard() {
    this._element.remove();
  }
}
