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
/*
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
*/

/* Lecture 43 */
/*
// Object Literal
const reinhardt = {
    firstName: 'Reinhardt',
    lastName: 'Mueh',
    age: 2025 - 1979,
    job: 'Developer',
    friends: ['Harti', 'Alex', 'Erek']
};

console.log(reinhardt);

console.log(reinhardt.lastName);
console.log(reinhardt['lastName']);

const nameKey = 'Name';
console.log(reinhardt['first' + nameKey]);
console.log(reinhardt['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Reinhardt. Chose between firstName, lastName, age, job and friends.')
const interestedIn = age;

console.log(interestedIn);
console.log(reinhardt.interestedIn); // does not work because there is no property interestedIn
console.log(reinhardt[interestedIn]); // works because now interestedIn gets evaluated.

if (reinhardt[interestedIn]) {
    console.log(reinhardt[interestedIn]);
} else {
    console.log(`Wrong request (${interestedIn}). Chose between firstName, lastName, age, job and friends.`);
}

reinhardt.location = 'Österreich';
reinhardt['twitter'] = '@reiMueh';
console.log(reinhardt);

// Challange

// "Reinhardt has 3 friends, and his best friend is called Harti"
console.log(`${reinhardt.firstName} has ${reinhardt.friends.length} friends, and his best friend is called ${reinhardt.friends[0]}`);
*/

/* Lecture 44 */
/*
const reinhardt = {
    firstName: 'Reinhardt',
    lastName: 'Mueh',
    birthYear: 1979,
    job: 'Developer',
    friends: ['Harti', 'Alex', 'Erek'],
    hasDriversLicense: false,
    // Method not a function
    // calcAge: function() {
    //     return new Date().getFullYear() - this.birthYear;
    // }
    calcAge: function() {
        this.age = new Date().getFullYear() - this.birthYear;
        return this.age;
    },
    getSummery: function() {
        return `${reinhardt.firstName} is a ${reinhardt.calcAge()}-years old ${reinhardt.job},  and he has ${reinhardt.hasDriversLicense ? 'a' : 'no'} drivers licence.`
    }
};
// console.log(reinhardt)
// console.log(`Reinhardt ist ${reinhardt.calcAge()} Jahre alt.`)
// console.log(reinhardt['calcAge'](2011));
console.log(reinhardt.calcAge());
console.log(reinhardt.age);

// Challange
// Jonas is a 46-year ofl teacher, and he ha a drivers Licence

console.log(reinhardt.getSummery());
*/

/* Coding challange */
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}

console.log(mark.calcBMI() > john.calcBMI() ? `${mark.fullName}'s BMI(${mark.bmi}) is higher then ${john.fullName}' (${john.bmi}!)` : `${john.fullName}'s BMI(${john.bmi}) is higher then ${mark.fullName}' (${mark.bmi})!`);
*/

/* Lecture 47 */
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repition ${rep}`);
}
*/

/* Lecture 48 */
/*
const reinhardt = [
    'Reinhardt',
    'Mueh',
    2025 - 1979,
    'developer',
    ['Harti', 'Alex', 'Erek'],
    true
];

// const types = [];

// for (let i = 0; i < reinhardt.length; i++) {
//     console.log(reinhardt[i], typeof (reinhardt[i]));
//     // types[i] = typeof (reinhardt[i]);
//     types.push(typeof reinhardt[i]);
// }
// console.log(types);

const years = [1991, 2007, 1979, 2020, 2011, 2015];
const age = [];

for (let i = 0; i < years.length; i++) {
    age.push(new Date().getFullYear() - years[i]);
}

console.log(age);

// Continue / Break
// Continue breaks the current itereation an continues with the next one

const types = [];
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < reinhardt.length; i++) {
    console.log(reinhardt[i], typeof (reinhardt[i]));
    if (typeof reinhardt[i] !== 'string') continue;
    types.push(typeof reinhardt[i]);
}
console.log(types);
*/

/* Lecture 49 */
/*
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Excercide ${exercise}: Lifting weight repition ${rep}`);
    }
}*/

/* Lecture 50 */
/*
// for (let rep = 1; rep < 10; rep++) {
//     console.log(`Lifting weight repition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weight repition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// counter = 0;
while (dice !== 6) {
    console.log(`You rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop will end ...');
}
*/

/* Coding Challange 4 */
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum / arr.length);
}

for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}*/