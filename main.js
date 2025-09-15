
//TODO: Number.isNaN()

Number.isNaN(NaN ); // 
Number.isNaN('NaN' ); // 
Number.isNaN(undefined ); // 
Number.isNaN({}); // 
Number.isNaN('blabla' ); // 
Number.isNaN(true); //
Number.isNaN(Number.NaN ); // 
Number.isNaN(null); //
Number.isNaN(37 ); //
Number.isNaN('37'); //
Number.isNaN(0 / 0) // 
Number.isNaN('37.37'); //
Number.isNaN(''); //
Number.isNaN(' '); //



//TODO: isNaN()

// console.log(isNaN('02') );  //
// console.log(isNaN(null) );  //
// console.log(isNaN('6nan') );  //
// console.log(isNaN(9) );  //
// console.log(isNaN('') );  //
// console.log(isNaN([]) );  //
// console.log(isNaN({}) );  //
// console.log(isNaN(new Date) );  //
// console.log(isNaN('NaN')); //



//TODO: Number.parseFloat()

// Number.parseFloat('2.15'); //
// Number.parseFloat('2.15 '); //
// Number.parseFloat(' 2.15 '); //
// Number.parseFloat('2.15 text'); //
// Number.parseFloat('text 2.15'); //
// Number.parseFloat('text');
// Number.parseFloat(); //


//TODO: Number.parseInt()

// Number.parseInt('12.1'); //
// Number.parseInt('12.'); //
// Number.parseInt('12gh'); //
// Number.parseInt('12 text'); //
// Number.parseInt("123e-2"); //
// Number.parseInt("A", 16); //
// Number.parseInt("a", 16); //
// Number.parseInt( "A"); //
// Number.parseInt('text 12'); //
// Number.parseInt('text'); //
// Number.parseInt({}); //
// Number.parseInt([]); //
// Number.parseInt(''); //
// Number.parseInt(true); //



//TODO: Number.toFixed()

var n=2.567890431;

// n.toFixed(); //
// n.toFixed(1); //
// n.toFixed(2); //
// n.toFixed(3); //
// n.toFixed(4); //
// n.toFixed(5); //
// n.toFixed(6); //
// n.toFixed(7); //
// n.toFixed(8); //
// n.toFixed(9); //
// n.toFixed(10); //
// n.toFixed(11); //
// n.toFixed(12); //
// n.toFixed(true); //
// n.toFixed(false); //
// n.toFixed("2"); //



//TODO: Number.toString()

//  клас Math 

//TODO: Math.ceil()
/*
0.8 ==>  
0.9 ==>  
1.0 ==>  
1.1 ==>  
1.2 ==>  
1.3 ==>  
1.4 ==>  
1.5 ==>  
1.6 ==>  
1.7 ==>  
1.8 ==>  
1.9 ==>  
2.0 ==> 
2.1 ==>  
2.2 ==>  
2.3 ==>  
2.4 ==>  
2.5 ==>  
2.6 ==>  
2.7 ==>  
2.8 ==>  
2.9 ==> 
*/




//TODO: Math.round()

// console.log(Math.round(2.3)); //
// console.log(Math.round(2.5)); //
// console.log(Math.round(2.6)); //
// console.log(Math.round(-2.3)); //
// console.log(Math.round(-2.5)); //
// console.log(Math.round(-2.7)); //


//TODO: Math.floor()

// console.log('Math.floor() :>> ', Math.floor());

/*
0.8 ==> 
0.9 ==> 
1.0 ==> 
1.1 ==> 
1.2 ==> 
1.3 ==> 
1.4 ==> 
1.5 ==> 
1.6 ==> 
1.7 ==> 
1.8 ==> 
1.9 ==> 
2.0 ==> 
2.1 ==> 
2.2 ==> 
2.3 ==> 
2.4 ==> 
2.5 ==> 
2.6 ==> 
2.7 ==> 
2.8 ==> 
2.9 ==> 
*/



//TODO: Math.pow()


//TODO:Math.max()

//TODO:Math.min()


//?: STRING

//TODO:endsWith()

//TODO:startssWith()

//TODO:String.includes()

//TODO:indexOf()

//TODO:String.replace()

//TODO:String.slice()


//TODO:split()

//TODO:String.toLowerCase()

//TODO:toUpperCase()

//TODO:String.trim()!!!!!!!




// console.log('typeof NaN :>> ', typeof NaN);


// console.log('Math.pow(2,3) :>> ', Math.pow(2, 3));
// console.log('Math.random() :>> ', Math.random());

// console.log('Number("25.6px") :>> ', Number("25.6px"));
// console.log('("25.6px").parseInt() :>> ', Number.parseInt("25.6px"));



// ЗАВДАННЯ 1. Методи рядків та чейнінг.
// Скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кг на квадрат висоти. Індекс маси тіла необхідно округлити до однієї цифри після коми.

let weight = "88,3";
let height = "1.75";
weight = Number(weight.replace(",", "."));
let squaredHight = Math.pow(Number(height),2);

// const bmi = Number(weight.replace(",",".") / Math.pow(height,2)).toFixed(1);
const bmi = Number((weight / squaredHight).toFixed(1));
// console.log('bmi :>> ', bmi);



// ЗАВДАННЯ 2. Напиши скрипт, який переведе значення totalMinutes в рядок у форматі НН:ММ.
// 70 хв - 01: 10
// 450 хв - 07:30
// 1441 хв - 24:01

const totalMinutes = 1441;
const hours =  Math.floor(totalMinutes / 60);
const min = totalMinutes % 60;
const clock = `${hours.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}`;
// console.log('clock :>> ', clock);


// ЗАВДАННЯ 3. Напиши скрипт, який просить користувача ввести число і степінь, підносить число до степіня і повертає значення.

// let number = Number(prompt("Enter number"));
// let pow = Number(prompt("Enter power"));
// let result = Math.pow(number, pow);
// alert(`Your result is ${result}`);


// ЗАВДАННЯ 4. Використовуючи if...else та prompt, напиши код, який питатиме "Яка офіційна назва JavaScript?", якщо користувач вводить "ECMAScript", то показуй alert "Правильно", в іншому випадку - правильну відповідь.

// const answer = prompt("Яка офіційна назва JavaScript?");
// console.log('answer :>> ', answer);
// if (answer === "ecmascript") {
//     alert("Правильно!")
// } else {
//     alert("ECMAScript")
// }


// ЗАВДАННЯ 5. Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо користувач ввів число більше нуля, якщо нуль - "Це нуль", якщо від'ємне - "Це від'ємне число".

// const userInput = Number(prompt("Введіть число"));

// if (userInput > 0) {
//     console.log('Це позитивне число');
// } else if (userInput === 0) {
//     console.log('Це нуль');
// } else if (userInput < 0) {
//     console.log("Це від'ємне число");
// }


// ЗАВДАННЯ 6. Напиши скрипт, який порівнює два числа а та b. Якщо обидва більше 100, то виведи в консоль максимальне з них. У протилежному випадку у консолі повинна бути сума значення b та числа 512.

const a = 120;
const b = 100;

if (a > 100 && b > 100) {
    // console.log(Math.max(a,b));
} else {
    // console.log(b + 512);
}




// ЗАВДАННЯ 7. Напиши скрипт, який перевіряє чи закінчується значення змінної символом /.Якщо ні - додай до кінця значення цeй символ.

let link = "https://my-site.com/about"

if (!link.endsWith("/")) {
    link = link + "/"
} 

// console.log('link :>> ', link);



// ЗАВДАННЯ 8. Напиши скрипт, який перевіряє чи закінчується значення змінної символом /.Якщо ні - додай до кінця значення цeй символ,але тільки у тому випадку, якщо в змінної є підрядок "my-site".

let link2 = "https://my-site.com/book"

if (!link2.endsWith("/") && link2.includes("my-site")) {
    link2 += "/"
}

// console.log('link2 :>> ', link2);


// ЗАВДАННЯ 9. Напиши скрипт для відображення часу дедлайну задачі проекту.
// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 днів - виведи рядок "Завтра"
// Якщо до дедлайну 2 днів - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата в майбутньому"

const daysUntilDeadline = 2;

if (daysUntilDeadline) {
    if (daysUntilDeadline === 1) {
        console.log("Завтра");
    } else if (daysUntilDeadline === 2) {
        // console.log("Післязавтра");
    } else if (daysUntilDeadline > 3) {
        console.log("Дата в майбутньому");
    }
} else {
    console.log("Сьогодні");
}

switch (daysUntilDeadline) {
    case 0:
        console.log("Сьогодні");
        break;
    case 1:
        console.log("Завтра");
        break;
    case 2:
        // console.log("Післязавтра");
        break;
    default:
        console.log("Дата в майбутньому");
}

// ЗАВДАННЯ 10. Напиши цикл for, який виводить у консоль числа за зростанням від мін до макс, але тільки якщо число кратне 5.

const minNumber = 20;
const maxNumber = 100;

for (let i = minNumber; i <= maxNumber; i += 1) {
    if (!(i % 5)) {
        // console.log('i ', i);
    }
}


