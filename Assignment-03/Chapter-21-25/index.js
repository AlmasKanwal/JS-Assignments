/* Question No.01: Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name. */
document.writeln(`<h2>Question No.01</h2>`);
document.writeln(`<h3>Greeting User</h3>`);

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");

// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName + " Welcome!");


/* Question No.02: Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser */
document.writeln(`<h2>Question No.02</h2>`);
document.writeln(`<h3>Favorite Mobile Phone Model</h3>`);

// var favMobile = prompt("Which mobile phone model is your favorite? ");
// document.writeln("My favorite phone is: " + favMobile + "<br>");
// document.writeln("Lenght of string : " + favMobile.length);


/* Question No.03: Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser . */
document.writeln(`<h2>Question No.03</h2>`);
document.writeln(`<h3>Display the Index of 'n'</h3>`);

var word = "Pakistani";
document.writeln("String: " + word + "<br>");
document.writeln("Index of 'n': " + word.indexOf("n"));


/* Question No.04: Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser. */
document.writeln(`<h2>Question No.04</h2>`);
document.writeln(`<h3>Index of 'l'</h3>`);

var word = "Hello World";
document.writeln("String: " + word + "<br>");
document.writeln("Index of 'l': " + word.lastIndexOf("l"));


/* Question No.05: Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser. */
document.writeln(`<h2>Question No.05</h2>`);
document.writeln(`<h3>Character at 3rd index</h3>`);

var word = "Pakistani";
document.writeln("String: " + word + "<br>");
document.writeln("Character at index 3: " + word.charAt(3));


/* Question No.06: Repeat Q1 using string concat() method */
document.writeln(`<h2>Question No.06</h2>`);
document.writeln(`<h3>Merge String using concat() Method</h3>`);

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");

// var fullName = firstName.concat(" ", lastName);
// alert("Welcome " + fullName);


/* Question No.07: Write a program to replace the “Hyder” to “Islam” in the
word “Hyderabad” and display the result in your browser. */
document.writeln(`<h2>Question No.07</h2>`);
document.writeln(`<h3>Replacing word</h3>`);

var city = "Hyderabad";
var replaceCity = city.replace("Hyder", "Islam")

document.writeln("City: " + city + "<br>");
document.writeln("After Replacement: " + replaceCity);


/* Question No.08: Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and
football together.”; */
document.writeln(`<h2>Question No.08</h2>`);
document.writeln(`<h3>Replace all occurences of 'and' with '&'</h3>`);

var message = "Ali and Sami are best friends. They play cricket and football together."
var repMsg = message.replace(/and/gi, "&");
document.writeln(repMsg);


/* Question No.09: Write a program that converts a string “472” to a number
472. Display the values & types in your browser. */
document.writeln(`<h2>Question No.09</h2>`);
document.writeln(`<h3>Converting String to a Number</h3>`);

var str = "472";
document.writeln("Value: " + str + "<br>");
document.writeln("Type: " + typeof str + "<br>");
var conNum = Number(str); 
document.writeln("Value: " + conNum + "<br>");
document.writeln("Value: " + typeof conNum);


/* Question No.10: Write a program that takes user input. Convert and
show the input in capital letters. */
document.writeln(`<h2>Question No.10</h2>`);
document.writeln(`<h3>Converting String into Upper Case</h3>`);

// var upCaseInput = prompt("Enter Input for converting string into uppercase: ");
// document.writeln("User Input: " + upCaseInput + "<br>");
// var upper = upCaseInput.toUpperCase();
// document.writeln("Uppercase: " + upper);


/* Question No.11: Write a program that takes user input. Convert and
show the input in title case. */
document.writeln(`<h2>Question No.11</h2>`);
document.writeln(`<h3>Convert String into Title Case</h3>`);

// var tiCaseInput = prompt("Enter Input for converting string into Title Case: ")
// document.writeln("User Input: " + tiCaseInput + "<br>");

// var titleCase = "";
// var isTitle = true;

// for(var i=0; i < tiCaseInput.length; i++){
//     var char = tiCaseInput.charAt(i);
    
//     if(isTitle && char !== " "){
//         titleCase += char.toUpperCase();
//         isTitle = false;       
//     } else{
//         titleCase += char.toLowerCase();
//     }

//     if(char === " "){
//         isTitle = true;
//     }

// }
// document.writeln("Title Case: " + titleCase + "<br>");


/* Question No.12: Write a program that converts the variable num to
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser.  */
document.writeln(`<h2>Question No.12</h2>`);
document.writeln(`<h3>Converting Number to String</h3>`);

