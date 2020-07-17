import "./index.css";
import {
  data,
  profileEditButton,
  profileAddButton,
  profileAvatar,
} from "../utils/utils.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm";
import PopupWithAvatar from "../components/PopupWithAvatar";

const selectors = {
  formProfile: ".form_profile",
  formCard: ".form_card",
  formAvatar: ".form_avatar",
  profileTitle: ".profile__title",
  profileSubtitle: ".profile__subtitle",
  popUpImage: ".pop-up-image",
  popUpProfile: ".pop-up_profile",
  popUpConfirm: ".pop-up_confirm",
  popUpAvatar: ".pop-up_avatar",
  popUpCloseIcon: ".pop-up__close-icon",
  popUpCard: ".pop-up_card",
  card: "#card",
  popUpImageCloseIcon: ".pop-up-image__close-icon",
  elementsList: ".elements__list",
  elementsRemove: ".elements__remove",
};

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-13",
  headers: {
    authorization: "c1537c16-673d-4616-aeab-a0fea1355e00",
    "Content-Type": "application/json;charset=utf-8",
  },
});

const formValidatorProfile = new FormValidator(data, selectors.formProfile);
formValidatorProfile.enableValidation();

const formValidatorCard = new FormValidator(data, selectors.formCard);
formValidatorCard.enableValidation();

const formValidatorAvatar = new FormValidator(data, selectors.formAvatar);
formValidatorAvatar.enableValidation();

const userInfo = new UserInfo(
  selectors.profileTitle,
  selectors.profileSubtitle
);

const popupWithImage = new PopupWithImage(selectors.popUpImage);
popupWithImage.setEventListeners(selectors.popUpImageCloseIcon);

const popupWithConfirm = new PopupWithConfirm(selectors.popUpConfirm);
popupWithConfirm.setEventListeners(selectors.popUpCloseIcon);

const popupWithAvatar = new PopupWithAvatar(selectors.popUpAvatar, {
  handleFormSubmit: (dataForm) => {
    api
      .patchAvatar(dataForm)
      .then((res) => {
        popupWithAvatar.setAvatar(res.avatar);
        popupWithAvatar.close();
      })
      .catch((err) => console.log(err));
    popupWithAvatar.handleButtonForm("Сохранение...");
  },
});
popupWithAvatar.setEventListeners(selectors.popUpCloseIcon);

const formProfile = new PopupWithForm(selectors.popUpProfile, {
  handleFormSubmit: (dataForm) => {
    userInfo.setUserInfo(dataForm["input-name"], dataForm["input-profession"]);
    api
      .patchUserData(dataForm["input-name"], dataForm["input-profession"])
      .then(() => formProfile.close())
      .catch((err) => console.log(err));
    formProfile.handleButtonForm("Сохранение...");
  },
});
formProfile.setEventListeners(selectors.popUpCloseIcon);

const formCard = new PopupWithForm(selectors.popUpCard, {
  handleFormSubmit: (dataForm) => {
    const { "input-name-card": name, "input-link-card": link } = dataForm;
    const item = {};
    item.name = name;
    item.link = link;
    api
      .postCard(item.name, item.link)
      .then((data) => {
        item.id = data._id;
        const card = new Card(item, selectors.card, {
          handleCardClick: () => popupWithImage.open(item.link, item.name),
          handleButtonRemove: (e) => {
            const element = e.target.closest(".elements__item");
            popupWithConfirm.open();
            popupWithConfirm.handleButton(element, function () {
              api.deleteCard(card.getCardId());
            });
          },
          handleButtonLike: () => {
            if (
              !card.getElementLike().classList.contains("elements__like_active")
            ) {
              api
                .putLike(card.getCardId())
                .then((res) => {
                  card.setLikes(res.likes);
                })
                .catch((err) => console.log(err));
            } else {
              api
                .deleteLike(card.getCardId())
                .then((res) => {
                  card.setLikes(res.likes);
                })
                .catch((err) => console.log(err));
            }
          },
        });
        const cardElement = card.generateCard("668ea0a7f8f07344312fc2a6");
        document.querySelector(selectors.elementsList).prepend(cardElement);
        formCard.close();
      })
      .catch((err) => console.log(err));
    formCard.handleButtonForm("Создание...");
  },
});
formCard.setEventListeners(selectors.popUpCloseIcon);

api
  .getInitialCards()
  .then((result) => {
    const cardList = new Section(
      {
        data: result,
        renderer: (item) => {
          const card = new Card(item, selectors.card, {
            handleCardClick: () => popupWithImage.open(item.link, item.name),
            handleButtonRemove: (e) => {
              const element = e.target.closest(".elements__item");
              popupWithConfirm.open();
              popupWithConfirm.handleButton(element, function () {
                api.deleteCard(item._id);
              });
            },
            handleButtonLike: () => {
              if (
                !card
                  .getElementLike()
                  .classList.contains("elements__like_active")
              ) {
                api
                  .putLike(item._id)
                  .then((res) => {
                    card.setLikes(res.likes);
                  })
                  .catch((err) => console.log(err));
              } else {
                api
                  .deleteLike(item._id)
                  .then((res) => {
                    card.setLikes(res.likes);
                  })
                  .catch((err) => console.log(err));
              }
            },
          });
          const cardElement = card.generateCard(item.owner._id);
          cardElement.querySelector(".elements__like-counter ").textContent =
            item.likes.length;
          card.setColorLike("668ea0a7f8f07344312fc2a6", item.likes);
          cardList.appendItem(cardElement);
        },
      },
      selectors.elementsList
    );
    cardList.renderItems();
  })
  .catch((err) => console.log(err));

profileEditButton.addEventListener("click", () => {
  formProfile.open();
  formProfile.handleButtonForm("Сохранить");
  formValidatorProfile.setButtonDisabled();
  const userData = userInfo.getUserInfo();
  formProfile.setInputValues(userData.user, userData.about);
});

profileAddButton.addEventListener("click", () => {
  formCard.open();
  formCard.handleButtonForm("Создать");
  formValidatorCard.setButtonDisabled();
});

profileAvatar.addEventListener("click", () => {
  popupWithAvatar.open();
  popupWithAvatar.handleButtonForm("Сохранить");
  formValidatorAvatar.setButtonDisabled();
});
