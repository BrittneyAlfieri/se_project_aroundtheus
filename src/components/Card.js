export default class Card {
  constructor(
    { cardData, userId, handleCardClick, handleDeleteClick, handleLikeClick },
    cardSelector
  ) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._id = cardData._id;
    this._likes = cardData.likes;
    this._userId = userId;
    this._userCardId = cardData["owner"]._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
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

  removeCard() {
    this._element.remove();
  }

  isLiked() {
    //1.loop over the array of likes
    //2. if the current like object has an ID that equals this._userId, then return true
    // else
    // remove the filled in heart
    this._likes.forEach((like) => {
      console.log(this._likes);
      if (like._id === this._userId) {
        console.log(this._userId);
        return true;
      } else {
        return false;
      }
    });
  }

  setLikesInfo(data) {
    //update this._likes with the new likes array

    this._setLikesAppearance();
  }

  _setLikesAppearance() {
    //update likes counter
    if (isLiked === true) {
      this._element
        .querySelector(".card__button")
        .classList.add("card__heart_active");
    } else {
      this._element
        .querySelector(".card__button")
        .classList.remove("card__heart_active");
    }
  }
}
