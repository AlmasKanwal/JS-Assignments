/* Question # 01: Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser: */
document.writeln(`<h2>Question No: 01</h2>`);
document.writeln(`<h3>Result</h3>`);

var a = 10;
document.writeln(`The value of a is: ${a}<br>`);
document.writeln(`...............................................<br><br>`);

// Pre-increment
document.writeln(`The value of ++a is: ${++a}<br>`);
document.writeln(`Now the value of a is: ${a}<br><br>`);

// Post-increment
document.writeln(`The value of a++ is: ${a++}<br>`);
document.writeln(`Now the value of a is: ${a}<br><br>`);

// Pre-decrement
document.writeln(`The value of --a is: ${--a}<br>`);
document.writeln(`Now the value of a is: ${a}<br><br>`);

// Post-decrement
document.writeln(`The value of a-- is: ${a--}<br>`);
document.writeln(`Now the value of a is: ${a}<br>`);


/* Question # 02: What will be the output in variables a, b & result after
execution of the following script:
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--; */

document.writeln(`<h2>Question No: 02</h2>`);
document.writeln(`<h3>Checking the result of this expression: --a - --b + ++b + b--;</h3>`);

var a = 2; // 1
document.writeln(`The initial value of a is: ${a}<br>`);

var b = 1; // 0  1 0
document.writeln(`The initial value of b is: ${b}<br><br>`);

var result = --a - --b + ++b + b--;
//           1   - 0   + 1   + 1

document.writeln(`The final value of a is ${a}<br>`);
document.writeln(`The final value of b is ${b}<br>`);
document.writeln(`The final result of this expression (--a - --b + ++b + b--) is ${result}`);



/* Question # 03: Write a program that takes input a name from user &
greet the user.  */
document.writeln(`<h2>Question No: 03</h2>`);

// var userName = prompt("What's your name? ");
// document.writeln(`Hello ${userName}! Welcome to our website. Have a fantastic day! 😊`);


/* Question # 04: Write a program to take input a number from user &
display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
should be displayed by default. */
document.writeln(`<h2>Question No: 04</h2>`);
// var numTable = +prompt("Enter a number for generating table: ");

// if(isNaN(numTable) || numTable === 0){
//     for (var i = 1; i <= 10; i++){
//         document.writeln(`${5} x ${i} = ${5 * i}<br>`);
//     }
// } else{
//     for (var i = 1; i <= 10; i++){
//         document.writeln(`${numTable} x ${i} = ${numTable * i}<br>`);
//     }
// }


/* Question # 05:  Take:
show the result in browser like this.(Hint: user table) */
document.writeln(`<h2>Question No: 05</h2>`);

// a) Take three subjects name from user and store them in 3 different variables.
var subject1 = prompt("Enter 1st Subject: ");
var subject2 = prompt("Enter 2nd Subject: ");
var subject3 = prompt("Enter 3rd Subject: ");

// b) Total marks for each subject is 100, store it in another variable.
var totalMarks = 100;

// c) Take obtained marks for first subject from user and stored it in different variable.
var marksSub1 = +prompt("Enter obtained marks of first subject: ");

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
var marksSub2 = +prompt("Enter obtained marks of second subject: ");
var marksSub3 = +prompt("Enter obtained marks of third subject: ");

// e) Now calculate total marks and percentage
var totalObtainedMarks = marksSub1 + marksSub2 + marksSub3;
var overallTotalMarks = totalMarks * 3;
var overallTotalPercentage = (totalObtainedMarks / overallTotalMarks) * 100;

document.writeln(`
    <table style="width: 100%; border-collapse: collapse; margin: 20px auto; font-family: Arial; text-align: center;">
        <thead>
            <tr style="background-color: #f2f2f2;">
                <th style="border: 1px solid #999; padding: 10px;">Subject</th>
                <th style="border: 1px solid #999; padding: 10px;">Total Marks</th>
                <th style="border: 1px solid #999; padding: 10px;">Obtained Marks</th>
                <th style="border: 1px solid #999; padding: 10px;">Percentage</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border: 1px solid #999; padding: 10px;">${subject1}</td>
                <td style="border: 1px solid #999; padding: 10px;">${totalMarks}</td>
                <td style="border: 1px solid #999; padding: 10px;">${marksSub1}</td>
                <td style="border: 1px solid #999; padding: 10px;">${(marksSub1 / totalMarks) * 100}%</td>
            </tr>
            <tr>
                <td style="border: 1px solid #999; padding: 10px;">${subject2}</td>
                <td style="border: 1px solid #999; padding: 10px;">${totalMarks}</td>
                <td style="border: 1px solid #999; padding: 10px;">${marksSub2}</td>
                <td style="border: 1px solid #999; padding: 10px;">${(marksSub2 / totalMarks) * 100}%</td>
            </tr>
            <tr>
                <td style="border: 1px solid #999; padding: 10px;">${subject3}</td>
                <td style="border: 1px solid #999; padding: 10px;">${totalMarks}</td>
                <td style="border: 1px solid #999; padding: 10px;">${marksSub3}</td>
                <td style="border: 1px solid #999; padding: 10px;">${(marksSub3 / totalMarks) * 100}%</td>
            </tr>
            <tr style="background-color: #e0f7fa; font-weight: bold;">
                <td style="border: 1px solid #999; padding: 10px;">Total</td>
                <td style="border: 1px solid #999; padding: 10px;">${overallTotalMarks}</td>
                <td style="border: 1px solid #999; padding: 10px;">${totalObtainedMarks}</td>
                <td style="border: 1px solid #999; padding: 10px;">${overallTotalPercentage}%</td>
            </tr>
        </tbody>
    </table>
    `)





