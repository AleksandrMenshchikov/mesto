const isValidForm = (formSelector) => {
  return formSelector.checkValidity();
};

const showMessageError = (e, errorClass, inputErrorClass) => {
  if (e.target.checkValidity()) {
    e.target.nextElementSibling.classList.remove(errorClass);
    e.target.classList.remove(inputErrorClass);
  } else {
    e.target.nextElementSibling.classList.add(errorClass);
    e.target.nextElementSibling.textContent = e.target.validationMessage;
    e.target.classList.add(inputErrorClass);
  }
};

const handleButton = (e, submitButtonSelector, formSelector) => {
  const submitButtonSelectors = document.querySelectorAll(submitButtonSelector);
  if (isValidForm(e.target.closest(formSelector))) {
    submitButtonSelectors.forEach((button) => {
      button.removeAttribute("disabled");
    });
  } else {
    submitButtonSelectors.forEach((button) => {
      button.setAttribute("disabled", true);
    });
  }
};

const enableValidation = (options) => {
  const inputSelectors = document.querySelectorAll(options.inputSelector);
  inputSelectors.forEach((input) => {
    input.addEventListener("input", (e) => {
      showMessageError(e, options.errorClass, options.inputErrorClass);
      handleButton(e, options.submitButtonSelector, options.formSelector);
    });
  });
};

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__input-button",
  inputErrorClass: "form__input-error",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
});
