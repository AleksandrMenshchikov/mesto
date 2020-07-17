import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  handleButton(element, cb) {
    const button = this._popup.querySelector(".form__input-button_comfirm");
    button.addEventListener("click", (e) => {
      e.preventDefault();
      element.remove();
      cb();
      this.close();
    });
  }
}
