const selectors = {
  elementsItem: ".elements__item",
  elementsRemove: ".elements__remove",
  elementsLike: ".elements__like",
  elementsImage: ".elements__image",
  elementsItemTitle: ".elements__item-title",
  elementsLikeCounter: ".elements__like-counter",
};

const classes = {
  elementsLikeActive: "elements__like_active",
};

export default class Card {
  constructor(
    data,
    templateSelector,
    { handleCardClick, handleButtonRemove, handleButtonLike }
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data.id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleButtonRemove = handleButtonRemove;
    this._handleButtonLike = handleButtonLike;
  }

  getCardId() {
    return this._id;
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
    this._elementRemove = this._element.querySelector(selectors.elementsRemove);
    if (id === "668ea0a7f8f07344312fc2a6") {
      this.addButtonRemove();
    }
    this._elementLike = this._element.querySelector(selectors.elementsLike);
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

  addButtonRemove() {
    this._elementRemove.classList.add("elements__remove_active");
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _toggleLike() {
    this._elementLike.classList.toggle(classes.elementsLikeActive);
  }

  setColorLike(userId, arrLikes) {
    arrLikes.forEach((element) => {
      element._id === userId
        ? this._elementLike.classList.add("elements__like_active")
        : null;
    });
  }

  setLikes(arrLikes) {
    this._elementLikeCounter.textContent = arrLikes.length;
  }

  getElementLike() {
    return this._elementLike;
  }

  _setEventListeners() {
    this._elementLike.addEventListener("click", () => this._handleButtonLike());
    this._elementRemove.addEventListener("click", (e) =>
      this._handleButtonRemove(e)
    );
    this._elementLike.addEventListener("click", () => this._toggleLike());
    this._elementImage.addEventListener("click", () => this._handleCardClick());
  }
}
