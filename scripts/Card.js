export default class Card {
  constructor(data, templateSelector, { handleCardClick }) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.cloneNode(true)
      .querySelector(".elements__item");

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementRemove = this._element.querySelector(".elements__remove");
    this._elementLike = this._element.querySelector(".elements__like");
    this._elementImage = this._element.querySelector(".elements__image");
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
    this._element = null;
  }

  _toggleLike() {
    this._elementLike.classList.toggle("elements__like_active");
  }

  _setEventListeners() {
    this._elementRemove.addEventListener("click", () => this._deleteCard());
    this._elementLike.addEventListener("click", () => this._toggleLike());
    this._elementImage.addEventListener("click", () => this._handleCardClick());
  }
}
