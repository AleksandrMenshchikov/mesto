import { selectors, classes } from "../utils/utils.js";

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  open() {
    this._popup.classList.add(classes.popUpOpened);
    this._popup.addEventListener("click", this._handleOverlayClose);
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(classes.popUpOpened);
    document.removeEventListener("keyup", this._handleEscClose);
    this._popup.removeEventListener("click", this._handleOverlayClose);
  }

  _handleOverlayClose(e) {
    e.target === this._popup ? this.close() : null;
  }

  _handleEscClose(e) {
    e.key === "Escape" ? this.close() : null;
  }

  handleButtonForm(textForButton) {
    const buttonForm = this._popup.querySelector(selectors.formInputButton);
    buttonForm.textContent = textForButton;
  }

  setEventListeners(popupCloseIconSelector) {
    this._popupCloseIcon = this._popup.querySelector(popupCloseIconSelector);
    this._popupCloseIcon.addEventListener("click", () => this.close());
  }
}
