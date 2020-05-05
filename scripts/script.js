const closeIcon = document.querySelector(".close-icon");
const profileEditButton = document.querySelector(".profile__edit-button");
const popUp = document.querySelector(".pop-up");
const formInputName = document.querySelector(".form__input-name");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const formInputProfession = document.querySelector(".form__input-profession");
const formInputButton = document.querySelector(".form__input-button");

profileEditButton.addEventListener("click", () => {
  popUp.classList.add("pop-up_opened");
  formInputName.value = profileTitle.textContent;
  formInputProfession.value = profileSubtitle.textContent
});

closeIcon.addEventListener("click", () => {
  popUp.classList.remove("pop-up_opened");
});

formInputButton.addEventListener('click', (e) => {
  e.preventDefault();
  profileTitle.textContent = formInputName.value;
  profileSubtitle.textContent = formInputProfession.value;
  popUp.classList.remove("pop-up_opened");
})


