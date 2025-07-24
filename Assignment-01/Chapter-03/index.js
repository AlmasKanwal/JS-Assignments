/* Question # 01: Declare a variable called age & assign to it your age. Show 
your age in an alert box. */
var age = 20;
// alert("I am " + age + " years old.");


/* Question # 02: Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. */
// 1st Method
// var visitCount = 1; 

// alert("You have visited this site " + visitCount++ + " times.");
// alert("You have visited this site " + visitCount++ + " times.");
// alert("You have visited this site " + visitCount++ + " times.");
// alert("You have visited this site " + visitCount++ + " times.");
// alert("You have visited this site " + visitCount++ + " times.");
// alert("You have visited this site " + visitCount++ + " times.");

// 2nd Method
// var visitCount = 1;

// var times = prompt("How many times have you visited this site?");

// for (var i = 1; i <= times; i++) {
//     alert("You have visited this site " + visitCount++ + " times.");
// }


/* Question # 01: Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser: */
var birth_year = 2005;
document.writeln(`<p>My birth year is ${birth_year} <br>Data type of my declared variable is ${typeof birth_year}</p>`);


/* Question # 04: A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”. */

var clothingStore = "www.xyzClothing.com";
var visitorsName = "John Doe";
var productTitle = 5;
var  quantity = "T-shirt";

document.writeln(`<p><strong>${visitorsName}</strong> ordered <strong>${quantity}</strong> <strong>${productTitle}</strong>(s) on <strong>${clothingStore}</strong> Clothing Store.</p>`);