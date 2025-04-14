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

let number = Number(prompt("Enter number"));
let pow = Number(prompt("Enter power"));
let result = Math.pow(number, pow);
alert(`Your result is ${result}`);