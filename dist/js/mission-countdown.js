"use strict";
fetch("https://api.spacexdata.com/v3/launches/next")
    .then(function (response) {
    return response.json();
})
    .then(function (data) {
    getDeadline(data);
})
    .catch(function (error) {
    console.log(error);
});
let deadline;
function getDeadline(nextLaunch) {
    deadline = new Date(Date.parse(nextLaunch.launch_date_local)).getTime(); // deadline.launch_date_local
    updateTimeLeft();
}
function updateTimeLeft() {
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
}
setInterval(updateTimeLeft, 1000);
