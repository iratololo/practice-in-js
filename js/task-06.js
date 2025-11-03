// Task 6 Homework Module 6

const validInput = document.querySelector("#validation-input");

const validLength = Number(validInput.dataset.length);

validInput.addEventListener("blur", handlerValidation);

function handlerValidation(e) {
    const isValid = e.currentTarget.value.length === validLength;
    updateClass(e.currentTarget, isValid)
}

function updateClass(elem, isValid) {
    elem.classList.toggle("valid", isValid);
    elem.classList.toggle("invalid", !isValid);
}