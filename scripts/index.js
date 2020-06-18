import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./initialCards.js";
import {
  closePopupByEsc,
  clearErrors,
  togglePopup,
  popUp,
  popUpImage,
  formProfile,
  formCard,
} from "./utils.js";

const elementsList = document.querySelector(".elements__list");
const profileEditButton = document.querySelector(".profile__edit-button");
const formInputName = document.querySelector(".form__input_name");
const formInputProfession = document.querySelector(".form__input_profession");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileAddButton = document.querySelector(".profile__add-button");

const data = {
  inputSelector: ".form__input",
  errorInputSelector: "form__input_type_error",
  errorClass: "form__input-error_visible",
  submitButtonSelector: ".form__input-button",
};

const formValidator1 = new FormValidator(data, ".form_profile");
formValidator1.enableValidation();

const formValidator2 = new FormValidator(data, ".form_card");
formValidator2.enableValidation();

const closePopupImage = (e) => {
  if (
    e.target.classList.contains("pop-up-image") ||
    e.target.classList.contains("pop-up-image__close-icon")
  ) {
    togglePopup(popUpImage);
    document.removeEventListener("keyup", closePopupByEsc);
  }
};

const closePopupForm = (e) => {
  if (
    e.target.classList.contains("pop-up") ||
    e.target.classList.contains("pop-up__close-icon")
  ) {
    togglePopup(popUp);
    formProfile.classList.contains("form_non-active") ? formCard.reset() : null;
    formProfile.classList.contains("form_non-active")
      ? clearErrors(formCard)
      : clearErrors(formProfile);
    document.removeEventListener("keyup", closePopupByEsc);
  }
};

const openPopupFormProfile = () => {
  formCard.classList.add("form_non-active");
  formProfile.classList.remove("form_non-active");
  formInputName.value = profileTitle.textContent;
  formInputProfession.value = profileSubtitle.textContent;
  togglePopup(popUp);
  document.addEventListener("keyup", closePopupByEsc);
};

const openPopupFormCard = () => {
  formCard.classList.remove("form_non-active");
  formProfile.classList.add("form_non-active");
  togglePopup(popUp);
  document.addEventListener("keyup", closePopupByEsc);
};

const submitFormProfile = (e) => {
  e.preventDefault();
  profileTitle.textContent = formInputName.value;
  profileSubtitle.textContent = formInputProfession.value;
  togglePopup(popUp);
  clearErrors(formProfile);
};

const submitFormCard = (e) => {
  e.preventDefault();
  const data = {};
  data.name = document.querySelector(".form__input_name-card").value;
  data.link = document.querySelector(".form__input_link-card").value;
  const card = new Card(data, "#card", ".pop-up-image");
  elementsList.prepend(card.generateCard());
  formCard.reset();
  togglePopup(popUp);
  clearErrors(formCard);
};

initialCards.forEach((data) => {
  const card = new Card(data, "#card", ".pop-up-image");
  elementsList.append(card.generateCard());
});

popUpImage.addEventListener("click", closePopupImage);

profileEditButton.addEventListener("click", openPopupFormProfile);

formProfile.addEventListener("submit", submitFormProfile);

popUp.addEventListener("click", closePopupForm);

profileAddButton.addEventListener("click", openPopupFormCard);

formCard.addEventListener("submit", submitFormCard);
