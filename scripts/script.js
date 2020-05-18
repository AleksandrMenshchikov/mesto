const closeIcon = document.querySelector(".pop-up__close-icon");
const profileEditButton = document.querySelector(".profile__edit-button");
const popUp = document.querySelector(".pop-up");
const formInputName = document.querySelector(".form__input_name");
const formInputProfession = document.querySelector(".form__input_profession");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const form = document.querySelector(".form");

const closePopup = () => {
  popUp.classList.remove("pop-up_opened");
  popUp.classList.add("pop-up_closed");
  setTimeout(() => {
    popUp.classList.remove("pop-up_closed");
  }, 200);
};

const closePopupByEsc = (e) => {
  if (e.keyCode === 27) {
    closePopup();
  }
};

const editProfile = () => {
  popUp.classList.add("pop-up_opened");
  formInputName.value = profileTitle.textContent;
  formInputProfession.value = profileSubtitle.textContent;
};

const submitForm = (e) => {
  e.preventDefault();
  profileTitle.textContent = formInputName.value;
  profileSubtitle.textContent = formInputProfession.value;
  closePopup();
};

profileEditButton.addEventListener("click", editProfile);

closeIcon.addEventListener("click", closePopup);

form.addEventListener("submit", submitForm);

document.addEventListener("keyup", closePopupByEsc);
