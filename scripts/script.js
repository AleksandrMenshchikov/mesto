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

const popUp = document.querySelector(".pop-up");
const formInputName = document.querySelector(".form__input_name");
const formInputProfession = document.querySelector(".form__input_profession");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const formProfile = document.querySelector(".form_profile");
const elementsList = document.querySelector(".elements__list");
const formCard = document.querySelector(".form_card");
const popUpImage = document.querySelector(".pop-up-image");

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

const openAndClosePopup = (e) => {
  if (e.target.classList.contains("profile__edit-button")) {
    formCard.classList.add("form_non-active");
    formProfile.classList.remove("form_non-active");
    formInputName.value = profileTitle.textContent;
    formInputProfession.value = profileSubtitle.textContent;
    popUp.classList.add("pop-up_opened");
  } else if (e.target.classList.contains("profile__add-button")) {
    formCard.classList.remove("form_non-active");
    formProfile.classList.add("form_non-active");
    popUp.classList.add("pop-up_opened");
  } else if (e.target.classList.contains("elements__image")) {
    popUpImage.classList.add("pop-up-image_opened");
  } else if (
    e.target.classList.contains("pop-up__close-icon") ||
    e.target.classList.contains("pop-up")
  ) {
    popUp.classList.remove("pop-up_opened");
    clearErrors();
  } else if (
    e.target.classList.contains("pop-up-image__close-icon") ||
    e.target.classList.contains("pop-up-image")
  ) {
    popUpImage.classList.remove("pop-up-image_opened");
  }
};

const closePopupByEsc = (e) => {
  if (e.key === "Escape" && popUp.classList.contains("pop-up_opened")) {
    popUp.classList.remove("pop-up_opened");
    clearErrors();
  } else if (
    e.key === "Escape" &&
    popUpImage.classList.contains("pop-up-image_opened")
  ) {
    popUpImage.classList.remove("pop-up-image_opened");
    clearErrors();
  }
};

const submitFormProfile = (e) => {
  e.preventDefault();
  profileTitle.textContent = formInputName.value;
  profileSubtitle.textContent = formInputProfession.value;
  popUp.classList.remove("pop-up_opened");
  clearErrors();
};

const submitFormCard = (e) => {
  e.preventDefault();
  const formInputNameCard = document.querySelector(".form__input_name-card");
  const formInputLinkCard = document.querySelector(".form__input_link-card");
  elementsList.prepend(
    createCard(formInputNameCard.value, formInputLinkCard.value)
  );
  formInputNameCard.value = "";
  formInputLinkCard.value = "";
  popUp.classList.remove("pop-up_opened");
  clearErrors();
};

const toggleLike = (e) => {
  if (e.target.classList.contains("elements__like")) {
    e.target.classList.toggle("elements__like_active");
  }
};

const removeCard = (e) => {
  if (e.target.classList.contains("elements__remove")) {
    e.target.closest(".elements__item").remove();
  }
};

const zoomImage = (e) => {
  if (e.target.classList.contains("elements__image")) {
    const popUpImageImg = document.querySelector(".pop-up-image__img");
    popUpImageImg.src = e.target.style.backgroundImage.slice(5, -2);
    const popUpImageDescription = document.querySelector(
      ".pop-up-image__description"
    );
    popUpImageDescription.textContent = e.target
      .closest(".elements__item")
      .querySelector(".elements__item-title").textContent;
    popUpImage.classList.add("pop-up-image_opened");
  }
};

const createCard = (name, link) => {
  const card = document.querySelector("#card").content.cloneNode(true);
  const elementsImage = card.querySelector(".elements__image");
  elementsImage.style.backgroundImage = `url(${link})`;
  const elementsItemTitle = card.querySelector(".elements__item-title");
  elementsItemTitle.textContent = name;
  return card;
};

initialCards.forEach(({ name, link }) => {
  elementsList.append(createCard(name, link));
});

document.addEventListener("click", openAndClosePopup);

document.addEventListener("keyup", closePopupByEsc);

formProfile.addEventListener("submit", submitFormProfile);

formCard.addEventListener("submit", submitFormCard);

elementsList.addEventListener("click", toggleLike);

elementsList.addEventListener("click", removeCard);

elementsList.addEventListener("click", zoomImage);
