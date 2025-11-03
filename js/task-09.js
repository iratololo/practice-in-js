// Task 09 Homework Module 6

const changeColorBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");

changeColorBtn.addEventListener("click", handlerColorChange);

function handlerColorChange(e) {
    const randomColor = getRandomHexColor();
    e.currentTarget.closest("body").style.backgroundColor = randomColor;
    color.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}