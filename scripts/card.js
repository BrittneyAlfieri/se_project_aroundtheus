class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;

    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();
    this._setEventlisteners();

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;
  }

  _setEventListeners() {
    cardHeartButton.addEventListener("click", _handleLikeButton(this));
    cardDeleteButton.addEventListener("click", _handleDeleteButton(this));
    cardImage.addEventListener("click", _handleImagePreview(this));
  }

  _handleLikeButton() {
    const cardHeartButton = cardElement.querySelector(".card__button");
    cardHeartButton.addEventListener("click", () => {
      cardHeartButton.classList.toggle("card__heart_active");
    });
  }

  _handleDeleteButton() {
    const cardDeleteButton = cardElement.querySelector(".card__delete");
    cardDeleteButton.addEventListener("click", function () {
      const cardItem = cardDeleteButton.closest(".card");
      cardItem.remove();
    });
  }

  _handleImagePreview() {
    cardImage.addEventListener("click", function () {
      openPopup(imagePopup);
      const imageElement = document.querySelector(".modal__image");
      const imageTitle = document.querySelector(".modal__image-title");
      imageElement.src = cardData.link;
      imageElement.alt = cardData.name;
      imageTitle.textContent = cardData.name;
    });
  }

  _renderCard(cardData, cardSelector) {
    const card = new Card(cardData, cardSelector);
    container.prepend(card.getView());
  }
}

export default Card;