var num = 35.36 ;
document.writeln("Number: " + num + "<br>")
var str = num.toString();

var result = "";
for(var i=0; i < str.length; i++){
    var char = str[i];
    if(char !== "."){
        result += char;
    }
}
document.writeln("Result: " + result);


/* Question No.13: Write a program to take user input and store username
in a variable. If the username contains any special symbol
among [@ . , !], prompt the user to enter a valid username.
For character codes of [@ . */
document.writeln(`<h2>Question No.13</h2>`);
document.writeln(`<h3>Valid or Invalid Username</h3>`);

// var userName = prompt("Enter username: ");
// var specialchar = ["@", ".", ",", "!"];
// var isValid = true;

// for(var i=0; i < specialchar.length; i++){
//     if(userName.indexOf(specialchar[i]) !== -1){
//         alert("Invalid Username Contain: " + specialchar[i]);
//         isValid = false;
//         break;
//     }
// }

// if(isValid){
//     alert("Valid Username.");
// }



/* Question No.14: You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array. After searching, prompt the user whether the given
item is found in the list or not.
Note: Perform case insensitive search. Whether the user
enters cookie, Cookie, COOKIE or coOkIE, program
should inform about its availability. Example */
document.writeln(`<h2>Question No.14</h2>`);
document.writeln(`<h3>Finding Item</h3>`);

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var bakery = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am? ").toLowerCase();
// var found = false;

// for(var i=0; i < A.length; i++){
//     if(bakery === A[i]){
//         document.writeln(`Cookie is available at index ${i} in our bakery.`);
//     } 
//     found = true;
//     break;
// }

// if(bakery !== A[i]){
//     document.writeln(`We are sorry. ${bakery} is not available in our bakery.`);
// }


/* Question No.15: Write a program to take password as an input from
user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document. */
document.writeln(`<h2>Question No.15</h2>`);
document.writeln(`<h3>Password</h3>`);

// var pass = prompt("Enter Your Password: ");
// var hasAlphabet = false;
// var hasNumber = false;
// var message = "";


// if(pass.charCodeAt(0) >= 48 && pass.charCodeAt(0) <= 57){
//     message = "Password cannot start with a number.";
// } else if(pass.length < 6){
//     message = "Password must be at least 6 characters long.";
// } else{
//     for(var i=0; i < pass.length; i++){
//         var charCode = pass.charCodeAt(i);
//         if(charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122){
//             hasAlphabet = true;
//         }
//         if(charCode >= 48 && charCode <= 57){
//             hasNumber = true;
//         }        
//     }
//     if(!hasAlphabet || !hasNumber){
//         message = "Password must contain both alphabets and numbers.";
//     } else{
//         message = "Password is valid!";
//     }
// }

// document.writeln("User Password: " + pass + "<br>");
// document.writeln("Is Password Valid: " + message);


/* Question No.16: Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser. */
document.writeln(`<h2>Question No.16</h2>`);
document.writeln(`<h3>String to Array</h3>`);

var university = "University of Karachi";
var array = university.split("");

document.writeln("String: " + university + "<br>");
document.writeln("Array: " + array + "<br>");
document.writeln("Loop: " + "<br>");

for(var i=0; i < array.length; i++){
    document.writeln(array[i] + "<br>");
}


/* Question No.17: Write a program to display the last character of a user
input. */
document.writeln(`<h2>Question No.17</h2>`);
document.writeln(`<h3>Last Character</h3>`);

// var userInp = prompt("Enter Word: ");
// var storeStr = "";

// for(var i= (userInp.length -1) ; i >= 0 ; i--){
//     storeStr = userInp[i];
//     break;
// }

// document.writeln("User input: " + userInp + "<br>");
// document.writeln("Last Character of input: " + storeStr);


/* Question No.18: You have a string “The quick brown fox jumps over the
lazy dog”. Write a program to count number of
occurrences of word “the” in given string. */
document.writeln(`<h2>Question No.18</h2>`);
document.writeln(`<h3>Number of Occurrences of Word "the"</h3>`);

var string = "The quick brown fox jumps over the lazy dog".toLowerCase();
var count = 0;

for(var i=0; i < string.length; i++){
    if((string.slice(i, i + 3) === "the") && (i === 0 || string[i - 1] === " ") && (i + 3 === string.length || string[i + 3] === " ")){
        count++;
    }
}
document.writeln("Text: " + string + "<br>");
document.writeln("There are " + count + " occurrence(s) of the word 'the'");