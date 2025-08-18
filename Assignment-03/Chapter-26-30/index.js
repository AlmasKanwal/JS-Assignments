/* Question No.01: Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */
document.writeln(`<h2>Question No.01</h2>`);
document.writeln(`<h3>Positive Floating Numbers (Round Off, Floor and Ceil)</h3>`);

// var number = prompt("Enter Positive Floating Point Number: ");
// var roundOff = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);

// document.writeln(`Number: ${number} <br>`);
// document.writeln(`Round Off Value: ${roundOff} <br>`);
// document.writeln(`Floor Value: ${floor} <br>`);
// document.writeln(`Ceil Value: ${ceil} <br>`);


/* Question No.02: Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */
document.writeln(`<h2>Question No.02</h2>`);
document.writeln(`<h3>Negative Floating Numbers (Round Off, Floor and Ceil)</h3>`);

// var number = prompt("Enter Negative Floating Point Number: ");
// var roundOff = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);

// document.writeln(`Number: ${number} <br>`);
// document.writeln(`Round Off Value: ${roundOff} <br>`);
// document.writeln(`Floor Value: ${floor} <br>`);
// document.writeln(`Ceil Value: ${ceil} <br>`);


/* Question No.03: Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */
document.writeln(`<h2>Question No.03</h2>`);
document.writeln(`<h3>Absolute Values</h3>`);

// var num = prompt("Enter Number: ");
// var absolute = Math.abs(num);

// document.writeln(`The absolute value of ${num} is ${absolute}`);


/* Question No.04: Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser.: */
document.writeln(`<h2>Question No.04</h2>`);
document.writeln(`<h3>Random Number</h3>`);

var dice = Math.floor(Math.random() * 6) + 1;
document.writeln(`random dice value: ${dice}`);


/* Question No.05: Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser */
document.writeln(`<h2>Question No.05</h2>`);
document.writeln(`<h3>Simulates a coin toss</h3>`);

var toss = Math.floor(Math.random() * 2);

if(toss === 0){
    document.writeln(`random coin value: Heads`);
} else{
    document.writeln(`random coin value: Tails`);
}


/* Question No.06: Write a program that shows a random number between 1
and 100 in your browser. */
document.writeln(`<h2>Question No.06</h2>`);
document.writeln(`<h3>Random Number Between 1 and 100</h3>`);

var randomNum = Math.floor(Math.random() * 100) + 1;
document.writeln(`random number between 1 and 100: ${randomNum}`);


/* Question No.07: Write a program that asks the user about his weight. Parse
the user input and display his weight in your browser.
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms */
document.writeln(`<h2>Question No.07</h2>`);
document.writeln(`<h3>Weight of User</h3>`);

// var num = prompt("Enter your weight in kilograms ");
// var parseNum = parseFloat(num);
// document.writeln(`The weight of user is ${parseNum} kilograms`);


/* Question No.08: Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user. */
document.writeln(`<h2>Question No.08</h2>`);
document.writeln(`<h3>Guess Secret Number</h3>`);

// var secretNum = +prompt("Enter Secret Number between 1 and 10: ");
// var secrets = Math.floor(Math.random() * 10) + 1;

// if(secrets === secretNum){
//     document.writeln(`Congratulations! You guessed the correct number: ${secrets}`);
// } else{
//     document.writeln(`Wrong! The secret number was ${secrets}. Please try again.`);
// }