const page = document.querySelector(".page");
const popUp = document.querySelector(".pop-up");
const formInputName = document.querySelector(".form__input_name");
const formInputProfession = document.querySelector(".form__input_profession");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const formProfile = document.querySelector(".form_profile");
const elementsList = document.querySelector(".elements__list");
const formCard = document.querySelector(".form_card");
const popUpImage = document.querySelector(".pop-up-image");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const popUpCloseIcon = document.querySelector(".pop-up__close-icon");

const togglePopup = (popup) => {
  popup.classList.toggle("pop-up-opened");
};

const createCard = (name, link) => {
  const card = document.querySelector("#card").content.cloneNode(true);
  const elementsImage = card.querySelector(".elements__image");
  elementsImage.style.backgroundImage = `url(${link})`;
  elementsImage.setAttribute("aria-label", name);
  const elementsItemTitle = card.querySelector(".elements__item-title");
  elementsItemTitle.textContent = name;
  return card;
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

const closePopupImage = (e) => {
  if (
    e.target.classList.contains("pop-up-image") ||
    e.target.classList.contains("pop-up-image__close-icon")
  ) {
    togglePopup(popUpImage);
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

const addEventOnClickForImage = () => {
  document.querySelectorAll(".elements__image").forEach((image) => {
    image.addEventListener("click", zoomImage);
  });
};

initialCards.forEach(({ name, link }) => {
  elementsList.append(createCard(name, link));
  addEventOnClickForImage();
});

const submitFormCard = (e) => {
  e.preventDefault();
  const formInputNameCard = document.querySelector(".form__input_name-card");
  const formInputLinkCard = document.querySelector(".form__input_link-card");
  elementsList.prepend(
    createCard(formInputNameCard.value, formInputLinkCard.value)
  );
  formInputNameCard.value = "";
  formInputLinkCard.value = "";
  togglePopup(popUp);
  clearErrors();
  addEventOnClickForImage();
};

profileEditButton.addEventListener("click", openPopupFormProfile);

profileAddButton.addEventListener("click", openPopupFormCard);

popUp.addEventListener("click", closePopupForm);

popUpImage.addEventListener("click", closePopupImage);

formProfile.addEventListener("submit", submitFormProfile);

formCard.addEventListener("submit", submitFormCard);

elementsList.addEventListener("click", toggleLike);

elementsList.addEventListener("click", removeCard);
