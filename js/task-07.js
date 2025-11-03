// Task 07 Homework Module 6

const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${sizeControl.value}px`;

sizeControl.addEventListener("input", handlerFontSize);

function handlerFontSize(e) {
    text.style.fontSize = `${e.currentTarget.value}px`
}