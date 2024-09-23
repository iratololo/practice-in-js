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

/*
0.8 ==> 0
0.9 ==> 0
1.0 ==> 1
1.1 ==> 1
1.2 ==> 1
1.3 ==> 1
1.4 ==> 1
1.5 ==> 1
1.6 ==> 1
1.7 ==> 1
1.8 ==> 1
1.9 ==> 1
2.0 ==> 2
2.1 ==> 2
2.2 ==> 2
2.3 ==> 2
2.4 ==> 2
2.5 ==> 2
2.6 ==> 2
2.7 ==> 2
2.8 ==> 2
2.9 ==> 2
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


// let message =  prompt("What color do you see?")?.trim().toLowerCase();

// switch (message) {
//     case "red":
//         console.log('action stop');
//         break;
//     case "yellow":
//         console.log("action ready");
//         break;
//     case "green":
//         console.log('action go');
//         break;
//     default: 
//         console.log('be careful');
// }

function check(riddle, answer) {
    let message = prompt(riddle)?.trim().toLowerCase();
    return message === answer ? true : false;
}

// console.log(check("Хоч не літак, а крилатий", "вітряк"));
// console.log(check("bridge", "міст"));

function counter(high) {
    const daySpeed = 7;
    const nightSpeed = 2;
    let days=0;
    let total=0;
    while (total < high) {
        total += daySpeed;
        days += 1;
        if (total < high) {
            total -= nightSpeed;
        }
    }
    return days;
}

// console.log(counter(42));

// console.log(counter(17))
    
// console.log(counter(18));


function countVowel(str) {
    const vowels = "aeiou";
    str = str.toLowerCase();
    let sum = 0;
    for (let i = 0; i < str.length; i += 1) {
        if (vowels.includes(str[i])) {
            sum += 1;
        }
    }
    return sum;  
}

console.log(countVowel("HELLO WORLD")); //3
console.log(countVowel("Junior Web Develope")); //8



