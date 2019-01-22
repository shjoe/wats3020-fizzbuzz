/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger,
    maxNumber,
    fbResults,
    fbText;


// Initial value set to false

isInteger = false;

// Loop to check for user entered "good number." 
// Max number limit will be verified as a suitable integer (max number > 0). Loop will stop once conditions are met.

while (!isInteger) {
    let input = window.prompt('Enter a number greater than 0:');
    if (input === null) break;
    if (input.indexOf('.') < 0) {
        maxNumber = Number.parseInt(input);
        isInteger = Number.isSafeInteger(maxNumber) && maxNumber > 0;
    }
}

// console.log("maxNumber",maxNumber);

// Initialized the `fbResults` variable to an empty Array

fbResults = [];

// Loop to execute numbers up to "maxNumber." Logic will calculate for fizz, buzz, and fizzbuzz.
// Results will be pushed/stored to empty array "fbResults."

for (let i = 1; i <= maxNumber; i++) {
    let outputString = '';
    if (i % 3 === 0) {
        outputString += "fizz"
    }
    if (i % 5 === 0) {
        outputString += "buzz"
    }
    // if (i % 15 === 0) {
    //    outputstring += "fizzbuzz";
    // } 
    if (outputString.length === 0) {
        outputString = i;
    }
    fbResults.push(outputString);
}

// `for ... of` loop to concatenate the values from `fbResults` into the variable `fbText`.
// Display on HTML page sequence of 1, 2, fizz, etc.

fbText = '';

for (let value of fbResults) {
    fbText += value + '\n';
}

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;