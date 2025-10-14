// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* Lecture 61 */
/*
// PROBLEM
// We work for a company building a smart home thermometer. Our most recent taks is this: "Given am array of temperatrues of one day, calculate the temperature amplitude. Keep on mind that sometimes there might be a sensore error."

const temperatrues = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1.) Understsanding the Problem#
// - What is the temp amplitude? Answer: difference between the highest and lowest temp
// - How to compute max and min temperature?
// - What's a sensor error? And what to do?

// 2.) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtrakt min from max (amplitude) and return it

function calcTempAmplitude (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i]
        if(currentTemp === 'error') {
            continue;
        } else if (currentTemp > max) {
            max = currentTemp;
            continue;
        } else if (currentTemp < min) {
            min = currentTemp;
        }
    }
    return max - min;
};

const amplitude = calcTempAmplitude(temperatrues)
console.log(`The temperature amplitude for the givven values is: ${amplitude}`);

// Problme 1:
// Function should now recive 2 Arrays of temps

//  1. Understanding the Problem
// - With 2 arrays do we need to implement the functionality twice? - No just merge the two arrays

// 2. Breaking up into sub-problems
// - How to merge 2 arrays? - concat

function calcTempAmplitudeV2 (t1, t2) {
    const temps = t1.concat(t2);
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i]
        if(currentTemp === 'error') {
            continue;
        } else if (currentTemp > max) {
            max = currentTemp;
            continue;
        } else if (currentTemp < min) {
            min = currentTemp;
        }
    }
    return max - min;
};

const amplitudeV2 = calcTempAmplitudeV2([3, 5, 1], [9, 0, 5])
console.log(`The temperature amplitude for the given values is: ${amplitudeV2}`);
*/

/* Lecture 63 */
/*
function measureKelvin() {
    const measurement = {
        type: 'temp',
        unit: 'cels',
        // value: Number(prompt('Degrees celsius: '));
        value: 10
    };
    console.table(measurement);    
    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(measureKelvin());
*/

/* Coding Challange */
/* Given an arra of forecasted maximum temperatures, the thermometer display a string with these temperatures.
Exapmple: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23° in 3 days ..."

create a function 'printForecast' which takes in an array 'arr' amd öpgs a string like the above to the console.

TEST DATA 1: [17, 21, 23];
TEST DATA 2: [12, 5, -5, 0, 4]
*/
/*
// 1.) Understsanding the Problem#
// - Array transformation to a string, seperated by ...
// - What is the x days? - Index + 1
// - What's a sensor error? And what to do?

// 2.) Breaking up into sub-problems
// - Transform array into string
// - transform each element to string with °C
// - String needs to contain day (index + 1)
// - Add ... between elements and start and end of strings

function printForcast(arr) {
    let outString = "";
    for (let i = 0; i < arr.length; i++) {
        if(i !== arr.length -1) {
            outString += `... ${arr[i]}°C in ${i+1} days `
        } else {
            outString += `... ${arr[i]}°C in ${i+1} days`
        }
    }
    console.log(outString);
}

printForcast([17, 21, 23]);
*/

/* Lecture 66 */
/**
 * Build a time tracking app for freelancers. You need a function that receives daily work hours for a certain week, and returns:
 * 1. Total hours worked
 * 2. Avarage daily hours
 * 3. The day with the most hours worked
 * 4. Number of days worked
 * 5. Whether the week was full-time (worked 38.5 hours or more)
 *
 * TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
 */
/*
function getWorkInformation(arr) {
    let maxHoursDay = 0;
    let totalHours = 0;
    let daysWorked = 0;
    for (let i = 0; i < arr.length; i++) {
        let today = arr[i];
        totalHours += today;
        if (today > arr[maxHoursDay]) maxHoursDay = i;
        if (today > 0) daysWorked++;
    }
    console.log('test');
    const workWeek = {
        totalHoursWorked: totalHours,
        avarageDailyHours: totalHours / arr.length,
        mostWorked: getDayName(maxHoursDay),
        daysWorked: daysWorked,
        fuulTimeWeek: totalHours > 38.5 ? true : false,
    };
    return workWeek;
}

function getDayName(day) {
    switch (day) {
        case 0:
            return 'Monday';
        case 1:
            return 'Tuesday';
        case 2:
            return 'Wednesdy';
        case 3:
            return 'Thursday';
        case 4:
            return 'Friday';
        case 5:
            return 'Saturday';
        case 6:
            return 'Sunday';
    }
}

console.table(getWorkInformation([7.5, 8, 6.5, 0, 8.5, 4, 0]));
*/

function analyzeWorkWeek(dailyHours) {
    if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
        throw new Error(
            'Input must be an array of 7 numbers representing hours for each day (Monday to Sunday).'
        );
    }

    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    // 1. Total hours worked
    const totalHours = dailyHours.reduce((sum, h) => sum + h, 0);

    // 2. Average daily hours (rounded to one decimal)
    const averageHours = Math.round((totalHours / 7) * 10) / 10;

    // 3. Day with the most hours worked (now returns day name)
    const maxIndex = dailyHours.indexOf(Math.max(...dailyHours));
    const dayWithMostHours = days[maxIndex];

    // 4. Number of days worked (more than 0 hours)
    const daysWorked = dailyHours.filter((h) => h > 0).length;

    // 5. Whether the week was full-time (>= 38.5 hours)
    const fullTime = totalHours >= 38.5;

    return {
        totalHours,
        averageHours,
        dayWithMostHours,
        daysWorked,
        fullTime,
    };
}

const week = [8, 7.5, 6, 8, 7, 0, 0];
console.log(analyzeWorkWeek(week));