// ЗАВДАННЯ 11. Напиши скрипт, який питатиме логін. Якщо відвідувач вводить адмін, то запитує пароль, якщо нічого або Esc - "Скасовано". В іншому випадку рядок "Я вас не знаю." Якщо введено пароль "Я адмін", то вивести рядок "Привіт", інакше виводити рядок "Невірний пароль".

// const login = prompt("Enter your login");

// if (login === "Admin") {
//     const password = prompt("Enter your password")
//     if (password === "I am admin") {
//         console.log('Hello');
//     } else {
//         console.log('Wrong password');
//     }
// } else {
//     console.log('I do not know you ');
// }

// if (!login) {
//     console.log('Скасовано');
// } else {
//     if (login === "Admin") {
//         const password = prompt("Enter your password")
//         password === "I am admin" ? console.log('Hello') : console.log('Wrong password');
// } else {
//     console.log('I do not know you ');
// }
// }




// ЗАВДАННЯ 12. Створи світлофор використовуючи конструкцію Switch, в prompt юзер вводить колір, який він бачить і має отримати повідомлення з дією.

// const color = prompt("What color do you see?")?.toLowerCase();

// switch (color) {
//     case "red":
//         console.log('action stop');
//         break;
//     case "yellow":
//         console.log("action ready");
//         break;
//     case "green":
//         console.log("action go");
//         break;
//     default:
//         console.log("action be careful");
// }




// ЗАВДАННЯ 13. Створи логіку для перевірки правильних відповідей на загадки.

function check(text, answer) {
    const message = prompt(text);
    return message?.toLowerCase() === answer;
}
// console.log(check("{оч не літак, а крилатий", "вітряк"));

// ЗАВДАННЯ 14. Створи функцію, яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя. Функція приймає один параметр - глибину колодязя, поветрає кількість днів, яку равлик витратив на шлях. За день равлик проповзає на 7 м вгору, за ніч опускається на 2 м. Використовуй цикл while.
// 42м проповзе за 8 днів
// 17м проповзе за 3 днів
// 18м проповзе за 4 днів

function getDays(deps) {
    let days = 0;
    const perDay = 7;
    const perNight = 2;
    let total = 0;
    while (total < deps) {
        total += perDay;
        days += 1;
        if (total < deps) total -= perNight;
    }
    return days;
}
// console.log(getDays(17));



// ЗАВДАННЯ 14. Порахуйте скільки голосних літер у реченні.

function countVowel(str) {
    const vowels = "aeiou";
    str = str?.toLowerCase()
    let counter = 0;
    for (let i = 0; i < str.length; i += 1) {
        if (vowels.includes(str[i])) {
            counter += 1;
        }
    }
    return counter;
}


const array = [1, "Hello", null, true, [1, 2, 3]];

for (let i = 0; i < array.length; i += 1){
    if (Array.isArray(array[i])) {
        for (let j = 0; j < array[i].length; j += 1){
            // console.log(array[i][j])
        }
        continue;
    }
    // console.log(array[i])
}

let i = 0;

while (i < array.length) {
    // console.log('while',array[i]);
    i += 1;
}



// ЗАВДАННЯ 15. Напиши скрипт для обчислення площі прямокутника зі сторонами значення яких зберігається у змінній у вигляді рядка.

const values = '8 11';

const arr = values.split(" ");
// console.log(arr)
const area = Number(arr[0]) * Number(arr[1]);
// console.log(area);



// ЗАВДАННЯ 16. Напиши скрипт для перебору масиву fruits циклом for. Виведи у консоль рядок у форматі Номер: значення. Нумерація починається з одиниці.

const fruits = ['apple', 'grape', 'peach', 'banana', 'lemon'];

for (let i = 0; i < fruits.length; i += 1) {
    // console.log(`${i+1}: ${fruits[i]}`);
}

for (let i = 0, num = 1; i < fruits.length; i += 1, num += 1) {
    // console.log(`${num}: ${fruits[i]}`);
}



// ЗАВДАННЯ 17. Напиши скрипт який виводить у консоль ім'я та номер телефону, кількість імен та номерів телефону однакова.

let names = 'Jacob, William, Solomon, Artemis, Iryna';
let phones = '80954610147, 80954612149, 80509022230, 80955026931';

names = names.split(", ");
phones = phones.split(", ");

for (let i = 0; i < names.length, i< phones.length; i += 1) {
    //  console.log(`${names[i]}: ${phones[i]}`);
}



// ЗАВДАННЯ 17. Напиши скрипт який виводить у консоль усі слова рядка, окрім першого та останнього, результат не повинен починатися чи закінчуватися пробілом, скрипт повинен працювати для будь-якого рядка.

let string = "Welcome to the future";

const result = string.split(" ").slice(1, -1).join(" ");
// console.log(result)



// ЗАВДАННЯ 18. Напиши скрипт який розвертає рядок і виводить його в консоль.

let string_2 = "Welcome to the future";
string_2 = string_2.split("").reverse().join("");
// console.log(string_2);




// ЗАВДАННЯ 19. Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

const langs = ["python", 'javascript', 'c++', 'khaskel', 'php', 'ruby', 'zizi', 'anna'];


// for (let i = 0; i < langs.length; i += 1) {
//     for (let j = i + 1; j < langs.length; j += 1) {
//         if (langs[i][0] > langs[j][0]) {
//             const result = langs.splice(j, 1)[0];
//             langs.splice(i, 0, result);
//         }
//     }
// }

function bubbleSort(arr) {

  const len = arr.length;

  for (let i = 0; i < len; i++) {

    for (let j = 0; j < len - 1; j++) {

      if (arr[j] > arr[j + 1]) {

        // If the current element is larger than the next one, swap them

        const temp = arr[j];

        arr[j] = arr[j + 1];

        arr[j + 1] = temp;

      }

    }

  }

  return arr;

}

// console.log(bubbleSort(langs))




// ЗАВДАННЯ 20. Напиши скрипт пошуку найменшого числа в масиві.

// const numbers = [2,17, 94, 1, 23, 37];
const numbers = [250,50,44,360,11,-1,20];
let minNumbers=numbers[0];

for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] < minNumbers) {
        minNumbers = numbers[i];
    }

}

// console.log('minNumbers :>> ', minNumbers);




// ЗАВДАННЯ 21. Напиши скрипт, який буде перебирати масив та видаляти з нього всі елементи, що не є типом даних number.

const arr_1 = [3, 'Hello', null, 42, false];

// for (let i = 0; i < arr_1.length; i += 1) {
//     if (typeof arr_1[i] !== 'number') {
//         arr_1.splice(i, 1);
//         i-=1;
//     }
// }

for (let i = arr_1.length-1; i >= 0; i -= 1) {
    if (typeof arr_1[i] !== 'number') {
        arr_1.splice(i, 1);
    }
}


// console.log(arr_1);




// ЗАВДАННЯ 22. Напиши функцію, яка буде приймати один параметр. Функція повинна відібрати з масиву тільки ті елементи, що дублюються та повернути їх у вигляді нового масиву як результат виконання.

// function getCommonElements(arr) {
//     let commonElements=[];
//     for (let i = 0; i < arr.length; i += 1){
//         for (let j = 0; j < arr.length; j += 1){
//             if (arr[i] === arr[j]) {
//                 commonElements.push(arr[j]);
//             }
//         }
//     }
//     return commonElements
// }

function getCommonElements(arr) {
    let commonElements=[];
    for (let i = 0; i < arr.length; i += 1) {
        if (arr.includes(arr[i], i + 1)) {
            if (!commonElements.includes(arr[i])) {
                commonElements.push(arr[i]);
            }
        }
    }
    return commonElements
}


// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 1, 19]));




// ЗАВДАННЯ 23. Напиши функцію, яка буде приймати два параметри. ПЕрший - масив всіх юзерів, другий - масив з чоловічими іменами. Функція повинна відібрати з масиву всіх юзерів лише жіночі імена та повернути їх у результаті свого виконання.

const users = ["Artem", 'Anna', 'Larysa', 'Maksym', 'Svitlana', 'Davyd', 'Roman', 'Olga'];
const men = ["Artem", 'Maksym', 'Davyd', 'Roman'];

function getWomen(users, men) {
    const women = [];
    for (let i = 0; i < users.length; i += 1){
        if (!men.includes(users[i])) {
            women.push(users[i])
        }
    }
    return women;
}

// console.log(getWomen(users, men));




// ЗАВДАННЯ 24. Напиши скрипт, який розгортає рядок і виводить його в консоль.

function getReverseString(string) {
    const separator = '';
    const result = string.split(separator).reverse().join(separator);
    console.log(result);
}

// getReverseString('Welcome to the future');




// ЗАВДАННЯ 25. Напиши скрипт, який буде перевіряти чи елементи в масиві розташовані в порядку зростання, якщо ні - то замінити елементи на вірні.

const numbers_1 = [1, 2, 3, 1, 5, 6, 1, 1, 9];


for (let i = 1; i < numbers_1.length; i += 1){
    const currentEl = numbers_1[i];
    const prevEl = numbers_1[i - 1];
    if (currentEl - prevEl !==1) {
        numbers_1[i] = prevEl + 1;
    }
}

