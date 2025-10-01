'use strict';
/* Lection 33 */
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest === true) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

const interface = `Audio`;
console.log(`I can drive`);
*/

/* Lection 34 */
/*
function logger() {
    console.log(`I have a name`);
}

// calling / running / invoking the function
logger("Reinhardt");

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/* Lection 35 */
/*
// Function Decleration - They can be used BEVORE the decleration in the code
const age1 = calcAge1(1979);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
console.log(age1);

// Function Expression - The can be used only AFTER the decleration
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1979);
console.log(age2);
*/

/* Lection 36 */
/*
// Function Decleration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const currentYear = 2025;
// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear
console.log(calcAge1(1985));
console.log(calcAge3(1985));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = currentYear - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1979, 'Reinhardt'));
console.log(yearsUntilRetirement(1984, 'Claudia'));
*/

/* Lection 36 */
/*
function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/* Coding Challange 5 */
/*
const calcAverage = (a, b, c) => (a + b + c) / 3

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`Dolpins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins`);
    }
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas)
checkWinner(scoreDolphins, scoreKoalas);
*/

/* Lecture 40 */
/*
// Arrays
const friends = ['Harti', 'Herwig', 'Alex']; //  Literaly creating an Array
// const works here because only primitive values are immutable, but you cannot chenge the whole arra like
// friends = ['new', 'friends', 'array'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020); // creating an Array by function

console.log(friends[0]);
console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = 'Erek';
console.log(friends);
const firstName = 'Reinhardt';
const reinhardt = [firstName, 'Muehlwerth', 2037 - 1991, 'developer', friends];
console.log(reinhardt)

// Exercise
function calcAge(birthYear) {

    return new Date().getFullYear() - birthYear;
}

const years = [1979, 1980, 1981, 2011, 2015, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/* Lecture 41 */
/*
// Add Elements to Array
const friends = ['Harti', 'Herwig', 'Alex'];
console.log(friends.push('Erek')); // returns the new length
console.log(friends);
friends.unshift('John');
console.log(friends);

// Remove Elements from Array
console.log(friends.pop()); // returns the removed element
console.log(friends);

friends.shift(); // First Element
console.log(friends);

console.log(friends.indexOf('Herwig'));
console.log(friends.indexOf('Bob')); // -1 because it does not exist

// ES6
friends.push(23);
console.log(friends.includes('Herwig'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); // false because it check with equality
console.log(friends.includes(23)); // this is true, because the number 23 is in there

if (friends.includes('Herwig')) {
    console.log('You have a friend called Herwig');
}
*/

/* Coding Challange */
const bill = 100;
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// function calcTip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
console.log(`The bill was ${bill}, the tip was ${calcTip(bill)}, and the total value ${bill + calcTip(bill)}`);

const bills = new Array(125, 555, 44);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(bills);
console.log(tips);
console.log(totals);