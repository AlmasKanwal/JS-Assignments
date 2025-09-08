/* Question No.01: Write a custom function power ( a, b ), to calculate the value of
a raised to b.  */
document.writeln(`<h2>Question No.01</h2>`);
document.writeln(`<h3>Custom Function for Power</h3>`);

function powerCalculate(a, b) {
    return Math.pow(a, b)
    // return a ** b;
}

var a = 2;
var b = 3;
var power = powerCalculate(a, b);
var power = powerCalculate(2, 3);
document.writeln(`Result: ${a} ^ ${b} = ${power}`);


/* Question No.02: Any year is entered through the keyboard. Write a function to
determine whether the year is a leap year or not. */
document.writeln(`<h2>Question No.01</h2>`);
document.writeln(`<h3>Leap Year</h3>`);

// function leapYear(year){
//     if(year % 400 === 0){
//         return "The year is a leap year.";
//     } 
//     else if(year % 100 === 0){
//         return "The year is not a leap year.";
//     } 
//     else if(year % 4 === 0){
//         return "The year is a leap year.";
//     } 
//     else {
//         return "The year is not a leap year.";
//     }
// }

// var year = prompt("Enter Year for checking leap year: ");
// var yearChecker = leapYear(year);
// document.writeln(`${yearChecker}`);


/* Question No.03: If the lengths of the sides of a triangle are denoted by a, b, and
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2
Calculate area of triangle using 2 functions */
document.writeln(`<h2>Question No.03</h2>`);
document.writeln(`<h3>Area of Triangle</h3>`);

function semiPerameter(a, b, c) {
    return (a + b + c) / 2;
}

