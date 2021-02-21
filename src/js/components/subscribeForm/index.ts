import { checkInputLength, validateEmailValue } from "../../utils/index";

export default function handleSubscribeForm(): void {
  const form = document.querySelector("#subscribeForm") as HTMLFormElement;
  form.addEventListener("submit", validateForm);
}

function validateForm(event: Event): void {
  event.preventDefault();

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

  const newsletterValidated = document.querySelector(
    "#newsletterValidated"
  ) as HTMLDivElement;

  if (
    noEmailError.style.display === "none" &&
    invalidEmailError.style.display === "none"
  ) {
    newsletterValidated.style.display = "block";
  } else {
    newsletterValidated.style.display = "none";
  }
}

// function checkLength(value: string): string {
//   const trimmed = value.trim();

//   return trimmed;
// }

// function validateEmail(email: string): boolean {
//   const regEx = /\S+@\S+\.\S+/;
//   return regEx.test(email);
// }
