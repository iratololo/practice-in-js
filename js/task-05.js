// Task 5 Homework Module 6

const userName = document.querySelector("#name-input");
const greeting = document.querySelector("#name-output");

const DEFAULT_NAME = "Anonymous";

userName.addEventListener("input", handlerInput);

function handlerInput(e) {
    greeting.textContent = e.currentTarget.value.trim() || DEFAULT_NAME;
}