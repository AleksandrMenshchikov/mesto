import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const initialCards = [
  {
    name: "Москва",
    link:
      "https://avatars.mds.yandex.net/get-zen_doc/1328583/pub_5ac5e6209d5cb36746245dd6_5ac5e68b7ddde81950d1205c/scale_1200",
  },
  {
    name: "Санкт-Петербург",
    link:
      "https://avatars.mds.yandex.net/get-altay/1938975/2a0000016cd81e746d344d06ddb12bca34da/XXXL",
  },
  {
    name: "Казань",
    link:
      "https://avatars.mds.yandex.net/get-pdb/805781/3eb83467-5647-44b3-b183-9f29bbe7319d/s1200?webp=false",
  },
  {
    name: "Яндекс",
    link:
      "https://avatars.mds.yandex.net/get-pdb/2302431/eb3018d4-d57e-4911-bbf8-e97d8ca7f8f1/s1200?webp=false",
  },
  {
    name: "Екатеринбург",
    link: "https://mtdata.ru/u3/photoAE2A/20839068326-0/original.jpg",
  },
  {
    name: "Альметьевск",
    link:
      "https://avatars.mds.yandex.net/get-zen_doc/176438/pub_5e1824f9cddb7100b16e5059_5e182dcce4fff000addee5af/scale_1200",
  },
];

const elementsList = document.querySelector(".elements__list");
const popUp = document.querySelector(".pop-up");
const popUpImage = document.querySelector(".pop-up-image");
const profileEditButton = document.querySelector(".profile__edit-button");
const formInputName = document.querySelector(".form__input_name");
const formInputProfession = document.querySelector(".form__input_profession");
const formProfile = document.querySelector(".form_profile");
const formCard = document.querySelector(".form_card");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileAddButton = document.querySelector(".profile__add-button");

const togglePopup = (popup) => {
  popup.classList.toggle("pop-up-opened");
};

const clearErrors = () => {
  document.querySelectorAll(".form__input-error").forEach((span) => {
    span.textContent = "";
  });
  document.querySelectorAll(".form__input").forEach((input) => {
    input.classList.remove("form__input_type_error");
  });
  document.querySelectorAll(".form__input-button").forEach((button) => {
    button.setAttribute("disabled", true);
  });
};

const formReset = () => {
  Array.from(document.forms).forEach((form) => form.reset());
};

const closePopupByEsc = (e) => {
  if (e.key === "Escape" && popUp.classList.contains("pop-up-opened")) {
    formReset();
    clearErrors();
    togglePopup(popUp);
    document.removeEventListener("keyup", closePopupByEsc);
  } else if (
    e.key === "Escape" &&
    popUpImage.classList.contains("pop-up-opened")
  ) {
    togglePopup(popUpImage);
    document.removeEventListener("keyup", closePopupByEsc);
  }
};

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
    formReset();
    clearErrors();
    document.removeEventListener("keyup", closePopupByEsc);
  }
};

const openPopupFormProfile = () => {
  formCard.classList.add("form_non-active");
  formProfile.classList.remove("form_non-active");
  formInputName.value = profileTitle.textContent;
  formInputProfession.value = profileSubtitle.textContent;
  popUp.classList.add("pop-up-opened");
  document.addEventListener("keyup", closePopupByEsc);
};

const openPopupFormCard = () => {
  formCard.classList.remove("form_non-active");
  formProfile.classList.add("form_non-active");
  popUp.classList.add("pop-up-opened");
  document.addEventListener("keyup", closePopupByEsc);
};

const zoomImage = (e) => {
  const popUpImageImg = document.querySelector(".pop-up-image__img");
  popUpImageImg.src = e.target.style.backgroundImage.slice(5, -2);
  const popUpImageDescription = document.querySelector(
    ".pop-up-image__description"
  );
  popUpImageDescription.textContent = e.target
    .closest(".elements__item")
    .querySelector(".elements__item-title").textContent;
  togglePopup(popUpImage);
  document.addEventListener("keyup", closePopupByEsc);
};

const submitFormProfile = (e) => {
  e.preventDefault();
  profileTitle.textContent = formInputName.value;
  profileSubtitle.textContent = formInputProfession.value;
  togglePopup(popUp);
  clearErrors();
};

const submitFormCard = (e) => {
  e.preventDefault();
  const data = {};
  data.name = document.querySelector(".form__input_name-card").value;
  data.link = document.querySelector(".form__input_link-card").value;
  const card = new Card(data, "#card");
  elementsList.prepend(card.generateCard());
  formCard.reset();
  elementsList.firstElementChild
    .querySelector(".elements__image")
    .addEventListener("click", zoomImage);
  togglePopup(popUp);
  clearErrors();
};

initialCards.forEach((data) => {
  const card = new Card(data, "#card");
  elementsList.append(card.generateCard());
});

document.querySelectorAll(".elements__image").forEach((image) => {
  image.addEventListener("click", zoomImage);
});

popUpImage.addEventListener("click", closePopupImage);

profileEditButton.addEventListener("click", openPopupFormProfile);

formProfile.addEventListener("submit", submitFormProfile);

popUp.addEventListener("click", closePopupForm);

profileAddButton.addEventListener("click", openPopupFormCard);

formCard.addEventListener("submit", submitFormCard);