// console.log(numbers_1);




// ЗАВДАННЯ 26. Напиши функцію, яка на основі користувачів, що поставили лайк фомує та повертає рядок.
// [] - "no one likes this"
// ["Peter"] - "Peter likes this"
// ["Jakob", "Alex"] - "Jacob and Alex like this"
// ["Max", "John", "Mark"] - "Max, John and Mark like this"
// ["Alex","Jakob", "Mark", "Max"] - "Alex, Jakob and 2 others like this"

// function createString(arr) {
//     let string;
//     if (!arr.length) {
//         string = "no one likes this";
//     } else if (arr.length === 1) {
//         string = `${arr[0]} likes this`
//     } else if (arr.length === 2) {
//         string = `${arr[0]} and ${arr[1]} like this`
//     } else if (arr.length === 3) {
//         string = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
//     } else if (arr.length > 3) {
//         string = `${arr[0]}, ${arr[1]} and ${arr.length -2} others like this`
//     }
//     return string;
// }

function createString(arr) {
    let string;
    switch (arr.length) {
        case 0:
            string = "no one likes this";
            break;
        case 1:
            string = `${arr[0]} likes this`;
            break;
        case 2:
            string = `${arr[0]} and ${arr[1]} like this`;
            break;
        case 3:
            string = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
            break;
        default:
            string = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
    }
    return string;
}

// console.log(createString([]));
// console.log(createString(["Peter"]));
// console.log(createString(["Jakob", "Alex"]));
// console.log(createString(["Max", "John", "Mark"]));
// console.log(createString(["Alex", "Jakob", "Mark", "Max"]));





// ЗАВДАННЯ 27. Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.  

function calcBMI(weight, height) {
    weight = parseFloat(weight.replace(",", "."));
    height = parseFloat(height.replace(",", '.'));
    return (weight / Math.pow(height,2)).toFixed(1);

}
const bmi_1 = calcBMI('88,3', '1.75');

// console.log(bmi_1)



// ЗАВДАННЯ 28. Напиши функцію min(a,b), яка повертає найменше з чисел.

function minNum(a, b) {
    return Math.min(a, b);
    // return a > b ? b : a;
}

// console.log(minNum(-40, 10));




// ЗАВДАННЯ 29. Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка, значення гарантовано розділені пробілом.

function getRectArea(dimensions) {
    dimensions = dimensions.split(" ");
    const a = Number(dimensions[0]);
    const b = Number(dimensions[1]);
    return a * b;
}

// console.log(getRectArea('8 11'))



// ЗАВДАННЯ 30. Напиши функцію logItems(items), яка отримує масив та використовуючи цикл виводь для кожного елемента масиву повідомлення у форматі "номер - значення". Нумерація з одиниці.

function logItems(items) {
    for (let i = 0; i < items.length; i += 1){
        console.log(`${i+1} - ${items[i]}`)
    }
}

// console.log(logItems(["Mango", "Poly", "Ajax"]))



// ЗАВДАННЯ 31. Напиши функцію printContactsInfo(names, phones), яка виводить у консоль ім'я та номер користувача.

function printContactsInfo(names, phones) {
    names = names.split(", ");
    phones = phones.split(",");
    for (let i = 0; i < names.length, i < phones.length; i += 1){
        console.log(`${names[i]} - ${phones[i]}`);
    }
}

// printContactsInfo('Jacob, William, Solomon, Artemis, Iryna', '80954610147, 80954612149, 80509022230, 80955026931');


// ЗАВДАННЯ 32. Напиши функцію findLargestNumber(numbers) яка шукає найбільше число в масиві. 
/** 
 *!Переробити ще раз (рекурсія)
 */
// function findLargestNumber(...numbers) {
//     // const numbers = [...arguments];
//     // const numbers = Array.from(arguments);
//     let largestNumber = numbers[0];
//     for (let i = 1; i < numbers.length; i += 1) {
//         if (numbers[i] > largestNumber) {
//             largestNumber = numbers[i];
//         }
//     }
//     return largestNumber;
// }

// console.log(findLargestNumber(2, 17, 94, 1, 23, 37, 250));


// function findLargestNumber(...numbers) {
//     numbers = numbers.join(",").split(",");
//     let largestNumber = Number(numbers[0]);
//     for (let i = 1; i < numbers.length; i += 1) {
//         numbers[i] = Number(numbers[i]);
//         if (numbers[i] > largestNumber) {
//             largestNumber = numbers[i];
//         }
//     }
//     return largestNumber;
// }


function findLargestNumber() {
    let max;

    for (const num of arguments) {
        if (typeof num === "number") {
            max = num;
            break;
        }
    }
    for (const num of arguments) {
        if (typeof num === "number") {
            if (num > max) {
                max = num;
            }
        } else {
            let nestedMax = findLargestNumber(...num);
            if (nestedMax > max) {
                max = nestedMax;
            }
        }
    }
        
    
    return max;
}

// console.log(findLargestNumber([ [1,3500], 1994, 11000],23, 37, 250,6700));


// ЗАВДАННЯ 33. Напиши функцію calcAverage яка приймає довільну кількість аргументів і повертає їхнє середнє значення, усі аргументи - числа.

function calcAverage() {
    let sum = 0;
    for (const item of arguments) {
        sum += item;
    }
    return sum/arguments.length
}

// console.log(calcAverage(14, 8, 2));


// ЗАВДАННЯ 34. Напиши функцію formatTime(minutes) яка переведе minutes в рядок у форматі НН:ММ

function formatTime(minutes) {
    const hours = Math.floor(minutes / 60).toString();
    const minute = (minutes % 60).toString();
    return `${hours.padStart(2, "0")} : ${minute.padStart(2, "0")}`;
}

// console.log(formatTime(70));
// console.log(formatTime(450));
// console.log(formatTime(1441));

// ЗАВДАННЯ 35. Напиши функції для роботи з колекцією навчальних курсів, addCourse() - додає назву в кінець колекції, removeCourse() - видаляє, updateCourse() - змінює ім'я на нове

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(name) {
    return courses.includes(name) ? 'Ви вже маєте такий курс' : courses.push(name);
}

function removeCourse(name) {
    const idx = courses.indexOf(name);
    return !!~idx ? courses.splice(idx,1) : 'Курс із таким ім\'ям не знайдено';
}

function updateCourse(oldName, newName) {
    const idx = courses.indexOf(oldName);
    return !!~idx ? courses.splice(idx,1, newName) : 'Курс із таким ім\'ям не знайдено';
}

// console.log(addCourse('Express'));
// console.log(addCourse('CSS'));
// console.log(courses)

// console.log(removeCourse('React'));
// console.log(removeCourse('Vue'));
// console.log(courses)

// console.log(updateCourse('Python', 'ECMAScript'));
// console.log(updateCourse('JavaScript', 'ECMAScript'));
// console.log(courses)



// ЗАВДАННЯ 36. Напиши функції яка буде перевіряти чи кожен елемент масиву більше за вказане значення.

const numbers_2 = [25, 12, 67, 40, 18];

function checkValue(arr, num) {
    let message = "Success";
    for (const item of arr) {
        if (item <= num) {
            message = "Fail";
            break;
        }
    }
     return message
}

// console.log(checkValue(numbers_2, 13));

// ЗАВДАННЯ 36. Напиши функцію, яка буде розбивати початковий масив на потрібну кількість елементів, розділяючи на декілька масивів. Повертає масив масивів.

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCombination(arr, count) {
    let result = [];
    for (let i = 0; i < arr.length; i += count){
        let item = arr.slice(i, i + count);
        if (item.length === count) {
            result.push(item)
        }
    }
    return result;
}

// console.log(getCombination(data, 3));



//* ---------------------------------------------------------------------------------------Objects


const book = {
    title: 'tololo',
    author: 'Ira',
    getBooks() {
        // console.log(this);
    },
    getInf() {
        const keys = [];
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                keys.push(key);
            }
        }
        console.log(keys)
    }
}

// book.getInf();


// ЗАВДАННЯ 37. Напиши скрипт, який до об'єкту юзер послідовно: додає поле, замінює значення поля, виводить вміст об♥єкту у форматі ключ:значення, використовуючи Object.keys nf for...of.

const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const newUser = Object.keys(user);

for (const key of newUser) {
    // console.log(`${key} : ${user[key]}`);
}

// for (const key in user) {
//     console.log(`${key} : ${user[key]}`);
// }

// ЗАВДАННЯ 38. Напиши скрипт для підсумування зарплат, якщо об'єкт порожній, то результат має бути 0.

const salaries = {
    // John: 100,
    // Ann: 160,
    // Pete: 130,
}

let sum = 0;

const salaryArr = Object.values(salaries);
for (const key of salaryArr) {
    sum += key;
}
// console.log(sum)


// ЗАВДАННЯ 39. Напиши функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Рахує та повертає загальну вартість каміння з таким ім'ям.

const stones = [{
    name: "Смарагд",
    price: 1300,
    quantity: 4,
},
{
    name: "Діамант",
    price: 2700,
    quantity: 3,
},
{
    name: "Сапфір",
    price: 400,
    quantity: 7,
},
{
    name: "Щебінь",
    price: 200,
    quantity: 2,
},
];

