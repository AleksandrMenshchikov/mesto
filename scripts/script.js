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

const fillOutProfileAfterCloseForm = () => {
  formInputName.value = profileTitle.textContent;
  formInputProfession.value = profileSubtitle.textContent;
};

const closePopupByEsc = (e) => {
  if (e.key === "Escape" && popUp.classList.contains("pop-up_opened")) {
    popUp.classList.remove("pop-up_opened");
    formReset();
    clearErrors();
  } else if (
    e.key === "Escape" &&
    popUpImage.classList.contains("pop-up-image_opened")
  ) {
    popUpImage.classList.remove("pop-up-image_opened");
  }
  document.removeEventListener("keyup", closePopupByEsc);
};

const closePopupForm = (e) => {
  if (
    e.target.classList.contains("pop-up") ||
    e.target.classList.contains("pop-up__close-icon")
  ) {
    popUp.classList.remove("pop-up_opened");
    formReset();
    clearErrors();
    document.removeEventListener("keyup", closePopupByEsc);
  }
};

const closePopupImage = (e) => {
  if (
    e.target.classList.contains("pop-up-image") ||
    e.target.classList.contains("pop-up-image__close-icon")
  )
    popUpImage.classList.remove("pop-up-image_opened");
    document.removeEventListener("keyup", closePopupByEsc);
};

const openPopupImage = () => {
  popUpImage.classList.add("pop-up-image_opened");
  document.addEventListener("keyup", closePopupByEsc);
};

const addEventClickForImage = () => {
  document.querySelectorAll(".elements__image").forEach((image) => {
    image.addEventListener("click", openPopupImage);
  });
};

initialCards.forEach(({ name, link }) => {
  elementsList.append(createCard(name, link));
  addEventClickForImage();
});

const openPopupFormProfile = () => {
  formCard.classList.add("form_non-active");
  formProfile.classList.remove("form_non-active");
  fillOutProfileAfterCloseForm();
  popUp.classList.add("pop-up_opened");
  document.addEventListener("keyup", closePopupByEsc);
};

const openPopupFormCard = () => {
  formCard.classList.remove("form_non-active");
  formProfile.classList.add("form_non-active");
  popUp.classList.add("pop-up_opened");
  document.addEventListener("keyup", closePopupByEsc);
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
  addEventClickForImage();
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

profileEditButton.addEventListener("click", openPopupFormProfile);

profileAddButton.addEventListener("click", openPopupFormCard);

popUp.addEventListener("click", closePopupForm);

popUpImage.addEventListener("click", closePopupImage);

formProfile.addEventListener("submit", submitFormProfile);

formCard.addEventListener("submit", submitFormCard);

elementsList.addEventListener("click", toggleLike);

elementsList.addEventListener("click", removeCard);

elementsList.addEventListener("click", zoomImage);
