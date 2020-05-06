const closeIcon = document.querySelector(".pop-up__close-icon");
const profileEditButton = document.querySelector(".profile__edit-button");
const popUp = document.querySelector(".pop-up");
const formInputList = document.querySelectorAll(".form__input");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const form = document.querySelector(".form");

const closePopup = () => {
  popUp.classList.remove("pop-up_opened");
};

const closePopupByEsc = (e) => {
  if (e.keyCode === 27) {
    closePopup();
  }
};

const editProfile = () => {
  popUp.classList.add("pop-up_opened");
  formInputList[0].value = profileTitle.textContent;
  formInputList[1].value = profileSubtitle.textContent;
};

const submitForm = (e) => {
  e.preventDefault();
  profileTitle.textContent = formInputList[0].value;
  profileSubtitle.textContent = formInputList[1].value;
  closePopup();
};

profileEditButton.addEventListener("click", editProfile);

closeIcon.addEventListener("click", closePopup);

form.addEventListener("submit", submitForm);

document.addEventListener("keyup", closePopupByEsc);
