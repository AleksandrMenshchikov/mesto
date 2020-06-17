export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate().querySelector(".elements__item");
    this._elementRemove = this._element.querySelector(".elements__remove");
    this._elementLike = this._element.querySelector(".elements__like");
    this._setEventListeners();
    this._element.querySelector(
      ".elements__item-title"
    ).textContent = this._name;
    this._element.querySelector(
      ".elements__image"
    ).style.backgroundImage = `url(${this._link})`;

    return this._element;
  }

  _deleteCard() {
    this._element.remove();
  }

  _toggleLike() {
    this._elementLike.classList.toggle("elements__like_active");
  }

  _setEventListeners() {
    this._elementRemove.addEventListener("click", () => {
      this._deleteCard();
    });
    this._elementLike.addEventListener("click", () => {
      this._toggleLike();
    });
  }
}
