// TAsk 10 Homework Module 6

const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");

const BOX_SIZE = 30;
const SIZE_STEP = 10;

controls.addEventListener("click", handlerClick);

function handlerClick(e) {
    
    if (e.target.hasAttribute("data-create")) {
        const input = e.currentTarget.firstElementChild;
        createBoxes(Number(input.value));
        input.value = "";
    }
    if (e.target.hasAttribute("data-destroy")) {
        destroyBoxes()
    }
}


function createBoxes(amount) {
    destroyBoxes();
    const murkup = [];
    for (let i = 0, j = BOX_SIZE; i < amount; i += 1, j+=SIZE_STEP) {
        const div = document.createElement("div");
        div.style.width = `${j}px`;
        div.style.height = `${j}px`;
        div.style.backgroundColor = getRandomHexColor();
        div.style.marginBottom = '10px';
        murkup.push(div);
    }
    boxes.append(...murkup);
    // boxes.insertAdjacentHTML("beforeend",)
}



function destroyBoxes() {
   boxes.innerHTML=""
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}