// function calcTotalPrice(stones, stoneName) {

//     let totalPrice = 0;

//     for (const item of stones) {
//         if (item.name === stoneName) {
//             totalPrice = item.price * item.quantity;
//             break;
//         }
//     }

//     return totalPrice;
// }

function calcTotalPrice(stones, stoneName) {

    for (const item of stones) {
        if (item.name === stoneName) {
            return item.price * item.quantity;
        }
    }

    return 'Not found';
}

// console.log(calcTotalPrice(stones, "Смарагд"));
// console.log(calcTotalPrice(stones, "Діамант"));
// console.log(calcTotalPrice(stones, "Сапфір"));
// console.log(calcTotalPrice(stones, "Щебінь"));
// console.log(calcTotalPrice(stones, "abra"));


// ЗАВДАННЯ 40. Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій. Типи транзакцій: покласти гроші чи зняти з рахунку. Кожна транзакція це об'єкт із властивостями id, type, amount.

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'wathdraw',
}

Object.freeze(Transaction);

let idCounter = 1;

const account = {
    balance: 0,
    transactions: [],
    // Створює та повертає об'єкт транзакції, приймає суму та тип.
    createTransaction(amount, type) {
        return {
            id: idCounter++,
            type,
            amount
        }
    },
    // Відповідає за додавання суми до балансу, приймає суму, викликає createTransaction після чого додає його до історії транзакцій,
    deposit(amount) {
        if (amount <= 0) {
            return "Error";
        }
        this.balance += amount;
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
    },
    // Відповідає за зняття суми з балансу, приймає сумуб викликає createTransaction після чого додає його до історії транзакцій. Якщо amount більша ніж поточний баланс - виводить повідомлення про те, що недостатньо коштів
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("not enough money");
            return;
        }
        this.balance -= amount;
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
    },
    // Повертає поточний баланс
    getBalance() {
        return this.balance;
    },
    // Шукає та повертає об'єкт транзакції по id
    getTransactionDetails(id) {
        for (const item of this.transactions) {
            if (item.id === id) {
                return item;
            }
        }
        return "not found";
    },
    // Повертає певну кількість коштів певного типу транзакцій з усієї історії.
    getTransactionTotal(type) {
        let sum = 0;
        for (const item of this.transactions) {
            if (item.type === type) {
                sum+=item.amount;
            }
        }
        return sum;
    },
}

// console.log(account.createTransaction(2000, Transaction.DEPOSIT))
account.deposit(2000);
account.deposit(3000);
account.deposit(4000);
account.deposit(100);
// console.log(account.transactions)
// console.log(account.balance)

account.withdraw(1000);
account.withdraw(400);
account.withdraw(800);
// console.log(account.transactions)
// console.log(account.balance)
// account.withdraw(5000);
// console.log(account.transactions)
// console.log(account.balance)

// console.log(account.getBalance())

// console.log(account.getTransactionDetails(145698))

// console.log(account.getTransactionTotal(Transaction.WITHDRAW));





// ЗАВДАННЯ 41. Напиши функцію, яка буде приймати три параметри та повертати об'єкт покупки.

function createBusket(product, quantity, price) {
    
    return {
        name: product,
        price,
        quantity,
        totalPrice: price * quantity,
    }
}

// console.log(createBusket("apple", 100, 5));


// ЗАВДАННЯ 42. Напиши функцію для ведення статистику комп'ютерного клубу, яка повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютера.

const players = {
    Den: 60,
    Kate: 130,
    William: 45,
    Matthew: 120,
    Ethan: 40,
    David:55,
}

function getTime(obj) {
    const players = Object.keys(obj);
    const counter = players.length;
    let totalTime = 0;
    for (const player of players) {
        totalTime += obj[player];
    }
    return `Count of players ${counter}, average time ${totalTime/counter}`
}


// function getTime(obj) {
//     const players = Object.entries(obj);
//     const counter = players.length;
//     let totalTime = 0;
//     for (const player of players) {
//         totalTime += player[1];
//     }
   
//     return `Count of players ${counter}, average time ${totalTime/counter}`
// }


// console.log(getTime(players));


// ЗАВДАННЯ 43. Напиши функцію яка буде приймати масив та назву книги. Повертає імена юзерів, в яких є дана книга. Порахувати вік всіх юзерів, у котриє є ключ age

