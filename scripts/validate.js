const isValidForm = (formSelector) => {
  return formSelector.checkValidity();
};

const hideMessageError = (e, errorClass, inputErrorClass) => {
  const input = e.target;
  const elementError = document.querySelector(`.${input.name}-error`);
  if (input.checkValidity()) {
    elementError.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
  }
};

const showMessageError = (e, errorClass, inputErrorClass) => {
  const input = e.target;
  const elementError = document.querySelector(`.${input.name}-error`);
  if (!input.checkValidity()) {
    elementError.classList.add(errorClass);
    elementError.textContent = e.target.validationMessage;
    input.classList.add(inputErrorClass);
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
      hideMessageError(e, options.errorClass, options.inputErrorClass);
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
