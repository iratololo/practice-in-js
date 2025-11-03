// Task 08 Homework Module 6

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handlerLogin);


// Using attributes name:

// function handlerLogin(e) {
//     e.preventDefault();
//     const { email, password } = e.currentTarget.elements;
   
//     if (!(email.value.trim() && password.value.trim())) {
//         alert("All fields must be filled in.")
//         return;
//     }
//     const user = {
//         [email.getAttribute("name")]: email.value,
//         [password.getAttribute("name")]: password.value,
//     }
//     console.log(user)
//     e.currentTarget.reset();
// }



// Using FormData:
function handlerLogin(e) {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
   
    const user = Object.fromEntries(formData.entries());

    if (!user.email.trim() || !user.password.trim()) {
        alert("All fields must be filled in.")
        return;
    }

    console.log(user)
    e.currentTarget.reset();
}