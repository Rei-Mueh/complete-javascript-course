/* Lecture 15
const firstName = "Reinhardt";
const lastName = "Müh";
const job = "Developer";
const birthYear = 1979;
let currentYear = 2025;

const reinhardt = "I'm " + firstName + " " + lastName + ", a " + (currentYear - birthYear) + " year old " + job + "!";
console.log(reinhardt);

// template string pay attention that backticks needed to be used here.
const reinhardtNew = `I'm ${firstName} ${lastName}, a ${currentYear - birthYear} year old ${job} that can use template strings ;)!`;
console.log(reinhardtNew)
*/

/* Lecture 16
const age = 15;

if (age >= 18) {
    console.log(`Sarah is old enough to drive 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is not old enough to drive 😒. She must wait another ${yearsLeft} years.`);
}

const birthYear = 1979;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/* Challange 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Write your code below. Good luck! 🙂

if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else if (BMIMark < BMIJohn) {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
} else {
    console.log(`Mark's BMI (${BMIMark}) is the same than John's (${BMIJohn})!`);
}
*/

/* Lecture 20 */
/*
// Type Conversion
const inputYear = `1991`;
console.log(Number(inputYear) + 18, inputYear + 18); // 2009 19918
console.log(Number('Reinhardt')); // NaN
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log(`I am ` + 23 + `years old`) // String 'I am 23 years old
console.log(`23` - `10` - 3) // 10
console.log(`23` / `2`); // 11.5

let n = `1` + 1;
n = n - 1;
console.log(n); // 10

console.log(2+3+4+`5`); // 95 weil 2+3+4 = 9
console.log(`10`-`4`-`3`-2+`5`); // 15 weil die - als Nummern berechnet werten daher steht am Ende 1 + `5` da.
*/

/* Lecture 21 */
// 5 values 0, '', undefined, null, NaN -> werden Boolean false
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`Jonas`));
console.log(Boolean({})); // Empty Object

const money = 0;
if (money) {
    console.log(`Dont't spend it all ;)`);
} else {
    console.log(`You should get a job!`); // prints this because in the if money is converted to a Boolean
}

let height;
if (height) {
    console.log(`YEA! Height is defined`);
} else {
    console.log(`Height is UNDEFINED`);
}
*/

/* Lecture 22 */
/*
const age = 18;
if (age === 18) console.log('you just became an adult');
// strict equality operator - makes NO type conversion
// Should be used as default

console.log(18 === 18) // true;
console.log('18' === 18) // false beause no type conversion
console.log('18' == 18) // true beause this time there type conversion

const favNumber = Number(prompt("What is you favourite nNumber"));

console.log(favNumber);
console.log(typeof favNumber);

if(favNumber === 23) {
    console.log(`Cool! ${favNumber} is a cool Number`)
}

if (favNumber !== 23) console.log('Why not 22?')
*/

/* Lecture 23 */
/*const hasDriversLicence = true;
const hasGoodVsion = true;


if (hasDriversLicence && hasGoodVsion) {
    console.log(`Sarah is able to drive`);
} else {
    console.log(`Someone else should drive...`)
}

const isTired = true;
if (hasDriversLicence && hasGoodVsion && !isTired) {
    console.log(`Sarah is able to drive`);
} else {
    console.log(`Someone else should drive...`)
}
*/
/* Lecture 24 - Challange*/
/* Write your code below. Good luck! 🙂 */

// const scoreDolphins = (96 + 108 + 89) / 3
// const scoreKoalas = (88 + 91 + 110) / 3

// if(scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins win the trophy `)
// } else if (scoreDolphins < scoreKoalas) {
//     console.log(`Dolphins win the trophy`)
// } else {
//     console.log(`Both win a trophy`)
// }

// BONUS 1
// let sumDolphins = 97 + 112 + 101;
// let scoreDolphins =  sumDolphins / 3;
// let sumKoalas = 109 + 95 + 106;
// let scoreKoalas = sumKoalas / 3;
// console.log(scoreDolphins, scoreKoalas)
// console.log(`BONUS 1`);
// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`Dolphins win the trophy `);
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//     console.log(`Koalas win the trophy`);
// } else {
//     console.log(`Both win a trophy`);
// }

// sumDolphins = (97, 112, 81);
// scoreDolphins =  sumDolphins / 3;
// sumKoalas = 109 + 95 + 86;
// scoreKoalas = sumKoalas / 3;
// console.log(`BONUS 2`);
// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`Dolphins win the trophy `);
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//     console.log(`Koalas win the trophy`);
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
//     console.log(`Both win a trophy`);
// } else {
//     console.log(`No team wins a trophy`);
// }


/* Lection 25 */
/*
const day = 'monday';

switch(day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prep theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Write code examples`);
        break;
    case 'friday':
        console.log(`Record videos`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Ènjoy the weekend`);
        break;
    default:
        console.log(`not a valid day`);
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');    
} else if (day === 'tuesday') {
    console.log('Prep theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log(`Write code examples`);
} else if (day === 'friday') {
    console.log(`Record videos`);
} else if (day === 'saturday' || day === 'sunday') {
    console.log(`Ènjoy the weekend`);
} else {
    console.log(`not a valid day`);
}
*/

/* Lection 27 */
// Expressions are everthing that produces a value, e.g. an Number or a calculation
// 39 is an expression
// 3 * 4 is an expression
// true && false && !false is also an expression

// const str = '23 is bigger'; is a statement '23 is bigger' itselv is an expression
// this is important because e.g. template literals only accept expressions
// console.log(`I am ${test} and ${if(a > b)}) is not working

/* Lection 28 */
/*
const age = 23;
// Conditional / Ternary Operator -> That is an expression
age >= 18 ? console.log(`I like to drink beer.`) : console.log(`I like to drink water.`)

const drink = age >= 18 ? `beer` : `water`;
console.log(`I like to drink ${drink}`);

console.log(`I like to drink ${age >= 18 ? `beer` : `water`}`)
*/

/* Coding Challange 4 */
const bill = 275;
const tip = bill >= 20 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);