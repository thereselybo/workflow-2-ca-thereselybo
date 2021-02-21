import { checkInputLength, validateEmailValue } from "../../utils/index";

const contactForm = document.querySelector("#contactForm") as HTMLFormElement;

contactForm.addEventListener("submit", validateContactForm);

function validateContactForm(event: Event): void {
  event.preventDefault();

  const firstName = document.querySelector("#firstName") as HTMLInputElement;
  const firstNameError = document.querySelector(
    "#firstNameError"
  ) as HTMLDivElement;
  const firstNameValue = firstName.value;

  if (checkInputLength(firstNameValue)) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  const lastName = document.querySelector("#lastName") as HTMLInputElement;
  const lastNameError = document.querySelector(
    "#lastNameError"
  ) as HTMLDivElement;
  const lastNameValue = lastName.value;

  if (checkInputLength(lastNameValue)) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  const email = document.querySelector("#email") as HTMLInputElement;
  const noEmailError = document.querySelector(
    "#noEmailError"
  ) as HTMLDivElement;
  const invalidEmailError = document.querySelector(
    "#invalidEmailError"
  ) as HTMLDivElement;
  const emailValue = email.value;

  if (checkInputLength(emailValue)) {
    noEmailError.style.display = "none";
    if (validateEmailValue(emailValue)) {
      invalidEmailError.style.display = "none";
    } else {
      invalidEmailError.style.display = "block";
    }
  } else {
    noEmailError.style.display = "block";
  }

  const message = document.querySelector("#message") as HTMLInputElement;
  const messageError = document.querySelector(
    "#messageError"
  ) as HTMLDivElement;
  const messageValue = message.value;

  if (checkInputLength(messageValue)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  const formValidated = document.querySelector(
    "#formValidated"
  ) as HTMLDivElement;

  if (
    firstNameError.style.display === "none" &&
    lastNameError.style.display === "none" &&
    noEmailError.style.display === "none" &&
    invalidEmailError.style.display === "none" &&
    messageError.style.display === "none"
  ) {
    formValidated.style.display = "block";
  } else {
    formValidated.style.display = "none";
  }
}

// export function checkInputLength(value: string): boolean {
//   const trimmed = value.trim();

//   if (trimmed) {
//     return true;
//   } else {
//     return false;
//   }
// }

// export function validateEmailValue(email: string): boolean {
//   //double check
//   const regEx = /\S+@\S+\.\S+/;
//   return regEx.test(email);
// }
