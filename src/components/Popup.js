const selectors = {
  popupSelector: "pop-up-opened",
};

const classes = {
  formInputButton: ".form__input-button",
};

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._buttonForm = this._popup.querySelector(classes.formInputButton);
    this._popup.classList.add(selectors.popupSelector);
    this._popup.addEventListener("click", (e) =>
      e.target === this._popup ? this.close() : null
    );
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(selectors.popupSelector);
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(e) {
    e.key === "Escape" ? this.close() : null;
  }

  handleButtonForm(textForButton) {
    const buttonForm = this._popup.querySelector(classes.formInputButton);
    buttonForm.textContent = textForButton;
  }

  setEventListeners(popupCloseIconSelector) {
    this._popupCloseIcon = this._popup.querySelector(popupCloseIconSelector);
    this._popupCloseIcon.addEventListener("click", () => this.close());
  }
}
