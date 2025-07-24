/* Question # 01: Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122). */
document.writeln(`<h2>Question No.01</h2>`);



/* Question # 02: Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal. */
document.writeln(`<h2>Question No.02</h2>`);

// var a = +prompt("Enter 1st Number: ");
// var b = +prompt("Enter 2nd Number: ");

// if (a > b){
//     document.writeln(`${a} is larger than ${b}`);
// } else if (a === b){
//     document.writeln(`${a} is equals to ${b}`);
// } else{
//     document.writeln(`${a} is smaller than ${b}`);
// }


/* Question # 03: Write a program that takes input a number from user &
state whether the number is positive, negative or zero. */
document.writeln(`<h2>Question No.03</h2>`);

// var checkNum = +prompt("Enter Number: ");

// if(checkNum > 0){
//     document.writeln(`${checkNum} is positive number`);
// } else if(checkNum < 0){
//     document.writeln(`${checkNum} is negative number`);
// } else{
//     document.writeln(`The number is zero, which is neither positive nor negative`);
// }


/* Question # 04: Write a program that takes a character (i.e. string of
length 1) and returns true if it is a vowel, false otherwise */
document.writeln(`<h2>Question No.04</h2>`);

// var character = prompt("Enter Character of Length 1: ").toLowerCase();

// if(character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
//     document.writeln(`${character} is vowel.`);
// } else{
//     document.writeln(`${character} is consonant.`);
// }


/* Question # 05: Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”
ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise. */
document.writeln(`<h2>Question No.05</h2>`);

// var correctPswd = "admin123@";

// var userPswd = prompt("Enter your password: ");

// if(!userPswd){
//     document.writeln(`Please enter your password`);
// } else if(userPswd == correctPswd){
//     document.writeln(`Correct! The password you entered matches the original password`);
// } else{
//     document.writeln(`Incorrect password`);
// } 


/* Question # 06: This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
} */
document.writeln(`<h2>Question No.06</h2>`);

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
    document.writeln(`${greeting}`);
} else{
    greeting = "Good evening";
    document.writeln(`${greeting}`);
} 


/* Question # 07: Write a program that takes time as input from user in 24
hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements */
document.writeln(`<h2>Question No.07</h2>`);

var time = +prompt("Enter 24 hour time (1900 for 7pm): ");

if(time >= 0 && time < 1200){
    document.writeln(`Good Morning`);
} else if(time >= 1200 && time < 1700){
    document.writeln(`Good Afternoon`);
} else if(time >= 1700 && time < 2100){
    document.writeln(`Good Evening`);
} else if(time >= 2100 && time <= 2359){
    document.writeln(`Good Night`);
} else{
    document.writeln(`Invalid time. Please enter 24 hour time between 0000 to 2359`);
}






