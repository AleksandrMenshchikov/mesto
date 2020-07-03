import "./index.css";
import { initialCards } from "../utils/initialCards.js";
import { data, profileEditButton, profileAddButton } from "../utils/utils.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const selectors = {
  formProfile: ".form_profile",
  formCard: ".form_card",
  profileTitle: ".profile__title",
  profileSubtitle: ".profile__subtitle",
  popUpImage: ".pop-up-image",
  popUpProfile: ".pop-up_profile",
  popUpCloseIcon: ".pop-up__close-icon",
  popUpCard: ".pop-up_card",
  card: "#card",
  popUpImageCloseIcon: ".pop-up-image__close-icon",
  elementsList: ".elements__list",
};

const formValidatorProfile = new FormValidator(data, selectors.formProfile);
formValidatorProfile.enableValidation();

const formValidatorCard = new FormValidator(data, selectors.formCard);
formValidatorCard.enableValidation();

const userInfo = new UserInfo(selectors.profileTitle, selectors.profileSubtitle);

const popupWithImage = new PopupWithImage(selectors.popUpImage);

const formProfile = new PopupWithForm(selectors.popUpProfile, {
  handleFormSubmit: (dataForm) => userInfo.setUserInfo(dataForm["input-name"], dataForm["input-profession"]),
  handleButtonForm: () => formValidatorProfile.setButtonDisabled(),
});
formProfile.setEventListeners(selectors.popUpCloseIcon);

const formCard = new PopupWithForm(selectors.popUpCard, {
  handleFormSubmit: (dataForm) => {
    const { "input-name-card": name, "input-link-card": link } = dataForm;
    const item = {};
    item.name = name;
    item.link = link;
    const card = new Card(item, selectors.card, {
      handleCardClick: () => {
        popupWithImage.open(item.link, item.name);
        popupWithImage.setEventListeners(selectors.popUpImageCloseIcon);
      },
    });
    const cardElement = card.generateCard();
    cardList.prependItem(cardElement);
  },
  handleButtonForm: () => formValidatorCard.setButtonDisabled(),
});
formCard.setEventListeners(selectors.popUpCloseIcon);

const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, selectors.card, {
        handleCardClick: () => {
          popupWithImage.open(item.link, item.name);
          popupWithImage.setEventListeners(selectors.popUpImageCloseIcon);
        },
      });
      const cardElement = card.generateCard();
      cardList.appendItem(cardElement);
    },
  },
  selectors.elementsList
);

cardList.renderItems();

profileEditButton.addEventListener("click", () => {
  formProfile.open();
  formProfile.setInputValues(userInfo.getUserInfo().user, userInfo.getUserInfo().about);
});

profileAddButton.addEventListener("click", () => formCard.open());


