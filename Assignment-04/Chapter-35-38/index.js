/* Question No.01: /* Question No.01: Write a function that displays current date & time in your
browser. */
document.writeln(`<h2>Question No.01</h2>`);
document.writeln(`<h3>Current Date using Function</h3>`);

function currentDate(){
    var date = new Date();
    document.writeln(`Current Time: ${date}`);
}
currentDate();


/* Question No.02: Write a function that takes first & last name and then it
greets the user using his full name */
document.writeln(`<h2>Question No.02</h2>`);
document.writeln(`<h3>greets the user</h3>`);

function greetUser(fName, lName){
    document.writeln(`Hello ${fName} ${lName}! Welcome to SMIT.`)  
}
greetUser("Almas", "Kanwal")


/* Question No.03: Write a function that adds two numbers (input by user)
and returns the sum of two numbers. */
document.writeln(`<h2>Question No.03</h2>`);
document.writeln(`<h3>Adding Two Numbers</h3>`);

function addNum(num1, num2){
    document.writeln(`The result of adding two numbers is ${num1 + num2}.`);
}
addNum(100, 50);


/* Question No.04: 4. Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser. */
document.writeln(`<h2>Question No.04</h2>`);
document.writeln(`<h3></h3>`);

// function calculator(num1, num2, operator){
//     if(operator === "+"){
//         return num1 + num2
//     } else if(operator === "-"){
//         return num1 - num2
//     } else if(operator === "*"){
//         return num1 * num2
//     } else if(operator === "/"){
//         if(num2 === 0){
//             return "Denominator should not be zero."
//         }else{
//             return num1 / num2
//         }        
//     }
// }

// var num1 = +prompt("Enter first number: ");
// var num2 = +prompt("Enter second number: ");
// var operator = prompt("'Enter operator (+ - * /) : ");

// var calculation = calculator(num1, num2, operator);
// document.writeln(`${num1} ${operator} ${num2} = ${calculation}`);


/* Question No.05: Write a function that squares its argument. */
document.writeln(`<h2>Question No.05</h2>`);
document.writeln(`<h3>Square of Number</h3>`);

function squares(num){
    document.writeln(`The square of ${num} is ${num ** 2}`);
}
squares(5);


/* Question No.06: Write a function that computes factorial of a number. */
document.writeln(`<h2>Question No.06</h2>`);
document.writeln(`<h3>Factorial of a Number</h3>`);

function factorial(num){
    var fac = 1;
    for(var i = 1; i <= num; i++){
        fac *= i;
    }
    document.writeln(`Factorial of ${num} is ${fac}`);
}
factorial(5); 


/* Question No.07: Write a function that take start and end number as inputs
& display counting in your browser. */
document.writeln(`<h2>Question No.07</h2>`);
document.writeln(`<h3>Display Counting</h3>`);

function displayCounting(start, end) {
    for (var i = start; i <= end; i++) {
        document.writeln(`${i} <br>`);
    }
}
displayCounting(10, 20);


/* Question No.08: Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare() */
document.writeln(`<h2>Question No.08</h2>`);
document.writeln(`<h3>Hypotenuse of a Right Angle Triangle</h3>`);

function calculateHypotenuse(base, perpendicular){
    function calculateSquare(number){
        return number * number;
    }

    var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    return hypotenuse;
}

var result = calculateHypotenuse(9,9);
document.writeln("Hypotenuse (9,9): ", result.toFixed(2));


/* Question No.09: Write a function that calculates the area of a rectangle.
 A = width * height
 Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables */
document.writeln(`<h2>Question No.09</h2>`);
document.writeln(`<h3>Area of Rectangle</h3>`);

function calculateArea(width, height) {
    return width * height;
}

// i. Arguments as values
var area1 = calculateArea(5, 10);
document.writeln("Area (values 5,10): " + area1 + "<br>");

// ii. Arguments as variables
var w = 6;
var h = 10;
var area2 = calculateArea(w, h);
document.writeln("Area (variables 6,10): " + area2 + "<br>");


/* Question No.10: Write a JavaScript function that checks whether a passed
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as
forward, e.g., madam. */
document.writeln(`<h2>Question No.10</h2>`);
document.writeln(`<h3>Palindrone</h3>`);

function palindrome(str){
    str = str.toLowerCase()
    var reversed = str.split("").reverse().join("");

    if (str === reversed) {
        return true;  
    } else {
        return false; 
    }
}

document.writeln(`madam :  ${palindrome("madam")}`);


/* Question No.11: Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox' */
document.writeln(`<h2>Question No.11</h2>`);
document.writeln(`<h3>Title Case</h3>`);

function titleCase(str) {
    var words = str.split(" ");
    var result = [];

    for (var i = 0; i < words.length; i++) {
        var firstLetter = words[i].charAt(0).toUpperCase();
        var remaining = words[i].slice(1).toLowerCase();
        result.push(firstLetter + remaining);
    }

    return result.join(" "); 
}

var output = titleCase("web development tutorial");
document.writeln("Converted to Title Case: ", output);


/* Question No.12: Write a JavaScript function that accepts two arguments, a
string and a letter and the function will count the number of
occurrences of the specified letter within the string.
Sample arguments : 'JSResourceS.com', 'o'
 */
document.writeln(`<h2>Question No.12</h2>`);
document.writeln(`<h3>Occurance Checking</h3>`);

function countOccurrences(str, letter) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

var result = countOccurrences("JSResourceS.com", "o");
document.writeln("Occurrences: ", result );


/* Question No.14: The Geometrizer
Create 2 functions that calculate properties of a circle, using
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area
is NN".
Circumference of circle = 2πr
Area of circle = πr2 */
document.writeln(`<h2>Question No.14</h2>`);
document.writeln(`<h3>Area and Circumference of a Circle</h3>`);

// Circumference of circle
function calcCircumference(radius){
     return 2 * 3.14 * radius;
}

var circumferenceOfCircle = calcCircumference(10);
document.writeln(`The Circumference of Circle is: ${circumferenceOfCircle.toFixed(2)} <br>`);

// Area of circle
function calcArea(radius){
    return 3.14 * (radius * radius);
}

var areaOfCircle = calcArea(8);
document.writeln(`The area of Circle is: ${areaOfCircle.toFixed(2)}`);