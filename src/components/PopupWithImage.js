import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._modalImageElement = document.querySelector(".modal__image");

    this._modalImageTitle = document.querySelector(".modal__image-title");
  }

  open({ cardData }) {
    this._modalImageElement.src = cardData.link;
    this._modalImageElement.alt = `Photo of ${cardData.name}`;
    this._modalImageTitle.textContent = cardData.name;

    super.open();
  }
}
