import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  setInputValues(userInfo, about) {
    const formInputName = this._formElement.querySelector(".form__input_name");
    const formInputProfession = this._formElement.querySelector(
      ".form__input_profession"
    );
    formInputName.value = userInfo;
    formInputProfession.value = about;
  }

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll(".form__input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  close() {
    super.close();
    this._formElement.reset();
    this._formElement.querySelector(".form__input-button").disabled = "true";
    this._formElement.querySelectorAll(".form__input-error").forEach((item) => {
      item.textContent = "";
    });
    this._formElement.querySelectorAll(".form__input").forEach((item) => {
      item.classList.remove("form__input_type_error");
    });
  }

  setEventListeners(popupCloseIconSelector) {
    super.setEventListeners(popupCloseIconSelector);
    this._formElement = this._popup.querySelector(".form");
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
}
