import { selectors, classes } from "../utils/utils.js";

export default class Card {
  constructor(
    data,
    templateSelector,
    { handleCardClick, handleButtonRemove, handleButtonLike }
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardClick = this._handleCardClick.bind(this);
    this._handleButtonRemove = handleButtonRemove;
    this._handleButtonRemove = this._handleButtonRemove.bind(this);
    this._handleButtonLike = handleButtonLike;
    this._handleButtonLike = this._handleButtonLike.bind(this);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.cloneNode(true)
      .querySelector(selectors.elementsItem);

    return cardElement;
  }

  generateCard(id) {
    this._element = this._getTemplate();
    this._elementLikeCounter = this._element.querySelector(
      selectors.elementsLikeCounter
    );
    this._elementLikeMessage = this._element.querySelector(
      selectors.elementsLikeMessage
    );
    this._elementRemove = this._element.querySelector(selectors.elementsRemove);
    if (id === "668ea0a7f8f07344312fc2a6") {
      this._elementRemove.classList.add("elements__remove_active");
    }
    this._elementLike = this._element.querySelector(selectors.elementsLike);
    this._setColorLike("668ea0a7f8f07344312fc2a6", this._likes);
    this._elementImage = this._element.querySelector(selectors.elementsImage);
    this._setEventListeners();
    this._element.querySelector(
      selectors.elementsItemTitle
    ).textContent = this._name;
    this._element.querySelector(
      selectors.elementsImage
    ).style.backgroundImage = `url(${this._link})`;

    return this._element;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
    this._removeEventListeners();
  }

  _removeEventListeners() {
    this._elementLike.removeEventListener("click", this._handleButtonLike);
    this._elementRemove.removeEventListener("click", this._handleButtonRemove);
    this._elementImage.removeEventListener("click", this._handleCardClick);
  }

  toggleLike() {
    this._elementLike.classList.toggle(classes.elementsLikeActive);
  }

  _setColorLike(userId, arrLikes) {
    arrLikes.forEach((element) => {
      element._id === userId
        ? this._elementLike.classList.add("elements__like_active")
        : null;
    });
  }

  setLikes(arrLikes) {
    this._elementLikeCounter.textContent = arrLikes.length;
    this._elementLikeCounter.dataset.people = arrLikes
      .reduce((acc, item) => {
        acc.push(item.name);
        return acc;
      }, [])
      .join(", ");
    arrLikes.length > 0
      ? (this._elementLikeMessage.textContent =
          "Нравится: " + this._elementLikeCounter.dataset.people)
      : (this._elementLikeMessage.textContent =
          "Это место пока никто не оценил...😒");
  }

  getElementLike() {
    return this._elementLike;
  }

  _setEventListeners() {
    this._elementLike.addEventListener("click", this._handleButtonLike);
    this._elementRemove.addEventListener("click", this._handleButtonRemove);
    this._elementImage.addEventListener("click", this._handleCardClick);
  }
}
