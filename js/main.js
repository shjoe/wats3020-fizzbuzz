let isInteger,
    maxNumber,
    fbResults,
    fbText;

isInteger = false;

// Loop to check for user entered "good number." 

while (!isInteger) {
    let input = window.prompt('Enter a number greater than 0:');
    if (input === null) break;
    if (input.indexOf('.') < 0) {
        maxNumber = Number.parseInt(input);
        isInteger = Number.isSafeInteger(maxNumber) && maxNumber > 0;
    }
}

// Initialized the `fbResults` variable to an empty Array

fbResults = [];

// Loop to execute numbers up to "maxNumber" and calculate for fizz, buzz, and fizzbuzz.

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
