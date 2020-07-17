import Popup from "./Popup.js";

const selectors = {
  formInput: ".form__input",
  formInputError: ".form__input-error",
  form: ".form",
  profileAvatar: ".profile__avatar",
};

const classes = {
  formInputTypeError: "form__input_type_error",
};

export default class PopupWithAvatar extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValue() {
    const input = this._popup.querySelector(selectors.formInput);

    return input.value;
  }

  setAvatar(link) {
    const img = document.querySelector(selectors.profileAvatar);
    img.src = link;
  }

  close() {
    super.close();
    this._formElement.reset();
    this._formElement.querySelector(selectors.formInputError).textContent = "";
    this._formElement
      .querySelector(selectors.formInput)
      .classList.remove(classes.formInputTypeError);
  }

  setEventListeners(popupCloseIconSelector) {
    super.setEventListeners(popupCloseIconSelector);
    this._formElement = this._popup.querySelector(selectors.form);
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValue());
    });
  }
}
