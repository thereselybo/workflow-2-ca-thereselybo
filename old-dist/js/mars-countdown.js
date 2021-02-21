"use strict";
function updateTimer() {
    const deadline = new Date("2025-01-01").getTime();
    const today = new Date().getTime();
    const timeLeft = deadline - today;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toString();
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)).toString();
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000).toString();
    const daysDisplayed = document.querySelector("#days");
    daysDisplayed.innerText = days;
    const hoursDisplayed = document.querySelector("#hours");
    hoursDisplayed.innerText = hours;
    const minsDisplayed = document.querySelector("#minutes");
    minsDisplayed.innerText = minutes;
    const secsDisplayed = document.querySelector("#seconds");
    secsDisplayed.innerText = seconds;
    const minText = document.querySelector("#minutes-text");
    const secText = document.querySelector("#seconds-text");
    if (window.matchMedia("(max-width: 639px)").matches) {
        minText.innerText = "Mins";
        secText.innerText = "Secs";
    }
    else {
        minText.innerText = "Minutes";
        secText.innerText = "Seconds";
    }
    let success = false;
    if (timeLeft === 0) {
        clearInterval(countdownToManOnMars);
        const countdownCopy = document.querySelector(".countdown p");
        if (success) {
            countdownCopy.innerText += ` He has now succeeded. Huzzah`;
        }
        else {
            countdownCopy.innerText += ` He has now failed. Damn it Elon`;
        }
    }
}
const countdownToManOnMars = setInterval(updateTimer, 1000);
