export function closePopup(modal) {
  modal.classList.remove("modal_opened");
  modal.removeEventListener("keydown", closeByEscape);
}

export function openPopup(modal) {
  modal.classList.add("modal_opened");
  modal.addEventListener("keydown", closeByEscape);
}

export function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".modal_opened");
    closePopup(openedPopup);
  }
}