function areaOfTriangle(a, b, c) {
    var S = semiPerameter(a, b, c);
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

var areaTriangle = areaOfTriangle(2, 3, 4);
document.writeln(`The area of Triangle is ${areaTriangle}`);


/* Question No.04: Write a function that receives marks received by a student in 3
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction
and other are for average and percentage. Call those functions
from mainFunction and display result in mainFunction.
 */
document.writeln(`<h2>Question No.04</h2>`);
document.writeln(`<h3>Average and Percentage</h3>`);

function averageFunction(m1, m2, m3) {
    var average = (m1 + m2 + m3) / 3;
    return average;
}

function percentageFunction(m1, m2, m3, totalMarks) {
    var obtainedMarks = m1 + m2 + m3;
    var percentage = (obtainedMarks / totalMarks) * 100;
    return percentage;
}

function mainFunction(m1, m2, m3, totalMarks) {
    var avg = averageFunction(m1, m2, m3);
    var perc = percentageFunction(m1, m2, m3, totalMarks);
    document.writeln(`Average Marks: ${avg}<br>`);
    document.writeln(`Percentage: ${perc}%`);
}
mainFunction(70, 80, 90, 300);


/* Question No.05: You have learned the function indexOf. Code your own custom
function that will perform the same functionality. You can code
for single character as of now. */
document.writeln(`<h2>Question No.05</h2>`);
document.writeln(`<h3>Custom indexOf Method</h3>`);

function indexOfMethod(string, character) {
    var i = 0;

    while (i < string.length) {
        if (string[i] === character) {
            return i;
        }
        i++;
    }
    return -1;
}

var checkingIndex = indexOfMethod("Apple", "p");
document.writeln(checkingIndex);


/* Question No.06: Write a function to delete all vowels from a sentence. Assume
that the sentence is not more than 25 characters long. */
document.writeln(`<h2>Question No.06</h2>`);
document.writeln(`<h3>Delete all Vowels</h3>`);

function deleteVowels(string) {
    var result = "";
    var i = 0;

    do {
        if (
            string[i] !== "a" && string[i] !== "e" && string[i] !== "i" &&
            string[i] !== "o" && string[i] !== "u" &&
            string[i] !== "A" && string[i] !== "E" && string[i] !== "I" &&
            string[i] !== "O" && string[i] !== "U"
        ) {
            result += string[i];
        }
        i++;
    } while (i < string.length);

    return result;
}

var originalStr = "I love coding.";
var remainingStr = deleteVowels(originalStr);
document.writeln(`Original Sentence: ${originalStr} <br> Without Vowels: ${remainingStr}`);


/* Question No.07: Write a function with switch statement to count the number of
occurrences of any two vowels in succession in a line of text.
For example, in the sentence */
document.writeln(`<h2>Question No.07</h2>`);
document.writeln(`<h3>Double Vowels Pairs Count</h3>`);

function CheckDoubleVowels(string) {
    var count = 0;
    var vowelsPair = [];

    var i = 0;
    while (i < string.length - 1) {
        switch (string[i]) {
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                if ("AEIOUaeiou".includes(string[i + 1])) {
                    count++;
                    vowelsPair.push(string[i] + string[i + 1]);
                }
                break;
        }
        i++;
    }
    return { count, vowelsPair };
}

var sentence = "Pleases read this application and give me gratuity";
var result = CheckDoubleVowels(sentence);
document.writeln(`The number of successive vowels: ${result.count}<br>`);
document.writeln(`The pairs are: ${result.vowelsPair.join(", ")}`);



/* Question No.08: The distance between two cities (in km.) is input through the
keyboard. Write four functions to convert and print this
distance in meters, feet, inches and centimeters. */
document.writeln(`<h2>Question No.08</h2>`);
document.writeln(`<h3>Distance b/w Two Cities</h3>`);

// function convertToMeters(km){
//      var toMeter = km * 1000;
//      return `Kilometer to meters: ${toMeter}<br>`;
// }

// function convertToFeet(km){
//     var toFeet = km * 3280.84;
//     return `Kilometer to feet: ${toFeet}<br>`;
// }

// function convertToInches(km){
//     var toInches = km * 39370.1;
//     return `Kilometer to inches: ${toInches}<br>`;
// }

// function convertToCm(km){
//     var toCM = km * 100000;
//     return `Kilometer to centimeters: ${toCM}<br>`;
// }

// var km = +prompt("Enter distance in km: ");

// document.writeln(convertToMeters(km));
// document.writeln(convertToFeet(km));
// document.writeln(convertToInches(km));
// document.writeln(convertToCm(km));


/* Question No.09: Write a program to calculate overtime pay of employees.
Overtime is paid at the rate of Rs. 12.00 per hour for every hour
worked above 40 hours. Assume that employees do not work
for fractional part of an hour. */
document.writeln(`<h2>Question No.09</h2>`);
document.writeln(`<h3>Calculate Overtime of Worker</h3>`);

// function overTimePay(hours) {
//     if (hours > 40) {
//         var overtimeHours = hours - 40;
//         var overtimePay = overtimeHours * 12;
//         return { overtimePay, overtimeHours };
//     } else {
//         var overtimeHours = 0;
//         var overtimePay = 0;
//         return { overtimePay, overtimeHours };
//     }
// }

// var hoursWorked = +prompt("Enter total hours worked: ");
// var result = overTimePay(hoursWorked);

// document.writeln(`Total Hours Worked: ${hoursWorked}<br>`);
// document.writeln(`Overtime Hours: ${result.overtimeHours}<br>`);
// document.writeln(`Overtime Pay: Rs. ${result.overtimePay}`);


/* Question No.10: A cashier has currency notes of denominations 10, 50 and
100. If the amount to be withdrawn is input through the
keyboard in hundreds, find the total number of currency notes
of each denomination the cashier will have to give to the
withdrawer. */
document.writeln(`<h2>Question No.10</h2>`);
document.writeln(`<h3>Currency Notes</h3>`);

// function cashierNotes(amount) {
//     var hundreds = Math.floor(amount / 100);
//     var remainder = amount % 100;

//     var fifties = Math.floor(remainder / 50);
//     var remainder = remainder % 50;

//     var tens = Math.floor(remainder / 10);
//     var remainder = remainder % 10;

//     return { hundreds, fifties, tens }
// }

// var amount = +prompt("Enter amount to withdraw (multiple of 10): ");
// var notes = cashierNotes(amount);

// document.writeln(`Total Amount: Rs. ${amount}<br>`);
// document.writeln(`${notes.hundreds} Notes of Hundred<br>`);
// document.writeln(`${notes.fifties} Notes of Fifty<br>`);
// document.writeln(`${notes.tens} Notes of Ten<br>`);