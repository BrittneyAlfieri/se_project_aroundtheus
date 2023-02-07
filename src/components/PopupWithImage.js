import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(cardData) {
    console.log(cardData);
    const modalImageElement = this._element.querySelector(".modal__image");
    const modalImageTitle = this._element.querySelector(".modal__image-title");

    modalImageElement.src = cardData.link;
    modalImageElement.alt = `Photo of ${cardData.name}`;
    modalImageTitle.textContent = cardData.name;

    super.open();
  }
}
