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

console.log(isNaN('02') );  //
console.log(isNaN(null) );  //
console.log(isNaN('6nan') );  //
console.log(isNaN(9) );  //
console.log(isNaN('') );  //
console.log(isNaN([]) );  //
console.log(isNaN({}) );  //
console.log(isNaN(new Date) );  //
console.log(isNaN('NaN')); //



//TODO: Number.parseFloat()

Number.parseFloat('2.15'); //
Number.parseFloat('2.15 '); //
Number.parseFloat(' 2.15 '); //
Number.parseFloat('2.15 text'); //
Number.parseFloat('text 2.15'); //
Number.parseFloat('text');
Number.parseFloat(); //


//TODO: Number.parseInt()

Number.parseInt('12.1'); //
Number.parseInt('12.'); //
Number.parseInt('12gh'); //
Number.parseInt('12 text'); //
Number.parseInt("123e-2"); //
Number.parseInt("A", 16); //
Number.parseInt("a", 16); //
Number.parseInt( "A"); //
Number.parseInt('text 12'); //
Number.parseInt('text'); //
Number.parseInt({}); //
Number.parseInt([]); //
Number.parseInt(''); //
Number.parseInt(true); //



//TODO: Number.toFixed()

var n=2.567890431;

n.toFixed(); //
n.toFixed(1); //
n.toFixed(2); //
n.toFixed(3); //
n.toFixed(4); //
n.toFixed(5); //
n.toFixed(6); //
n.toFixed(7); //
n.toFixed(8); //
n.toFixed(9); //
n.toFixed(10); //
n.toFixed(11); //
n.toFixed(12); //
n.toFixed(true); //
n.toFixed(false); //
n.toFixed("2"); //



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

console.log(Math.round(2.3)); //
console.log(Math.round(2.5)); //
console.log(Math.round(2.6)); //
console.log(Math.round(-2.3)); //
console.log(Math.round(-2.5)); //
console.log(Math.round(-2.7)); //


//TODO: Math.floor()

console.log('Math.floor() :>> ', Math.floor());

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




console.log('typeof NaN :>> ', typeof NaN);


console.log('Math.pow(2,3) :>> ', Math.pow(2, 3));
console.log('Math.random() :>> ', Math.random());

console.log('Number("25.6px") :>> ', Number("25.6px"));
console.log('("25.6px").parseInt() :>> ', Number.parseInt("25.6px"));



// ЗАВДАННЯ 1. Методи рядків та чейнінг.
// Скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кг на квадрат висоти. Індекс маси тіла необхідно округлити до однієї цифри після коми.

let weight = "88,3";
let height = "1.75";
weight = Number(weight.replace(",", "."));
let squaredHight = Math.pow(Number(height),2);

// const bmi = Number(weight.replace(",",".") / Math.pow(height,2)).toFixed(1);
const bmi = Number((weight / squaredHight).toFixed(1));
console.log('bmi :>> ', bmi);



// ЗАВДАННЯ 2. Напиши скрипт, який переведе значення totalMinutes в рядок у форматі НН:ММ.
// 70 хв - 01: 10
// 450 хв - 07:30
// 1441 хв - 24:01

const totalMinutes = 1441;
const hours =  Math.floor(totalMinutes / 60);
const min = totalMinutes % 60;
const clock = `${hours.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}`;
console.log('clock :>> ', clock);


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
    console.log(Math.max(a,b));
} else {
    console.log(b + 512);
}


// ЗАВДАННЯ 7. Напиши скрипт, який перевіряє чи закінчується значення змінної символом /.Якщо ні - додай до кінця значення цeй символ.

let link = "https://my-site.com/about"

if (!link.endsWith("/")) {
    link = link + "/"
} 

console.log('link :>> ', link);

// ЗАВДАННЯ 8. Напиши скрипт, який перевіряє чи закінчується значення змінної символом /.Якщо ні - додай до кінця значення цeй символ,але тільки у тому випадку, якщо в змінної є підрядок "my-site".

let link2 = "https://my-site.com/book"

if (!link2.endsWith("/") && link2.includes("my-site")) {
    link2 += "/"
}

console.log('link2 :>> ', link2);

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
        console.log("Післязавтра");
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
        console.log("Післязавтра");
        break;
    default:
        console.log("Дата в майбутньому");
}

