# practice-in-js

/\*\*

- Додає унікальний id до об'єкта продукту і викликає колбек
- @param {{ name: string, price: number, quantity: number, [key: string]: any }} obj - Об'єкт продукту
- @param {(product: object) => void} callback - Колбек-функція, що приймає продукт
- @returns {void}
  \*/
  key: string]: any дозволяє об'єкту мати додаткові властивості (наприклад, id).

  /\*\*

* Створює новий масив, у якому кожен елемент — результат callback-функції, застосованої до відповідного елемента вхідного масиву.
* @param {Array<any>} array - Вхідний масив будь-яких значень
* @param {(item: any) => any} callback - Функція, яка обробляє кожен елемент масиву
* @returns {Array<any>} Новий масив після трансформації елементів
  \*/
