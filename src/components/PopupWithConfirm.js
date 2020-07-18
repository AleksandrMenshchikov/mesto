import Popup from "./Popup.js";

import { selectors } from "../utils/utils.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  handleButton(element, deleteCard) {
    const button = this._popup.querySelector(selectors.formInputButtonComfirm);
    button.addEventListener("click", (e) => {
      e.preventDefault();
      deleteCard();
      this.close();
    });
  }
}
