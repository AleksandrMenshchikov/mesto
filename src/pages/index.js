import "./index.css";
import {
  data,
  profileEditButton,
  profileAddButton,
  profileAvatar,
  selectors,
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
    popupWithAvatar.handleButtonForm("Загрузка...");
    api
      .patchAvatar(dataForm)
      .then((res) => {
        popupWithAvatar.setAvatar(res.avatar);
        popupWithAvatar.close();
      })
      .catch((err) => console.log(err));
  },
});
popupWithAvatar.setEventListeners(selectors.popUpCloseIcon);

const formProfile = new PopupWithForm(selectors.popUpProfile, {
  handleFormSubmit: (dataForm) => {
    formProfile.handleButtonForm("Загрузка...");
    api
      .patchUserData(dataForm["input-name"], dataForm["input-profession"])
      .then(() => {
        userInfo.setUserInfo(
          dataForm["input-name"],
          dataForm["input-profession"]
        );
        formProfile.close();
      })
      .catch((err) => console.log(err));
  },
});
formProfile.setEventListeners(selectors.popUpCloseIcon);

const handleData = (data) => {
  const card = new Card(data, selectors.card, {
    handleCardClick: () => popupWithImage.open(data.link, data.name),
    handleButtonRemove: (e) => {
      const element = e.target.closest(".elements__item");
      popupWithConfirm.open();
      popupWithConfirm.handleButton(element, function () {
        api
          .deleteCard(data._id)
          .then(() => element.remove())
          .catch((err) => console.log(err));
      });
    },
    handleButtonLike: () => {
      if (!card.getElementLike().classList.contains("elements__like_active")) {
        api
          .putLike(data._id)
          .then((res) => {
            card.setLikes(res.likes);
          })
          .catch((err) => console.log(err));
      } else {
        api
          .deleteLike(data._id)
          .then((res) => {
            card.setLikes(res.likes);
          })
          .catch((err) => console.log(err));
      }
    },
  });
  const cardElement = card.generateCard(data.owner._id);
  cardElement.querySelector(".elements__like-counter ").textContent =
    data.likes.length;
  document.querySelector(selectors.elementsList).append(cardElement);
  formCard.close();
};

const formCard = new PopupWithForm(selectors.popUpCard, {
  handleFormSubmit: (dataForm) => {
    formCard.handleButtonForm("Загрузка...");
    api
      .postCard(dataForm["input-name-card"], dataForm["input-link-card"])
      .then(handleData)
      .catch((err) => console.log(err));
  },
});
formCard.setEventListeners(selectors.popUpCloseIcon);

Promise.all([api.getInitialCards(), api.getUserData()])
  .then((result) => {
    document.querySelector(selectors.profileTitle).textContent = result[1].name;
    document.querySelector(selectors.profileSubtitle).textContent =
      result[1].about;
    document.querySelector(selectors.profileAvatar).src = result[1].avatar;

    const cardList = new Section(
      {
        data: result[0],
        renderer: handleData,
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
