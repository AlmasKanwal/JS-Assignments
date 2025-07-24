/* Question # 01: Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights” */
document.writeln(`<h2>Question No.01</h2>`);

// var city = prompt("Enter City of Pakistan: ");

// if(city === "Karachi" || city === "karachi" || city === "KARACHI"){
//     document.writeln(`Welcome to City of Lights`);
// } else{
//     document.writeln(`Welcome to ${city}`);
// }


/* Question # 02: Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am.
 */
document.writeln(`<h2>Question No.02</h2>`);

// var gender = prompt("Enter your gender: ");

// if(gender === "Male" || gender === "MALE" || gender === "male"){
//     document.writeln(`Good Morning Sir`);
// } else if(gender === "Female" || gender === "FEMALE" || gender === "female"){
//     document.writeln(`Good Morning Ma'am`);
// } else{
//     document.writeln(`Invalid Gender`);
// }


/* Question # 03: Write a program to take input color of road traffic signal
from the user & show the message according to this table: */
document.writeln(`<h2>Question No.03</h2>`);

// var trafficColor = prompt("Enter the color of road traffic signal: ");

// if(trafficColor === "Red" || trafficColor === "red" || trafficColor === "RED"){
//     document.writeln(`${trafficColor}: Must Stop`);
// } else if(trafficColor === "Yellow" || trafficColor === "yellow" || trafficColor === "YELLOW"){
//     document.writeln(`${trafficColor}: Ready to Move`);
// } else if(trafficColor === "Green" || trafficColor === "green" || trafficColor === "GREEN"){
//     document.writeln(`${trafficColor}: Move Now`);
// } else{
//     document.writeln(`Enter valid signal color (Red, Yellow or Green)`);
// }


/* Question # 04: Write a program to take input remaining fuel in car (in
litres) from user. If the current fuel is less than 0.25litres,
show the message “Please refill the fuel in your car”
 */
document.writeln(`<h2>Question No.04</h2>`);

// var fuel = prompt("Enter remaining fuel in car: ");

// if(fuel < 0.25){
//     document.writeln(`Please refill the fuel in your car`);
// } else{
//     document.writeln(`Your fuel in car is ${fuel}litres`);
// }


/* Question # 05: Run this script, & check whether alert message would be
displayed or not. Record the outputs. */
document.writeln(`<h2>Question No.05</h2>`);

// a)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// document.writeln(`a) given condition for variable a is true<br><br>
// Alert will be displayed<br>`);
// }

// b) 
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// document.writeln(`b) Alert will not be displayed<br>`);
// }

// c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// document.writeln(`c) condition 2 is true<br>
//     condition 4 is true<br><br>
//     Two conditions (alerts) will not be displayed<br>`);

// d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// document.writeln(`d) The cost equals<br><br>
// Alert will be displayed<br>`);

// e)
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// document.writeln(`e) True<br><br>
// One condition (alert) will not be displayed<br>`);

// f)
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// document.writeln(`f) car is smaller than cat<br><br>
// Alert will be displayed<br>`);


/* Question # 06: Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute
grade as per following table: Show the total marks, marks obtained, percentage, grade &
remarks like: */
document.writeln(`<h2>Question No.06</h2>`);

// document.writeln(`<h3>Marks Sheet</h3><br>`);
// var subject_1 = +prompt("Enter marks of subject 1: ");
// var subject_2 = +prompt("Enter marks of subject 2: ");
// var subject_3 = +prompt("Enter marks of subject 3: ");
// var totalMarks = +prompt("Enter total marks: ");

// var obtainedMarks = subject_1 + subject_2 + subject_3;
// var percentage = (obtainedMarks / totalMarks) * 100;

// document.writeln(`Total Marks: ${totalMarks}<br>`);
// document.writeln(`Obtained Marks: ${obtainedMarks}<br>`);

// if(percentage >= 80){
//     document.writeln(`Percentage: ${percentage}%<br>
//         Grade: A-one<br>
//         Remarks: Excellent<br>
//         `);
// } else if(percentage >= 70){
//     document.writeln(`Percentage: ${percentage}%<br>
//         Grade: A<br>
//         Remarks: Good<br>
//         `);
// } else if(percentage >= 60){
//     document.writeln(`Percentage: ${percentage}%<br>
//         Grade: B<br>
//         Remarks: You need to improve<br>
//         `);
// } else{
//     document.writeln(`Percentage: ${percentage}%<br>
//         Grade: Fail<br>
//         Remarks: Sorry<br>
//         `);
// } 


/* Question # 07: Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”. */
document.writeln(`<h2>Question No.07</h2>`);

// var secretNumber = 6;
// var guessNumber = +prompt("Guess Secret Number between 1 to 10:  ");

// if(guessNumber === secretNumber){
//     document.writeln(`Bingo! Correct answer`);
// } else if(guessNumber + 1 === secretNumber || guessNumber - 1 === secretNumber){
//     document.writeln(`Close enough to the correct answer`);
// } else {
//     document.writeln(`Wrong guess! Try again.`);
// }


/* Question # 08: Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3. */
document.writeln(`<h2>Question No.08</h2>`);

// var num3 = +prompt("Enter Number: ");

// if(num3 % 3 === 0){
//     document.writeln(`<strong>${num3}</strong> is completely divisible by 3`);
// } else{
//     document.writeln(`<strong>${num3}</strong> is not divisible by 3`);
// }


/* Question # 09: Write a program that checks whether the given input is an
even number or an odd number. */
document.writeln(`<h2>Question No.09</h2>`);

// var number1 = +prompt("Enter a Number for checking even no: ");

// if(number1 % 2 === 0){
//     document.writeln(`${number1} is Even Number`);
// } else{
//     document.writeln(`${number1} is not a Even Number`);
// }


/* Question # 10: Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.” */
document.writeln(`<h2>Question No.10</h2>`);

// var temperature = +prompt("Enter Temperature: ");
// if (temperature > 40){
//     document.writeln(`It is too hot outside.`);
// } else if (temperature > 30){
//     document.writeln(`The Weather today is Normal.`);
// } else if (temperature > 20){
//     document.writeln(`Today’s Weather is cool.`);
// } else if (temperature > 10){
//     document.writeln(`OMG! Today’s weather is so Cool.`);
// } else{
//     document.writeln(`Enter Valid Temperature`);
// }


/* Question # 11: Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user. */
document.writeln(`<h2>Question No.11</h2>`);

var firstNum = +prompt("Enter First Number for Operation: ");
var secondNum = +prompt("Enter Second Number for Operation: ");
var Operation = prompt("Enter Operation for Calculation (+, -, *, /, %): ");

if(Operation === "+"){
    document.writeln(`The sum of ${firstNum} and ${secondNum} is ${firstNum + secondNum}`);
} else if(Operation === "-"){
    document.writeln(`The subtraction of ${firstNum} and ${secondNum} is ${firstNum - secondNum}`);
} else if(Operation === "*"){
    document.writeln(`The multiplication of ${firstNum} and ${secondNum} is ${firstNum * secondNum}`);
} else if(Operation === "/"){
    if(secondNum === 0){
        document.writeln(`The denominator should not be zero. Enter valid number.`);
    } else{
        document.writeln(`The division of ${firstNum} and ${secondNum} is ${firstNum / secondNum}`);
    }   
} else if(Operation === "%"){
    document.writeln(`The remainder of ${firstNum} and ${secondNum} is ${firstNum % secondNum}`);
} else{
    document.writeln(`Enter valid operation (+, -, *, /, %)`);
}
