import { initialCards } from "../scripts/constants";
import Popup from "../components/Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open() {
    const modalImageElement = document.querySelector(".modal__image");
    modalImageElement.src = this.link;
    modalImageElement.alt = `Photo of ${this.name}`;
    document.querySelector(".modal__image-title").textContent = this.name;
    super.open();
  }
}
