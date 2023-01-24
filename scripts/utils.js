export function closePopup() {
  document.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeByEscape);
}

export function openPopup() {
  document.classList.add("modal_opened");
  document.addEventListener("keydown", closeByEscape);
}

export function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".modal_opened");
    closePopup(openedPopup);
  }
}
