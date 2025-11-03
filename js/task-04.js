// Task 4 Homework module 6

let counterValue = 0;

const counter = document.querySelector("#counter");
const value = document.querySelector("#value");

counter.addEventListener("click", handlerCounter);

function handlerCounter(e) {
    if (e.target.dataset.action === "decrement" && counterValue) {
        counterValue -= 1;
        value.textContent = counterValue;
    }
    if (e.target.dataset.action === "increment") {
        counterValue += 1;
        value.textContent = counterValue;
    }
}