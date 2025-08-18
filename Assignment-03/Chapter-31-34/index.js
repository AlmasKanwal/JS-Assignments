/* Question No.01: Write a program that displays current date and time in
your browser. */
document.writeln(`<h2>Question No.01</h2>`);
document.writeln(`<h3>Finding Current Date & Time</h3>`);

var currentDate = new Date();
document.writeln(`Current Date & Time: ${currentDate}`);


/* Question No.02: Write a program that alerts the current month in words.
For example December. */
document.writeln(`<h2>Question No.02</h2>`);
document.writeln(`<h3>Current Month in Words</h3>`);

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date = new Date();
// var monthIndex = date.getMonth();
// var month = months[monthIndex];
// alert(`Current Month: ${month}`);


/* Question No.03: Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun. */
document.writeln(`<h2>Question No.03</h2>`);
document.writeln(`<h3>Current Day</h3>`);

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var date = new Date();
// var daysIndex = date.getDay();
// var day = days[daysIndex].slice(0, 3);
// alert(`Today is ${day}`);


/* Question No.04: Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today. */
document.writeln(`<h2>Question No.04</h2>`);
document.writeln(`<h3>Working or Fun Day</h3>`);

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date = new Date();
var daysIndex = date.getDay();
var day = days[daysIndex];
if(day === "Saturday" || day === "Sunday"){
    document.writeln(`It’s Fun day`);
} else{
    document.writeln(`It’s a Working day`);
}


/* Question No.05: Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”.
 */
document.writeln(`<h2>Question No.05</h2>`);
document.writeln(`<h3>First or Last Days of Month</h3>`);

var date = new Date();
var dateIndex = date.getDate();
if(dateIndex <= 15){
    document.writeln(`First fifteen days of month`);
} else{
    document.writeln(`Last days of the month`);
}


/* Question No.06: Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object. */
document.writeln(`<h2>Question No.06</h2>`);
document.writeln(`<h3>getTime in milliseconds & in minutes</h3>`);

var date = new Date();
var timeMilli = date.getTime();
var minutes = timeMilli / (1000 * 60);
document.writeln(`Current Date: ${date} <br>`);
document.writeln(`Elapsed milliseconds since January 1, 1970: ${timeMilli} <br>`);
document.writeln(`Elapsed minutes since January 1, 1970: ${minutes}`);


/* Question No.07: Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”. */
document.writeln(`<h2>Question No.07</h2>`);
document.writeln(`<h3>Test AM or PM</h3>`);

var date = new Date();
var hour = date.getHours();
if(hour < 12){
    document.writeln("It's AM");
} else{
    document.writeln("It's PM");
}


/* Question No.08: Write a program that creates a Date object for the last day
of the last month of 2020 and assigns it to variable named
laterDate. */
document.writeln(`<h2>Question No.08</h2>`);
document.writeln(`<h3>Last month of 2020</h3>`);

var customDate = new Date("December 31, 2020");
document.writeln(`Later Date: ${customDate}`);


/* Question No.09: Create a date object of the starting date of this Ramadan
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015 */
document.writeln(`<h2>Question No.09</h2>`);
document.writeln(`<h3>Number of days of Ramadan</h3>`);

var dateRamadan = new Date("March 1, 2025");
var laterRamadan = new Date("June 18, 2015");
var ramadan = (dateRamadan - laterRamadan) / (1000 * 60 * 60 * 24);
document.writeln(`${ramadan} days have passed since 1st Ramadan, 2015`);


/* Question No.10: Write a program that displays in your browser the
seconds that elapsed between the reference date and the
beginning of 2015. */
document.writeln(`<h2>Question No.10</h2>`);
document.writeln(`<h3>Finding elapsed between the reference date & beginning of 2015</h3>`);

var reference = new Date("December 5, 2015 22:50:16");
var beginning = new Date("January 1, 2015");
var diff = (reference - beginning) / 1000;
document.writeln(`On reference date ${reference}, ${diff} seconds had passed since beginning of 2015`);


/* Question No.11: Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser. */
document.writeln(`<h2>Question No.11</h2>`);
document.writeln(`<h3>Hour</h3>`);

var date = new Date("December 5, 2015 22:08:16");
document.writeln(`1 hour ago, it was ${date} <br>`);
var currentHour = date.getHours();
date.setHours(currentHour + 1);
document.writeln(`Current date: ${date}`);


/* Question No.12: Write a program that creates a date object and show the
date in an alert box that is reset to 100 years back? */
document.writeln(`<h2>Question No.12</h2>`);
document.writeln(`<h3>100 Years Back</h3>`);

var date = new Date();
document.writeln(`Current Date: ${date} <br>`);
var oldDate = date.getFullYear() - 100;
date.setFullYear(oldDate);
document.writeln(`Date 100 years back: ${date}`);


/* Question No.13: Write a program to ask the user about his age. Calculate
and show his birth year in your browser. */
document.writeln(`<h2>Question No.13</h2>`);
document.writeln(`<h3>Age</h3>`);

// var age = +prompt("Enter your age: ");
// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// var birthYear = currentYear - age;
// document.writeln(`Your age is ${age} <br>`)
// document.writeln(`Your birth year is ${birthYear}`);


/* Question No.14: Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2
decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,
Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge */
document.writeln(`<h2>Question No.14</h2>`);
document.writeln(`<h3>K-Electric Bill</h3>`);

var customerName = prompt("Enter your name: ");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = new Date();
var monthIdx = currentMonth.getMonth();
var month = months[monthIdx];
var numberUnits = prompt("Enter no of units: ");
var perUnit = 16;
var latePayment = 350;
var netAmount = numberUnits * perUnit;
var grossAmount = netAmount + latePayment;

// var dueDate = 20;
// var today = currentMonth.getDate();
// if(today <= dueDate){
//     document.writeln(`Late Payment Surcharge: <strong>${latePayment}</strong> <br>`);
// } else{
//     document.writeln(`Gross Amount Payable (after Due Date): <strong>${grossAmount}</strong> <br>`);
// }

document.writeln(`Customer Name: <strong>${customerName}</strong> <br>`);
document.writeln(`Month: <strong>${month}</strong> <br>`);
document.writeln(`Number of Units: <strong>${numberUnits}</strong> <br>`);
document.writeln(`Charges Per Unit: <strong>${perUnit}</strong> <br>`);
document.writeln(`Net Amount Payable (within Due Date): <strong>${netAmount}</strong> <br>`);
document.writeln(`Late Payment Surcharge: <strong>${latePayment}</strong> <br>`);
document.writeln(`Gross Amount Payable (after Due Date): <strong>${grossAmount}</strong> <br>`);