const friends = [
    { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
    { name: "Bob", books: ["War", "Romeo"], age: 26 },
    { name: "Alice", books: ["War", "Romeo"], },
    {name: "Iryna", books: ["Bible", "Harry Potter", "War", "Romeo"], age: 26},
]


function getUsers(arr, bookName) {
    let users = [];
    let totalAge = 0;
    for (const user of arr) {
        const { name, books, age } = user;
        if (books.includes(bookName)) {
            users.push(name)
        }
        if (user.hasOwnProperty("age")) {
            totalAge += age;
        }
    }
    console.log(totalAge);
    return users.join(", ")
}

// console.log(getUsers(friends, "Bible"));
// console.log(getUsers(friends, "War"));


// ЗАВДАННЯ 44. Створи метод об'єкту, який буде приймати назву факультету та повертати список імен учнів. Створи метод об'єкту, який буде приймати назву факультету та повертати кількість очків факультету.

const hogvarts = {
    griffindor: [
        {   name: "Harry",
            points:17,
        },
        {   name: "Hermiona",
            points:19,
        },
        {   name: "Ron",
            points:14,
        },
    ],
    slizerin: [
        {   name: "Draco",
            points:17,
        },
        {   name: "Goyl",
            points:14,
        },
        {   name: "Crabbe",
            points:5,
        },
    ],
    getUserList(faculty) {
        if (!this.hasOwnProperty(faculty)) {
            return `There is no such faculty`
        }
        let students = [];
        for (const student of this[faculty]) {
            students.push(student.name);
        }
        return students.join(", ")
    },
    getTotalPoints(faculty) {
        if (!this.hasOwnProperty(faculty)) {
           return `There is no such faculty`
        }
        let totalPoints = 0;
        for (const student of this[faculty]) {
            totalPoints += student.points;
        }
        return totalPoints;
    },
}

// console.log(hogvarts.getUserList('griffindor'));
// console.log(hogvarts.getUserList('slizerin'));
// console.log(hogvarts.getUserList('sliz'));

// console.log(hogvarts.getTotalPoints('slizerin'));
// console.log(hogvarts.getTotalPoints('griffindor'));
// console.log(hogvarts.getTotalPoints('sliz'));



// ЗАВДАННЯ 45. Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI(weight, height) {
//     const numericWeight = Number(weight.replace(",", "."));
//     const numericHeight = Number(height.replace(",", "."));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// calcBMI('88.3', '1.75');

function calcBmi({ weight, height }) {
    const numericWeight = Number(weight.replace(",","."));
    const numericHeight = Number(height.replace(",","."));
    return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

// calcBmi({ weight: '88,3', height: '1.75' });
// console.log(calcBmi({ weight: '88.3', height: '1.75' }));



// ЗАВДАННЯ 46. Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContacts(names, phones) {
//     names = names.split(", ");
//     phones = phones.split(",");
//     for (let i = 0; i < names.length, i < phones.length; i += 1){
//         console.log(`${names[i]} - ${phones[i]}`);
//     }
// }

// printContacts('Jacob, William, Solomon, Artemis, Iryna', '80954610147, 80954612149, 80509022230, 80955026931');

/**
 * Bиводить у консоль ім'я та номер користувача.
 * @param {Object} obj 
 */

function printContacts({names, phones}) {
    names = names.split(", ");
    phones = phones.split(",");
    for (let i = 0; i < names.length, i < phones.length; i += 1){
        console.log(`${names[i]} - ${phones[i]}`);
    }
}

// printContacts({
//     names: 'Jacob, William, Solomon, Artemis, Iryna',
//     phones: '80954610147, 80954612149, 80509022230, 80955026931',
// });



// ЗАВДАННЯ 47. Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport(companyName, repairBots, defenceBots) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// getBotReport("Cyberdyne Systems", 150, 50);

/**
 * 
 * @param {Object} obj 
 * @returns {String} BotReport
 */

function getBotReport({companyName, repairBots, defenceBots}) {
    return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

// console.log(getBotReport({companyName:"Cyberdyne Systems",repairBots: 150, defenceBots: 50}))


// ЗАВДАННЯ 48. Перепиши функцію так, щоб вона приймала один об'єкт параметрів зз властивостями companyName та stock та виводила повідомлення про кількість товарів будь-якої компанії.

// function getStockReport(companyName, stock) {
//     let total = 0;
//     for (const value of Object.values(stock)) {
//         total += value;
//     }
//     return `${companyName} has ${total} items in stock`;
// }


// console.log(getStockReport("Cyberdyne Systems", { repairBots: 150, defenceBots: 50 }));
// console.log(getStockReport("Belacci", { shoes: 20, skirts: 10, hats:5, }));

/**
 * 
 * @param {Object} obj 
 * @returns {String} StockReport
 */

function getStockReport({companyName, stock}) {
    let total = 0;
    for (const value of Object.values(stock)) {
        total += value;
    }
    return `${companyName} has ${total} items in stock`;
}


// console.log(getStockReport({companyName:"Cyberdyne Systems", stock: { repairBots: 150, defenceBots: 50 }}));
// console.log(getStockReport({ companyName: "Belacci",stock: { shoes: 20, skirts: 10, hats:5, }}));



// ЗАВДАННЯ 49. Доповни функцію так, щоб вона повертала об'єкт контакту з доданими властивостями id та createAt та list зі значенням default, якщо в зфкешфд сщтефсе немає такої властивості.

/**
 * 
 * @param {Object} partialContact 
 * @returns {Object} new Contact
 */

function createContact(partialContact) {
    return {
        id: generateId(),
        createAt: new Date(),
        list: "default",
        ...partialContact,
    }
}

function generateId() {
    return "_" + Math.random().toString(36).substring(2, 9);
}

// console.log(createContact({ name: "mango", email: "mango@mail.com", list: "friends" }));
// console.log(createContact({ name: "poly", email: "poly@mail.com", }));




// ЗАВДАННЯ 50. Напиши функцію transformUserName(user) так, щоб вона повертала новий об'єкт із властивістю fullName замість firstName та LastName.

/**
 * 
 * @param {Object} obj 
 * @returns {Object} user name
 */

function transformUserName({firstName, lastName, ...props}) {
    return {
        ...props,
        fullName: `${firstName} ${lastName}`,
 }
}

// console.log(transformUserName({
//     id: 1,
//     firstName: "Iryna",
//     lastName: "Tololo",
//     email: "tololo@mail.com",
//     friendCount:3,
// }))



// ЗАВДАННЯ 51. Деструктуризуй об'єкт таким чином, щоб отримати name, surname, username.

const user_1 = {
    id: 1,
    username: "harry_potter",
    profile: {
        name: "harry",
        surname: "potter",
        age:25,
    }
}

const { username, profile: { name, surname } } = user_1;
// console.log(username, name, surname);



// ЗАВДАННЯ 52. Допиши функцію таким чином, щоб кожна властивість об'єкта була незалежним параметром.

const product = {
    name: "Smart TV",
    price: 25000,
    category: "Electronics",
    details: {
        brand: "Samsung",
        color: "Black",
        weight:15.5,
    }
}


/**
 * 
 * @param {Object} obj 
 */

function displayProductInfo({name, price,category, details:{brand,color,weight}={}}={}) {
    console.log(name);
    console.log(price);
    console.log(category);
    console.log(brand);
    console.log(color);
    console.log(weight);
}

// displayProductInfo(product);



// ЗАВДАННЯ 53. Напиши функцію так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createAt, а також list зі значенням default, якщо немає такої властивості.

/**
 * 
 * @param {Object} partialContact 
 * @returns {Object} new contact
 */

function createContact_1(partialContact) {
    return {
        id: "_" + Math.random().toString(36).substring(2, 9),
        createAt: new Date(),
        list: "default",
        ...partialContact,
    }
}

// console.log(createContact_1({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
// }));

// console.log(createContact_1({
//     name: "Poly",
//     email: "poly@mail.com",
// }))


// ЗАВДАННЯ 54. Напиши функцію так, щоб вона повертала новий об'єкт із властивістю fullName замість firstNAme та lastName.

/**
 * 
 * @param {Object} user 
 * @returns {Object} profile
 */


// Варіант 1
function transformUserName_1({firstName, lastName, ...props}={}) {
    return {
        fullName: `${firstName} ${lastName}`,
        ...props,
    }
}

// Варіант 2
// function transformUserName_1(obj={}) {
//     const keys = Object.keys(obj);
//     const profile = {};
//     const fullName = [];
//     for (const key of keys) {
//         if (key === "firstName" || key === "lastName") {
//             fullName.push(obj[key]);
//         } else {
//             profile[key] = obj[key];
//         }
//     }
//     profile.fullName = fullName.join(" ");
//     return profile;
// }


// Варіант 3
// function transformUserName_1(obj={}) {
//     const firstName = obj.firstName;
//     const lastName = obj.lastName;

//     delete obj.firstName;
//     delete obj.lastName;

//     obj.fullName = `${firstName} ${lastName}`;
//     return obj;
// }

// console.log(transformUserName_1({
//     id: 1,
//     firstName: "Iryna",
//     lastName: "Tololo",
//     email:"tololo@mail.com",
// }))

// console.log(transformUserName_1())



// ЗАВДАННЯ 55. Необхідно зробити рефакторинг функції calculateHousePerimeter, так щоб вона приймала об'єкт з параметрами будинку, включаючи довжини сторін будинку. Функція повинна розрахувати та повернути периметр будинку.

// function calculateHousePerimeter(a, b, c, d) {
//     const perimeter = a + b + c + d;
//     return perimeter;
// }

// const perimeter = calculateHousePerimeter(10, 15, 10, 15);
// console.log(`Периметр будинку - ${perimeter}`)


function calculateHousePerimeter({sideA: a, sideB: b, sideC: c, sideD: d}={}) {
    const perimeter = a + b + c + d;
    return perimeter;
}

const perimeter = calculateHousePerimeter({ sideA: 10, sideB: 15, sideC: 10, sideD: 15 });
// console.log(`Периметр будинку - ${perimeter}`)







const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },

    addPotion(newPotion) {
        for (const item of this.potions) {
            if (newPotion.name === item.name) {
             return `Error! Potion ${newPotion} is already in your inventory!`;
            }
        }
  
      this.potions.push(newPotion);
    },

    removePotion(potionName) {
        for (let i = 0; i < this.potions.length; i += 1) {
            console.log(this.potions[i])
        } 
      const potionIndex = this.potions.indexOf(potionName);
  
      if (potionIndex === -1) {
        return `Potion ${potionName} is not in inventory!`;
      }
  
      this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
      const potionIndex = this.potions.indexOf(oldName);
  
      if (potionIndex === -1) {
        return `Potion ${oldName} is not in inventory!`;
      }
  
      this.potions.splice(potionIndex, 1, newName);
    },
    // Change code above this line
};
  

// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }))
// console.log(atTheOldToad.potions)


// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"))
// console.log(atTheOldToad.potions)


// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {
//       array[i] = array[i] * value;
//     }
//   };




//* ---------------------------------------------------------------------------------------callback / arrow function, Array methods

// ЗАВДАННЯ 57. Фільтрація унікальних елементів 

const students_1 = [
    { name: "Манго", courses: ["математика", "фізика"] },
    { name: "Полі", courses: ["інформатика", "математика"] },
    { name: "Ківі", courses: ["фізика", "біологія"] },
  ];
  
const allCourses = students_1.flatMap(student => student.courses);
const uniqueCourses = allCourses.filter(
    (course, index, array) => array.indexOf(course) === index
  );




// ЗАВДАННЯ 58. Напиши ф-цію createProduct(obj, callback), яка додає id, logProduct - callback, який логує продукт, logTotalPrice - callback, який логує загальну вартість

/**
 * Додає унікальний id до об'єкта продукту і викликає колбек
 * @param {{ name: string, price: number, quantity: number, [key: string]: any }} obj - Об'єкт продукту
 * @param {(product: object) => void} callback - Колбек-функція, що приймає продукт
 * @returns {void}
 */

function createProduct_1(obj, callback) {
    obj.id = "_" + Math.random().toString(36).substring(2, 9);
    callback(obj);
}

/**
 * Виводить назву продукту в консоль
 * @param {{ name: string }} obj - Об'єкт продукту
 * @returns {void}
 */

function logProduct(obj) {
    console.log(obj.name);
}

/**
 * Виводить загальну ціну продукту (price × quantity) в консоль
 * @param {{ price: number, quantity: number }} obj - Об'єкт продукту
 * @returns {void}
 */

function logTotalPrice(obj) {
    console.log(obj.price * obj.quantity);
}

// createProduct_1({ name: "apple", price: 30, quantity: 3 }, logProduct);
// createProduct_1({ name: "apple", price: 30, quantity: 3 }, logTotalPrice);



// ЗАВДАННЯ 59. Додайте об'єкту account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError)

const TRANSACTION_LIMIT = 1000;

const bankAccount = {
    userName: "Jacob",
    balance: 400,
    withdraw(amount, onSuccess, onError) {
        if (amount > TRANSACTION_LIMIT ) {
            onError(`TRANSACTION LIMIT - ${TRANSACTION_LIMIT}`);
            return;
        } else if (amount > this.balance) {
            onError(`not enough money`);
            return;
        }
        this.balance -= amount;
        onSuccess(`The transaction was successful. Your balance is ${this.balance}`);
    },
    deposit(amount, onSuccess, onError) {
        if (amount > TRANSACTION_LIMIT || amount <= 0) {
            onError('Amount greater than the limit');
            return;
        }
        this.balance += amount;
        onSuccess(`The transaction was successful. Your balance is ${this.balance}`);
    },
}

function handleSuccess(message) {
    console.log(`✔Sucess! ${message}`);
}

function handleError(message) {
    console.log(`❌Error! ${message}`);
}

// bankAccount.withdraw(2000, handleSuccess, handleError);
// bankAccount.withdraw(600, handleSuccess, handleError);
// bankAccount.withdraw(300, handleSuccess, handleError);
// bankAccount.deposit(2000, handleSuccess, handleError);
// bankAccount.deposit(600, handleSuccess, handleError);
// bankAccount.deposit(-200, handleSuccess, handleError);




// ЗАВДАННЯ 60. Напиши ф-ію each(array, callback) яка застосовується до кожного елементу масиву, повинна повернути новий масив, елементами якого будуть результати виклику callback.

/**
 * Створює новий масив, у якому кожен елемент — результат callback-функції, застосованої до відповідного елемента вхідного масиву.
 * @param {Array<any>} array - Вхідний масив будь-яких значень
 * @param {(item: any) => any} callback - Функція, яка обробляє кожен елемент масиву
 * @returns {Array<any>} Новий масив після трансформації елементів
 */

function each(array, callback) {
    return array.map(item => callback(item));
}

// console.log(each([64, 49, 36, 25, 16], function (value) { return value * 2 }));
// console.log(each([64, 49, 36, 25, 16], function (value) { return value - 10 }));
// console.log(each([64, 49, 36, 25, 16], function (value) { return Math.sqrt(value) }));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) { return Math.ceil(value) }));




// ЗАВДАННЯ 61. Виконайте рефакторинг за допомогою forEach та arrow function.

// function logItems(items) {
//     for (let i = 0; i < items.length; i += 1){
//         console.log(`${i+1} - ${items[i]}`)
//     };
// };

// logItems(['Mango', 'Poly', "Ajax"]);


const logItems_1 = items => items.forEach((item, idx) => console.log(`${idx+1} - ${item}`));


// logItems_1(['Mango', 'Poly', "Ajax"]);


// ЗАВДАННЯ 61. Повернути масив моделей всіх автомобілів

const cars = [
    { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true, },
    { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true, },
    { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false, },
    { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true, },
    { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false, },
    { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false, },
    { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true, },
    { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 22120, onSale: true, },
    { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 24045, onSale: true, },
    {make:"Ford", model:"Explorer", type: "suv", amount:6, price:31660, onSale:false,},
]

const getModels = cars => cars.map(car => car.model);
// console.log(getModels(cars));



// ЗАВДАННЯ 62. Функція makeCarsWithDiscount повертає новий масив об'єктів зі зміненими цінами залежно від переданої знижки.

const makeCarsWithDiscount = (cars, discount) => cars.map(car => {
    car.price = car.price * (1 -discount);
    return car;
    })


// console.log(makeCarsWithDiscount(cars, 0.2));



// ЗАВДАННЯ 63. Функція filterByPrice повертає масив авто, ціна яких менша threshold.

const filterByPrice = (cars, threshold) => cars.filter(({ price }) => price < threshold);

// console.log(filterByPrice(cars, 25000));



// ЗАВДАННЯ 64. Функція getCarsWithDiscount повертає масив авто, властивість onSale яких true.

const getCarsWithDiscount = (cars) => cars.filter(({ onSale }) => onSale);

// console.log(getCarsWithDiscount(cars));



// ЗАВДАННЯ 65. Функція getCarsWithType повертає масив авто, тип якого збігається зі значенням type.

const getCarsWithType = (cars, type) => cars.filter(({ type: carType }) => carType === type);

// console.log(getCarsWithType(cars, 'suv'));



// ЗАВДАННЯ 66. Функція getCarsByModel повертає масив авто, модель якого збігається зі значенням model.

const getCarsByModel = (cars, model) => cars.find(({ model: carModel }) => carModel === model);

// console.log(getCarsByModel(cars, 'F-150'));



// ЗАВДАННЯ 67. Функція getCarsByModel повертає масив авто, модель якого збігається зі значенням model.

const getCarByModel = (cars, model) => cars.find(({ model: carModel }) => carModel === model);

// console.log(getCarByModel(cars,'F-150'));



// ЗАВДАННЯ 68. Функція sortByAscendingAmount повертає новий масив авто, відсортований за зростанням значення властивості amount.

const sortByAscendingAmount = (cars) => [...cars].sort((a, b) => a.amount - b.amount);

// console.log(sortByAscendingAmount(cars));



// ЗАВДАННЯ 69. Функція sortByDescendingPrice повертає новий масив авто, відсортований за спаданням значення властивості price.

const sortByDescendingPrice = (cars) => [...cars].sort(({ price: a }, { price: b }) => b - a);

// console.log(sortByDescendingPrice(cars));



// ЗАВДАННЯ 70. Функція sortByModel повертає новий масив авто, відсортований за назвою моделі в алфавітному та зворотному порядку, в заледності від значення параметра ордер.

const sortByModel = (cars, order) => {
    if (order === 'asc') {
        return [...cars].sort(({ model: a }, { model: b }) => a.localeCompare(b));
    }
if (order === 'desc') {
    return [...cars].sort(({ model: a }, { model: b }) => b.localeCompare(a));
}}

// console.log(sortByModel(cars, 'asc'));
// console.log(sortByModel(cars, 'desc'));



// ЗАВДАННЯ 71. Функція getTotalAmount повертає загальну кулькість автомобілів.

const getTotalAmount = (cars) => cars.reduce((acc, { amount }) => acc+ amount, 0);

// console.log(getTotalAmount(cars));



// ЗАВДАННЯ 72. Функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

const getAvailableCarNames = (cars) => cars.filter(({ onSale }) => onSale).map(({model})=>model);

// console.log(getAvailableCarNames(cars));



// ЗАВДАННЯ 73. Функція getSortedCarsOnSale повертає масив автомобілів на розпродажі, відсортованих за зростанням ціни.

const getSortedCarsOnSale = (cars) => cars.filter(({ onSale }) => onSale).sort(({ price: a }, { price: b }) => a - b);

// console.log(getSortedCarsOnSale(cars));



// ЗАВДАННЯ 74. Функція getNumberOfLetters повертає об'єкт де ключ це літера, а значення - скільки разів вона зустрічається в рядку.

const str = 'dsfhlaflflabjnjvkdsdsdslflnkaabvklsehuabbkal';

const getNumberOfLetters = (str) => str.split('').reduce((acc, letter, idx, arr) => {
arr.indexOf(letter) === idx ? acc[letter] = 1 : acc[letter] += 1;
    return acc;
}, {});

// const getNumberOfLetters = (str) => str.split('').reduce((acc, letter) => {
//     acc.hasOwnProperty(letter) ? acc[letter] += 1 : acc[letter] = 1;
//     return acc;
// }, {});

// console.log(getNumberOfLetters(str));



// ЗАВДАННЯ 75.

const arr_2 = ["Honda", "BMW", 'Audi', 'Skoda', 'Ford'];

// const result_2 = (cars) => {
//     if (!cars.length) {
//         return 'sorry, the list is empty';
//     }
//     return cars.reduce((acc, item, idx, arr) => {
//     acc += `${idx + 1} - ${item}\n`;
//     return acc
// }, `Total amount of cars is ${cars.length}\n`)};

const result_2 = (cars) => {
    return cars.reduce((acc, item, idx, arr) => {
    acc += `${idx + 1} - ${item}\n`;
    return acc
}, cars.length? `Total amount of cars is ${cars.length}\n`:'sorry, the list is empty')};

// console.log(result_2(arr_2))
// console.log(result_2([]))




// ЗАВДАННЯ 76. Write a function to create a new array of objects containing data on the average score of each student..

// const students = [
//     { name: "John", grades: [80, 85, 90] },
//     { name: "Alice", grades: [90, 95, 92] },
//     { name: "Bob", grades: [70, 80, 75] },
//     { name: "Emily", grades: [95, 92, 88] },
//     { name: "David", grades: [85, 88, 90] },
// ];

// function getAverage(students) {
//   return students.map(student => {
//       let averageScore=0;
//       student.grades.forEach(grade => averageScore += grade);
//       return {
//           ...student,
//           average : (averageScore / student.grades.length).toFixed()
//       }
//     })
// }

function getAverage(students) {
  return students.map(({name, grades}) => {
      const total = grades.reduce((acc, item) => acc += item);
      return { name, average: Math.round(total / grades.length) };
    })
}

// console.log(getAverage(students));



// ЗАВДАННЯ 77. Write a function to create a new array containing only students over 20 years old.

const students = [
    { name: "John", age:20, gpa:3.8 },
    { name: "Alice", age:21, gpa:3.2 },
    { name: "Bob", age:19, gpa:3.5 },
    { name: "Emily", age:22, gpa:3.9 },
    { name: "David", age:20, gpa:3.7 },
];

/**
 * Filter Array of objects by age of student and return student's name.
 * @param {Object[]} students - Array of student objects with at least {name, age}.
 * @returns {string[]} Array of student names older than 20
 */

function getAdult(students) {
    return students.filter(student => student.age > 20).map(student=>student.name);
}

// console.log(getAdult(students));



// ЗАВДАННЯ 78. Write a function to search for a book by its title. If the book is not found, return the string ‘Not found’.

// const books = [
//     { title: 'JavaScript', author: "Douglas", year: 2008 },
//     { title: 'Clean Code', author: "Martin", year: 2008 },
//     { title: 'The Pragmatic Programmer', author: "Hunt", year: 1999 },
//     { title: 'Design Patterns', author: "Gamma", year: 2008 },
//     {title: 'Refactoring', author: "Fowler", year: 2008},
// ]

/**
 * Searches for a book by its title and returns the book object if found, 
 * or a string "not found" if the book isn't found.
 * 
 * @param {Object[]} arr Array of books objects with at least {title, author, year}.
 * @param {String} title The title of the book to search for.
 * @returns {Object|String} The book object if found, otherwise the string "not found".
 */

function getBook(arr, title) {
    const book = arr.find(book => book.title.toLowerCase() === title.toLowerCase());
    return book || "not found";
}

// console.log(getBook(books,'javaSCript'));
// console.log(getBook(books,'java'))



// ЗАВДАННЯ 79. Write a function to calculate the total cost of all items in the arrey as the product of price and quantity and then sum it with other items. The result should be the total cost of all items.

// const products = [
//     { id: 1, name: "T-shirt", price: 20, quantity: 3 },
//     { id: 2, name: "Jeans", price: 50, quantity: 2 },
//     { id: 3, name: "Sneakers", price: 80, quantity: 1 },
//     { id: 4, name: "Hat", price: 15, quantity: 4 },
//     { id: 5, name: "Socks", price: 5, quantity: 5 },
// ];

/**
 *  Calculates the total cost of all items in the array.
 * @param {Object[]} arr Array of product objects with at least {id, id, price,quantity}.
 * @returns {number} the total cost of all products
 */
function getTotalCost(arr) {
   return arr.reduce((acc, {price, quantity})=> acc+=price*quantity,0)
}

// console.log(getTotalCost(products));



// ЗАВДАННЯ 80. Write a function to sort books by year of publication in descending order.

const books = [
    { title: 'JavaScript', author: "Douglas", year: 2008 },
    { title: 'Clean Code', author: "Martin", year: 2008 },
    { title: 'The Pragmatic Programmer', author: "Hunt", year: 1999 },
    { title: 'Design Patterns', author: "Gamma", year: 1994 },
    {title: 'Refactoring', author: "Fowler", year: 1999},
]

/**
 * sort books by year of publication in descending order
 * @param {Object[]} arr Array of books objects with at least {title, author, year}.
 * @returns {Object[]} new sorted arrey by year of publication
 */

function sortDesc(arr) {
    return [...arr].sort(({ year: a }, { year: b }) => b - a);
}

// console.log(sortDesc(books));



// ЗАВДАННЯ 81. Write a function to get an arrey of products names with price less then 2 dollars and sort them alphabetically.


const products = [
    { id: 2, name: "Banana", price: 0.99 },
    { id: 1, name: "Apple", price: 1.99},
    { id: 3, name: "Orange", price: 2.49 },
    { id: 4, name: "Grapes", price: 3.99},
];


/**
 * Gets an arrey of products names with price less then 2 dollars and sort them alphabetically
 * @param {Object[]} arr Array of product objects with at least {id, name, price}.
 * @returns {String} Products list or "not found"
 */
function getSortedProducts(arr) {
    const products = arr.filter(item => item.price < 3).map(item => item.name).sort((a, b) => a.localeCompare(b));
    return products.reduce((acc,item,idx)=> acc+=`${idx+1} - ${item}\n`, products.length ? 'Product list:\n' :"not found");
};

// console.log(getSortedProducts(products));





//* ---------------------------------------------------------------------------------------Module 5: this


// ЗАВДАННЯ 82. Write a method that receives the name of a stone and then calculates and returns the total price of stones with that name.

// const chopShop = {
//     stones: [
//         { name: "Emerald", price: 1300, quantity: 4 },
//         { name: "Diamond", price: 2700, quantity: 3 },
//         { name: "Sapphire", price: 1400, quantity: 7 },
//         { name: "Ruby", price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
//         for (const stone of this.stones) {
//             if (stone.name === stoneName) {
//                 return stone.price * stone.quantity;
//             }
//         }
//     },
// };

const chopShop = {
    stones: [
        { name: "Emerald", price: 1300, quantity: 4 },
        { name: "Diamond", price: 2700, quantity: 3 },
        { name: "Sapphire", price: 1400, quantity: 7 },
        { name: "Ruby", price: 800, quantity: 2 },
    ],
    calcTotalPrice(stoneName) {
        const { price, quantity } = this.stones.find(({ name }) => name === stoneName);
        return price * quantity;
    },
}

const shop = {
    stones: [
        { name: "Щебінь", price: 1000, quantity: 4 },
        { name: "Пісок", price: 1000, quantity: 3 },
    ],
}

// console.log(chopShop.calcTotalPrice("Emerald"));
// console.log(chopShop.calcTotalPrice("Diamond"));
// console.log(chopShop.calcTotalPrice("Sapphire"));
// console.log(chopShop.calcTotalPrice("Ruby"));

// console.log(chopShop.calcTotalPrice.call(shop, "Щебінь"));
// console.log(chopShop.calcTotalPrice.call(shop, 'Пісок'));

// const shopCost = chopShop.calcTotalPrice.bind(shop);
// console.log(shopCost('Щебінь'));
// console.log(shopCost("Пісок"));



// Task 83. Refactor the object's methods so that the code works.

const phoneBook = {
    contacts: [],
    add(contact) {
        const newContact = {
            list: 'default',
            ...contact,
            id: generateId(),
            createdAt: Date.now(),
        };
        this.contacts.push(newContact);
    },
};

// console.log(phoneBook.add({ name: "Mango", email: "mango@gmail.com", list: 'friends' }));
// console.log(phoneBook.contacts);


// Task 84. Create a calculator object with three methods.

const calculator = {
    read(a, b) {
        this.a = a ?? 0;
        this.b = b ?? 0;
    },
    add() {
        return this.a  + this.b;
    },
    mult() {
        return this.a  * this.b;
    },
};

const calc2 = {};

// console.log(calculator.read(5,5));
// console.log(calculator.add());
// console.log(calculator.mult());
// console.log(calculator.read.call(calc2, 4, 4));
// console.log(calculator.add.call(calc2));
// console.log(calculator.mult.call(calc2));



// Task 85. Create an object cruiseControl with methods accelerate and decrease and also properties speed and brand.

const cruiseControl = {
    speed: 0,
    brand: "Audi",
    accelerate() {
        this.speed += 10;
        console.log(`Авто ${this.brand} прискорюється з швидкістю 10 км/год, поточна швидкість - ${this.speed} км/год`)
    },
    decrease() {
        this.speed -= 10;
        if (this.speed <= 0) {
            console.log(`Авто ${this.brand} зупинилося.`);
            this.speed = 0;
            return;
        }
        console.log(`Авто ${this.brand} уповільнюється з швидкістю 10 км/год, поточна швидкість - ${this.speed} км/год`)
    },
};


// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();



// Task 86. Create a product object with a discount method that will receive the customer's discount as a percentage and return the total cost of the products, taking into account the discount. Also, create a client object that contains the name and personal discount, a purchase method that will call the method to calculate the total cost and log the the purchase message.

const purchaseOfProduct = {
    name: "Smartphone",
    price: 500,
    discount(percent) {
        return this.price *(100 - percent) / 100;
    }
};

const client = {
    name: "Iryna",
    discount: 5,
    purchase() {
        const totalCost = purchaseOfProduct.discount(this.discount);
        console.log(`${this.name} has purchased the goods at a ${this.discount} percent discount. The amount payable is ${totalCost} hryvnia.`)
    }
}

// console.log(purchaseOfProduct.discount(50));
// client.purchase();



// Task 87. Create a function that will be recieve one parameter - the speed limit and log the message indicating weather we are driving at a safe speed or exceeding it.

const SAFE_SPEED = 60;

const tesla = {
    brans: "Tesla",
    speed: 30,
}

const audi = {
    brans: "Audi",
    speed: 70,
}

function speedSensor(maxSpeed) {
    return this.speed > maxSpeed ? "We are exceeding the speed limit" : "We are driving at a safe speed";
}

// console.log(speedSensor.call(tesla, SAFE_SPEED));
// console.log(speedSensor.call(audi, SAFE_SPEED));







//* ---------------------------------------------------------------------------------------Module 5: class


// Task 87. Create a Blogger class to create an object with the following properties: email, age, numberOfPosts, topics. It should have one parameter. Add a getInfo() method that returns a message, and an updatePostCount(value) method that receives multiple posts to add to the client.

class Blogger{
    constructor({email, age, numberOfPosts=0, topics=[],}={}) {
        this.email = email;
        this.age = age;
        this.numberOfPosts = numberOfPosts;
        this.topics = topics;
    }
    getInfo() {
        return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
    }
    updatePostCount(value) {
        this.numberOfPosts += value;
        return this.numberOfPosts;
    }
}

const mango = new Blogger({
    email: "mango@mail.com",
    age: 18,
    numberOfPosts: 1,
    topics: ['tech', 'cooking'],
})

// console.log(mango.getInfo());
// console.log(mango.updatePostCount(2));



// Task 88. Create a Storage class to create objects for managing a product inventory with an item property (array). Add a getItems() method that returns an array of products, an addItem(item) method that receives a new item and adds it to the current ones, and a removeItem(item) method that receives an item and, if it exists, deletes it.

class Storage {
    constructor(items=[]) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        if (!this.items.includes(item)) {
            this.items.push(item);
            return;
        }
        return "this product already exists";
    }
    removeItem(item) {
        const idx = this.items.indexOf(item);
        if (!!~idx) {
            this.items.splice(idx, 1);
        }

    }
}