// ЗАВДАННЯ 10. Напиши цикл for, який виводить у консоль числа за зростанням від мін до макс, але тільки якщо число кратне 5.

const minNumber = 20;
const maxNumber = 100;

for (let i = minNumber; i <= maxNumber; i += 1) {
    if (!(i % 5)) {
        console.log('i ', i);
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
            console.log(array[i][j])
        }
        continue;
    }
    console.log(array[i])
}

let i = 0;

while (i < array.length) {
    console.log('while',array[i]);
    i += 1;
}



// ЗАВДАННЯ 15. Напиши скрипт для обчислення площі прямокутника зі сторонами значення яких зберігається у змінній у вигляді рядка.

const values = '8 11';

const arr = values.split(" ");
console.log(arr)
const area = Number(arr[0]) * Number(arr[1]);
console.log(area);



// ЗАВДАННЯ 16. Напиши скрипт для перебору масиву fruits циклом for. Виведи у консоль рядок у форматі Номер: значення. Нумерація починається з одиниці.

const fruits = ['apple', 'grape', 'peach', 'banana', 'lemon'];

for (let i = 0; i < fruits.length; i += 1) {
    console.log(`${i+1}: ${fruits[i]}`);
}

for (let i = 0, num = 1; i < fruits.length; i += 1, num += 1) {
    console.log(`${num}: ${fruits[i]}`);
}



// ЗАВДАННЯ 17. Напиши скрипт який виводить у консоль ім'я та номер телефону, кількість імен та номерів телефону однакова.

let names = 'Jacob, William, Solomon, Artemis, Iryna';
let phones = '80954610147, 80954612149, 80509022230, 80955026931';

names = names.split(", ");
phones = phones.split(", ");

for (let i = 0; i < names.length, i< phones.length; i += 1) {
     console.log(`${names[i]}: ${phones[i]}`);
}



// ЗАВДАННЯ 17. Напиши скрипт який виводить у консоль усі слова рядка, окрім першого та останнього, результат не повинен починатися чи закінчуватися пробілом, скрипт повинен працювати для будь-якого рядка.

let string = "Welcome to the future";

const result = string.split(" ").slice(1, -1).join(" ");
console.log(result)



// ЗАВДАННЯ 18. Напиши скрипт який розвертає рядок і виводить його в консоль.

let string_2 = "Welcome to the future";
string_2 = string_2.split("").reverse().join("");
console.log(string_2);



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

console.log(bubbleSort(langs))


// ЗАВДАННЯ 20. Напиши скрипт пошуку найменшого числа в масиві.

// const numbers = [2,17, 94, 1, 23, 37];
const numbers = [250,50,44,360,11,-1,20];
let minNumbers=numbers[0];

for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] < minNumbers) {
        minNumbers = numbers[i];
    }

}

console.log('minNumbers :>> ', minNumbers);

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


console.log(arr_1);

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


console.log(getCommonElements([1, 2, 3, 2, 1, 17, 1, 19]));

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

console.log(getWomen(users, men));

// ЗАВДАННЯ 24. Напиши скрипт, який розгортає рядок і виводить його в консоль.

function getReverseString(string) {
    const separator = '';
    const result = string.split(separator).reverse().join(separator);
    console.log(result);
}

getReverseString('Welcome to the future');

// ЗАВДАННЯ 25. Напиши скрипт, який буде перевіряти чи елементи в масиві розташовані в порядку зростання, якщо ні - то замінити елементи на вірні.

const numbers_1 = [1, 2, 3, 1, 5, 6, 1, 1, 9];


for (let i = 1; i < numbers_1.length; i += 1){
    const currentEl = numbers_1[i];
    const prevEl = numbers_1[i - 1];
    if (currentEl - prevEl !==1) {
        numbers_1[i] = prevEl + 1;
    }
}

console.log(numbers_1);

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

console.log(createString([]));
console.log(createString(["Peter"]));
console.log(createString(["Jakob", "Alex"]));
console.log(createString(["Max", "John", "Mark"]));
console.log(createString(["Alex", "Jakob", "Mark", "Max"]));


// ЗАВДАННЯ 27. Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.  

function calcBMI(weight, height) {
    weight = parseFloat(weight.replace(",", "."));
    heigh = parseFloat(height.replace(",", '.'));
    return (weight / Math.pow(height,2)).toFixed(1);

}
const bmi_1 = calcBMI('88,3', '1.75');

console.log(bmi_1)