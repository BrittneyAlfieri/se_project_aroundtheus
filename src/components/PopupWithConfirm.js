class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  _getEventListeners() {
    super.setEventlisteners();

    this._element
      .querySelector(".modal__delete-confirm")
      .addEventListener("click", (event) => {
        event.preventDefault();
      });
  }
}