const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);
// console.log(storage.getItems())

// console.log(storage.addItem('🍕'));
// console.log(storage.getItems());

// console.log(storage.addItem('🍕'));
// console.log(storage.getItems());

// console.log(storage.removeItem('🍕'));
// console.log(storage.getItems());




// Task 89. Create a User class with login and email properties, that are private. Access them using get() and set().

class User {
    #login;
    #email;
    constructor({ login, email }) {
        this.#login = login;
        this.#email = email;
    }
    get login() {
        return this.#login;
    }
    set login(value) {
        if (this.#login !== value) {
            this.#login = value;
        }
    }
    get email() {
        return this.#email;
    }
    set email(value) {
        if (this.#email !== value) {
            this.#email = value;
        }
    }
}

const newMango = new User({
    login: "Mango",
    email: "mango@mail.com",
});

// console.log(newMango.login);
// newMango.login = "MangoDB";
// console.log(newMango.login);

// console.log(newMango.email);
// newMango.email = "mangodb@mail.com";
// console.log(newMango.email);




// Task 90. Create a Notes class with an items property that contains a collection of notes. Each note is an object with text and priority properties. Add a static Priority property that stores an object with priorities.

class Notes {
    static Priority ={
        LOW: "low",
        NORMAL: "normal",
        HIGH: "high",
    }
    constructor(items=[]) {
        this.items = items;
    }

