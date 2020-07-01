import "../pages/index.css";
import { initialCards } from "./initialCards.js";
import { data } from "./utils.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

const userInfo = new UserInfo(".profile__title", ".profile__subtitle");

const formProfile = new PopupWithForm(".pop-up_profile", {
  handleFormSubmit: (dataForm) => {
    userInfo.setUserInfo(dataForm["input-name"], dataForm["input-profession"]);
  },
});
formProfile.setEventListeners(".pop-up__close-icon");

const formCard = new PopupWithForm(".pop-up_card", {
  handleFormSubmit: (dataForm) => {
    const { "input-name-card": name, "input-link-card": link } = dataForm;
    const item = {};
    item.name = name;
    item.link = link;
    const card = new Card(item, "#card", {
      handleCardClick: () => {
        const popupWithImage = new PopupWithImage(".pop-up-image");
        popupWithImage.open(item.link, item.name);
        popupWithImage.setEventListeners(".pop-up-image__close-icon");
      },
    });
    const cardElement = card.generateCard();
    document.querySelector(".elements__list").prepend(cardElement);
  },
});
formCard.setEventListeners(".pop-up__close-icon");

document
  .querySelector(".profile__edit-button")
  .addEventListener("click", () => {
    formProfile.open();
    formProfile.setInputValues(
      userInfo.getUserInfo().user,
      userInfo.getUserInfo().about
    );
    const formValidator = new FormValidator(data, ".form_profile");
    formValidator.enableValidation();
  });

document.querySelector(".profile__add-button").addEventListener("click", () => {
  formCard.open();
  const formValidator = new FormValidator(data, ".form_card");
  formValidator.enableValidation();
});

const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#card", {
        handleCardClick: () => {
          const popupWithImage = new PopupWithImage(".pop-up-image");
          popupWithImage.open(item.link, item.name);
          popupWithImage.setEventListeners(".pop-up-image__close-icon");
        },
      });
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  ".elements__list"
);

cardList.renderItems();
