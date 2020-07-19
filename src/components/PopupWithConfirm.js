import Popup from "./Popup.js";

import { selectors } from "../utils/utils.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._deleteCard = this._deleteCard.bind(this);
  }

  close() {
    super.close();
    this._button.removeEventListener("click", this._deleteCard);
  }

  _deleteCard() {
    this._handleApiData();
    this.close();
  }

  handleButton(handleApiData) {
    this._handleApiData = handleApiData;
    this._button = this._popup.querySelector(selectors.formInputButtonComfirm);
    this._button.addEventListener("click", this._deleteCard);
  }
}
