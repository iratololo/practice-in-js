// Task 1. Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesList = document.querySelector("#categories");
const categories = [...categoriesList.children];

console.log(`Number of categories: ${categories.length}`)

categories.forEach((item) => {
    
    const result = `Category: ${item.firstElementChild.textContent}
    Elements: ${item.lastElementChild.children.length}`;
    console.log(result)
})




// Task 1.2. Напиши скрипт, який:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const murkup = ingredients.map(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add("item");
    return li;
})

ingredientsList.append(...murkup);



// Task 1.3. Напиши скрипт, який:
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().
// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.


const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const murkupGallery = images.map(({ url, alt }) => ` 
    <li class="gallery-item">
        <img src=${url} alt=${alt} class="gallery-img">
    </li>`).join("");

gallery.insertAdjacentHTML("afterbegin", murkupGallery)