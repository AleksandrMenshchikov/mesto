import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(imageURL, description) {
    super.open();
    const popupImageImg = this._popup.querySelector(".pop-up-image__img");
    popupImageImg.src = imageURL;
    const popupImageDescription = this._popup.querySelector(
      ".pop-up-image__description"
    );
    popupImageDescription.textContent = description;
  }
}