    addNote(note) {
        const result = this.items.some(({ text }) => text === note.text);
        if (!result) {
            this.items.push(note);
            return;
        }
        console.log("Such note already exists");
    }
    removeNote(text) {
        const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
        if (!!~idx) {
            this.items.splice(idx, 1)
        }
    }
    updatePriority(text, newPriority) {
        const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
        if (!!~idx) {
            this.items[idx].priority = newPriority;
        }
    }
}


const myNotes = new Notes([]);

// console.log(myNotes.items);
// myNotes.addNote({ text: "My first note", priority: Notes.Priority.LOW });
// myNotes.addNote({ text: "My second note", priority: Notes.Priority.NORMAL });
// myNotes.addNote({ text: "My second note", priority: Notes.Priority.NORMAL });
// myNotes.addNote({ text: "My third note", priority: Notes.Priority.NORMAL });
// console.log(myNotes.items);

// myNotes.removeNote("My first note");
// console.log(myNotes.items);

// myNotes.updatePriority("My second note", Notes.Priority.HIGH);
// console.log(myNotes.items);



// Task 91. Create a Toggle class that receives a setting object {isOpen: boolean} and creates a single property "on" - the on and off state (true/false). The default value of the ‘on’ property should be false.

class Toggle {
    constructor({isOpen=false}) {
        this.on = isOpen; 
    }
    toggle() {
        this.on = !this.on;
    }
}

