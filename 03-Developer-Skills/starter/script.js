// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;

if (x===23) console.log(23);

const calcAge = birthYear => new Date().getFullYear() - birthYear;

console.log(calcAge(2011));
