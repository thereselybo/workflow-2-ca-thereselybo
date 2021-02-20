"use strict";
const contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", validateContactForm);
function validateContactForm(event) {
    event.preventDefault();
    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;
    if (checkInputLength(firstNameValue)) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
    }
    const lastName = document.querySelector("#lastName");
    const lastNameError = document.querySelector("#lastNameError");
    const lastNameValue = lastName.value;
    if (checkInputLength(lastNameValue)) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
    }
    const email = document.querySelector("#email");
    const noEmailError = document.querySelector("#noEmailError");
    const invalidEmailError = document.querySelector("#invalidEmailError");
    const emailValue = email.value;
    if (checkInputLength(emailValue)) {
        noEmailError.style.display = "none";
        if (validateEmailValue(emailValue)) {
            invalidEmailError.style.display = "none";
        }
        else {
            invalidEmailError.style.display = "block";
        }
    }
    else {
        noEmailError.style.display = "block";
    }
    const message = document.querySelector("#message");
    const messageError = document.querySelector("#messageError");
    const messageValue = message.value;
    if (checkInputLength(messageValue)) {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
    }
    const formValidated = document.querySelector("#formValidated");
    if (firstNameError.style.display === "none" &&
        lastNameError.style.display === "none" &&
        noEmailError.style.display === "none" &&
        invalidEmailError.style.display === "none" &&
        messageError.style.display === "none") {
        formValidated.style.display = "block";
    }
    else {
        formValidated.style.display = "none";
    }
}
function checkInputLength(value) {
    const trimmed = value.trim();
    if (trimmed) {
        return true;
    }
    else {
        return false;
    }
}
function validateEmailValue(email) {
    //double check
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}
