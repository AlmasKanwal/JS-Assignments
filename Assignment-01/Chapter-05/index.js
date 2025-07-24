/* Question # 01: Write a program that take two numbers & add them in a
new variable. Show the result in your browser.
*/
document.writeln(`<h2>Question No.01</h2>`)
// var num1 = +prompt("Enter 1st Number: ");
// var num2 = +prompt("Enter 2nd Number: ");

// var sum = num1 + num2;
// document.writeln(`<h2>The sum of ${num1} and ${num2} is ${sum}.`);


/* Question # 02: Repeat task1 for subtraction, multiplication, division &
modulus. */
document.writeln(`<h2>Question No.02</h2>`)
// var subtraction = num1 - num2;
// document.writeln(`<h2>The subtraction of ${num1} and ${num2} is ${subtraction}.`);

// var multiplication = num1 * num2;
// document.writeln(`<h2>The multiplication of ${num1} and ${num2} is ${multiplication}.`);

// var modulus = num1 ** num2;
// document.writeln(`<h2>The modulus of ${num1} and ${num2} is ${modulus}.`);


/* Question # 03: Do the following using JS Mathematic Expressions */
document.writeln(`<h2>Question No.03</h2>`)
// a. Declare a variable.
var number;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.writeln(`Value after variable declaration is: ${number}<br>`);

// c. Initialize the variable with some number.
var number = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.writeln(`Initial value: ${number}<br>`);

// e. Increment the variable.
number++;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.writeln(`Value after increment is: ${number}<br>`);

// g. Add 7 to the variable.
number += 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.writeln(`Value after addition is: ${number}<br>`)

// i. Decrement the variable.
number--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.writeln(`Value after decrement is: ${number}<br>`);

// k. Show the remainder after dividing the variable’s value by 3. 
var remainder = number % 3;

// l. Output : “The remainder is : 0”.
document.writeln(`The remainder is ${remainder}`);


/* Question # 04: Cost of one movie ticket is 600 PKR. Write a script to
store
ticket price in a variable & calculate the cost of buying 5
tickets
to a movie. Example output: */
var ticketPrice = 600;
document.writeln(`<br><br><h2>Question No.04</h2>Total cost of 5 tickets to a movie is ${ticketPrice * 5}`);


/* Question # 05: Write a script to display multiplication table of any
number in your browser. E.g */
// document.writeln(`<br><br><h2>Question No.05</h2>`);
// var tableNum = +prompt("Enter a Number for typing a table: ");
// document.writeln(`<h3>Table of ${tableNum}</h3>`)
// for (var i = 1; i <= 10; i++){
//     document.writeln(`
//         <p>${tableNum} x ${i} = ${tableNum * i}</p>
//         `)
// }


/* Question # 06: The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here. Conversion Formulae: */
document.writeln(`<br><br><h2>Question No.06</h2>`);
// a. Store a Celsius temperature into a variable.
var celsiusTemp = 25;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var fahrenheitFromCelsius = (celsiusTemp * 9 / 5) + 32;
document.writeln(`${celsiusTemp}°C is ${fahrenheitFromCelsius}°F<br>`);

// c. Now store a Fahrenheit temperature into a variable.
var fahrenheitTemp = 70;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsiusFromFahrenheit = (fahrenheitTemp - 32) * 5 / 9;
document.writeln(`${fahrenheitTemp}°F is ${celsiusFromFahrenheit}°C`);


/* Question # 07: Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables. */
document.writeln(`<br><br><h2>Question No.07</h2>`);

document.writeln(`<h3>Shopping Cart</h3>`);

// a. Price of item 1
var item1 = 650;
document.writeln(`Price of Item 1 is ${item1}<br>`);

// c. Ordered quantity of item 1
item1Quan = 3;
document.writeln(`Quantity of Item 1 is ${item1Quan}<br>`);

// b. Price of item 2
var item2 = 100;
document.writeln(`Price of Item 2 is ${item2}<br>`);

// d. Ordered Quantity of item 2
item2Quan = 7;
document.writeln(`Quantity of Item 2 is ${item2Quan}<br>`);

// e. Shipping charges
shipCharges = 100;
document.writeln(`Shipping Charges is ${shipCharges}<br><br>`);

// Compute the total cost & show the receipt in your browser.
document.writeln(`The total cost of your order is ${(item1 *3) + (item2 * 7) + shipCharges}`);


/* Question # 08: Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in
your browser */
document.writeln(`<br><br><h2>Question No.08</h2>`);

document.writeln(`<h3>Marks Sheet</h3>`);

var totalMarks = 980;
var obtainMarks = 804;
var percentage = (obtainMarks / totalMarks) * 100;

document.writeln(`Total Marks: ${totalMarks}<br>
    Obtained Marks: ${obtainMarks}<br>
    Percentage: ${percentage}%
    `);


/* Question # 09: Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee) */
document.writeln(`<br><br><h2>Question No.09</h2>`);

document.writeln(`<h3>Currency in PKR</h3>`);

var usDollar = 10;
var  saudiRiyals = 25;

var totalCurrency = (usDollar * 104.80) + (saudiRiyals * 28);

document.writeln(`Total Currency in PKR is ${totalCurrency}`);


/* Question # 10: Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression */
document.writeln(`<br><br><h2>Question No.10</h2>`);

var numexp = 20;
var expressionCal = ((numexp + 5) * 10) / 2
document.writeln("Result: " + expressionCal);


/* Question # 11: The Age Calculator: Forgot how old someone is?
Calculate it!
Output them to the screen like so: “They are either NN or NN
years old”.
 */
document.writeln(`<br><br><h2>Question No.11</h2>`);

document.writeln(`<h3>Age Calculator</h3>`);

// a. Store the current year in a variable.
var currentYear = 2025;

// b. Store their birth year in a variable.
var birthYear = 2005;

// c. Calculate their 2 possible ages based on the stored values.
var age = currentYear - birthYear;
var age2 = age - 2;
document.writeln(`You are either ${age2} or ${age} years old.`);


/* Question # 12: The Geometrizer: Calculate properties of a circle.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
 (Hint : Area of a circle = π r2, π = 3.142) */
document.writeln(`<br><br><h2>Question No.12</h2>`);

document.writeln(`<h3>The Geometrizer</h3>`);      

// a. Store a radius into a variable. 
var radius = 20;
document.writeln(`Radius of a circle is ${radius}<br>`);

// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
var pi = 3.142;
var circumference = 2 * pi * radius;
document.writeln(`The circumference is ${radius}<br>`);

// Calculate the area based on the radius, and output “The area is NN”.
var area = pi * radius**2;
document.writeln(`The circumference is ${area}`);


/* Question # 13: The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is?
Wonder no more.
Output the result to the screen like so: “You will need
NNNN to last you until the ripe old age of NN”. */
document.writeln(`<br><br><h2>Question No.13</h2>`);

document.writeln(`<h3>The Lifetime Supply Calculator</h3>`);  

// a. Store your favorite snack into a variable
var favSnack = "Chocolate Bar";

// b. Store your current age into a variable.
var currAge = 15;

// c. Store a maximum age into a variable.
var maxAge = 65;

// d. Store an estimated amount per day (as a number).
var estimatedAmount = 2;

// e. Calculate how many would you eat total for the rest of your life.
var totalNeeded = (maxAge - currAge) * 365 * estimatedAmount;
document.writeln(`You will need <strong>${totalNeeded}</strong> ${favSnack} to last you until the ripe old age of <strong>${maxAge}</strong>.`);


