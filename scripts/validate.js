// const showMessageError = (input, errorClass, errorInputSelector) => {
//   input.classList.add(errorInputSelector);
//   const errorElement = document.querySelector(`#${input.name}-error`);
//   errorElement.classList.add(errorClass);
//   errorElement.textContent = input.validationMessage;
//   errorElement.classList.add(errorClass);
// };

// const hideMessageError = (input, errorClass, errorInputSelector) => {
//   input.classList.remove(errorInputSelector);
//   const errorElement = document.querySelector(`#${input.name}-error`);
//   errorElement.classList.remove(errorClass);
//   errorElement.textContent = "";
//   errorElement.classList.remove(errorClass);
// };

// const checkInputValidity = (input, errorClass, errorInputSelector) => {
//   if (input.checkValidity()) {
//     hideMessageError(input, errorClass, errorInputSelector);
//   } else {
//     showMessageError(input, errorClass, errorInputSelector);
//   }
// };

// const setStateOfButton = (form, submitButtonSelector) => {
//   const buttonElement = form.querySelector(submitButtonSelector);
//   if (form.checkValidity()) {
//     buttonElement.removeAttribute("disabled");
//   } else {
//     buttonElement.setAttribute("disabled", true);
//   }
// };

// const setEventListeners = (
//   form,
//   inputSelector,
//   errorClass,
//   submitButtonSelector,
//   errorInputSelector
// ) => {
//   const listInputs = form.querySelectorAll(inputSelector);
//   listInputs.forEach((inputElement) => {
//     inputElement.addEventListener("input", () => {
//       checkInputValidity(inputElement, errorClass, errorInputSelector);
//       setStateOfButton(form, submitButtonSelector);
//     });
//   });
// };

// const enableValidation = (options) => {
//   const listForms = document.querySelectorAll(options.formSelector);
//   listForms.forEach((form) => {
//     setEventListeners(
//       form,
//       options.inputSelector,
//       options.errorClass,
//       options.submitButtonSelector,
//       options.errorInputSelector
//     );
//   });
// };

// enableValidation({
//   formSelector: ".form",
//   inputSelector: ".form__input",
//   errorInputSelector: "form__input_type_error",
//   errorClass: "form__input-error_visible",
//   submitButtonSelector: ".form__input-button",
// });