const firstToggle = new Toggle({ isOpen: false });

// console.group("firstToggle");
// console.log("before",firstToggle.on)
// firstToggle.toggle();
// console.log("after",firstToggle.on)
// console.groupEnd("firstToggle");



// Task 92. Create a Rectangle class that has private properties - width and height and also get and set for them.

class Rectangle {
    #width
    #height
    constructor({width, height}={}) {
        this.#width = width;
        this.#height = height;
    }
    get width() {
        return this.#width;
    }
    set width(newWidth) {
        if (newWidth > 0 & typeof newWidth === 'number') {
            this.#width = newWidth;
        }
    }
    get height() {
        return this.#height;
    }
    set height(newHeight) {
         if (newHeight > 0 & typeof newHeight === 'number') {
            this.#height = newHeight;
        }
    }
}

const item = new Rectangle({ width: 10, height: 10 });
// console.log(item.height, item.width);
// item.height = 50;
// item.width = 100;
// console.log(item.height, item.width);



// Task 93. Create a Student class that inherits from the User class. The Student class must have a private property "name" (inherited from the User class), a private property "surname" (inherited from the User class), and a property "year" (year of admission to the university). The class must have getFullName method (inherited from the User), getCourse method that log the current students course.

class StudentUser {
    #name;
    #surname;
    constructor(name, surname) {
        this.#name = name;
        this.#surname = surname;
    }
    getFullName() {
        return `${this.#name} ${this.#surname}`;
    }
}


class Student extends StudentUser {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    getCourse() {
        const currentYear = new Date().getFullYear();
        const currentCourse = currentYear - this.year;
        if (currentCourse > 5) {
            return "the student is a graduate"
        }
        return `the student is in his ${currentCourse} year`
    }
}

const student = new Student("Iryna", "Tololo", 2022);

// console.log(student.name);
// console.log(student.surname);
// console.log(student.getFullName());
// console.log(student.year)
// console.log(student.getCourse())



// Task 94. Create a Hero class that should have private properties name, level and health as well as methods attack and health. Add an option to count the number of heroes created.

class Hero {
    static heroesNumber = 0;
    static addHero() {
        this.heroesNumber += 1;
        // console.log("number of hero",Hero.heroesNumber)
    }
    #level;
    constructor(name) {
        this.name = name;
        this.#level = 1;
        this.health = 100;
        Hero.addHero();
    }
    attack() {
        if (this.health >= 10) {
            this.health -= 10;
            return
        }
        return "oops, you can't attack"
    }
    heal() {
        this.health += 10;
        if (this.health > 100) {
            this.health = 100;
        }
    }
}

const hobbit = new Hero("Hobbit");
const hobbit1 = new Hero("Hobbit1");
const hobbit2 = new Hero("Hobbit2");
const hobbit3 = new Hero("Hobbit3");

// console.log(hobbit)
// console.log(hobbit.name);
// console.log(hobbit.level);
// console.log(hobbit.health);
// console.log(hobbit.attack());
// console.log(hobbit.attack());
// console.log(hobbit.attack());
// console.log(hobbit.attack());
// console.log(hobbit.attack());
// console.log(hobbit.health);
// console.log(hobbit.attack());
// console.log(hobbit.attack());
// console.log(hobbit.attack());
// console.log(hobbit.attack());
// console.log(hobbit.attack());
// console.log(hobbit.health);
// console.log(hobbit.attack());

// console.log(hobbit.heal());
// console.log(hobbit.heal());
// console.log(hobbit.heal());
// console.log(hobbit.heal());
// console.log(hobbit.heal());
// console.log(hobbit.health);
// console.log(hobbit.heal());
// console.log(hobbit.heal());
// console.log(hobbit.heal());
// console.log(hobbit.heal());
// console.log(hobbit.health);
// console.log(hobbit.heal());
// console.log(hobbit.health);
// console.log(hobbit.heal());
// console.log(hobbit.health);

// console.log(Hero.heroesNumber)



// Task 95. Create a BankAccount class that should have private property balance as well as methods deposit and withdraw. Add an option to count the number of heroes created.


class BankAccount {
    #balance
    constructor() {
        this.#balance = 1000;
    }

    #changeBalane(amount) {
        this.#balance += amount;
    }

    deposit(amount) {
        if (amount <= 0) {
            return "nice try";
        }
        this.#changeBalane(amount)
        return `Your balance - ${this.#balance}`;
    }
    withdraw(amount) {
        if (amount > this.#balance) {
            return 'insufficient funds in the account';
        }
        this.#changeBalane(-amount)
        return `Your balance - ${this.#balance}`;
    }
}

const instance = new BankAccount();

// console.log(instance.balance);
// console.log(instance.deposit(1000));
// console.log(instance.deposit(-1000));
// console.log(instance.withdraw(500));
// console.log(instance.withdraw(5000));



// Task 96.

class StringBuilder {
  constructor(initialValue){
    this.value = initialValue;
  }
  getValue(){
    return this.value;
  }
  padEnd(str){
   this.value =  this.value + str;
  }
  padStart(str){
    this.value = str + this.value;
  }
  padBoth(str){
    this.padEnd(str);
    this.padStart(str);
  }
}


// Change code above this line
const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
builder.padStart("^");
// console.log(builder.getValue()); // "^."
builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="




const str_1 = [1, 2];
console.log("isNaN",isNaN(str_1))
console.log("Number.isNaN", Number.isNaN(str_1))
// console.log(Number(undefined))


function foo(){}

console.log(typeof foo)
console.log([1, 2, 3] + "")
console.log("12" + 2)
console.log("12" - 2)
console.log("12" * 2)
console.log("12" / 2)
console.log(+"12")
console.log(Number.parseInt("13ndn"))
console.log(Number.parseFloat("13.5ndn"))

const obj_1 = {};
console.log(Object.keys(obj_1).length)