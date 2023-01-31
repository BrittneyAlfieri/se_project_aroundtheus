import { imagePopup } from "../scripts/constants";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({ link, name }) {
    const modalImageElement = document.querySelector(".modal__image");
    modalImageElement.src = this.link;
    modalImageElement.alt = `Photo of ${this.name}`;
    document.querySelector(".modal__image-title").textContent = this.name;
    super.open();
  }
}
