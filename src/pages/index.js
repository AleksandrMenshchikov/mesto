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
    const oldValues = userInfo.getUserInfo();
    formProfile.handleButtonForm("Загрузка...");
    api
      .patchUserData(dataForm["input-name"], dataForm["input-profession"])
      .then(() => {
        userInfo.setUserInfo(
          dataForm["input-name"],
          dataForm["input-profession"]
        );
        formProfile.close();
        const dataPeople = document.querySelectorAll("[data-people]");
        dataPeople.forEach((item) => {
          const newMap = item.dataset.people.split(", ").map((item) => {
            if (item === oldValues.user) {
              item = userInfo.getUserInfo().user;
            }
            return item;
          });
          const newString = newMap.join(", ");
          item.dataset.people = newString;
        });
      })
      .catch((err) => console.log(err));
  },
});
formProfile.setEventListeners(selectors.popUpCloseIcon);

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

const getPeopleLikes = (arrayData) => {
  return arrayData.reduce((acc, item) => {
    acc.push(item.name);
    return acc;
  }, []);
};

const cardList = new Section(selectors.elementsList);

const handleData = (data) => {
  const card = new Card(data, selectors.card, {
    handleCardClick: () => popupWithImage.open(data.link, data.name),
    handleButtonRemove: () => {
      popupWithConfirm.open();
      popupWithConfirm.handleButton(function () {
        api
          .deleteCard(data._id)
          .then(() => {
            card.deleteCard();
          })
          .catch((err) => console.log(err));
      });
    },
    handleButtonLike: () => {
      if (!card.getElementLike().classList.contains("elements__like_active")) {
        api
          .putLike(data._id)
          .then((res) => {
            card.setLikes(res.likes);
            card.toggleLike();
          })
          .catch((err) => console.log(err));
      } else {
        api
          .deleteLike(data._id)
          .then((res) => {
            card.setLikes(res.likes);
            card.toggleLike();
          })
          .catch((err) => console.log(err));
      }
    },
  });
  const cardElement = card.generateCard(data.owner._id);
  card.setLikes(data.likes);
  cardList.appendItem(cardElement);
  formCard.close();
};

Promise.all([api.getInitialCards(), api.getUserData()])
  .then((result) => {
    userInfo.setUserInfo(result[1].name, result[1].about);
    document.querySelector(selectors.profileAvatar).src = result[1].avatar;

    cardList.renderItems(result[0], handleData);
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
