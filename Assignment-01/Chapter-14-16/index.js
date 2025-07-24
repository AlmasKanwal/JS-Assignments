/* Question # 01: Declare an empty array using JS literal notation to store
student names in future. */
document.writeln(`<h2>Question No.01</h2>`);

// var studentsName = [];
// var name1 = prompt("Enter 1st Student Name: ");
// var name2 = prompt("Enter 2nd Student Name: ");
// var name3 = prompt("Enter 3rd Student Name: ");

// studentsName[0] = name1;
// studentsName[1] = name2;
// studentsName[2] = name3;

// document.writeln(`<h3>Students Name</h3>`);
// document.writeln(`1) ${studentsName[0]}<br>
//     2) ${studentsName[1]}<br>
//     3) ${studentsName[2]}
// `);


/* Question # 02: Declare and initialize a strings array. */
document.writeln(`<h2>Question No.02</h2>`);

var stringArr = ["Apple", "Mango", "Orange", "Banana", "Peach"];

document.writeln(`${stringArr[0]}<br>
    ${stringArr[1]}<br>
    ${stringArr[2]}<br>
    ${stringArr[3]}<br>
    ${stringArr[4]}<br>
`);


/* Question # 03: Declare and initialize a numbers array. */
document.writeln(`<h2>Question No.03</h2>`);

var numberArr = [2005, 2007, 2010, 2014, 2017, 2019, 2021];

document.writeln(`${numberArr[0]}<br>
    ${numberArr[1]}<br>
    ${numberArr[2]}<br>
    ${numberArr[3]}<br>
    ${numberArr[4]}<br>
    ${numberArr[5]}<br>
    ${numberArr[6]}
`);


/* Question # 04: Declare and initialize a boolean array. */
document.writeln(`<h2>Question No.04</h2>`);

var booleanArr = [true, false];

document.writeln(`${booleanArr[0]}<br>
    ${booleanArr[1]}
`);


/* Question # 05: Declare and initialize a mixed array. */
document.writeln(`<h2>Question No.05</h2>`);

var mixedArr = ["Almas", true, 20, undefined, "$", null, 2005];

document.writeln(`${mixedArr[0]}<br>
    ${mixedArr[1]}<br>
    ${mixedArr[2]}<br>
    ${mixedArr[3]}<br>
    ${mixedArr[4]}<br>
    ${mixedArr[5]}<br>
`);


/* Question # 06: Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like: */
document.writeln(`<h2>Question No.06</h2>`);

var eduQualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

document.writeln(`1) ${eduQualification[0]}<br>
    2) ${eduQualification[1]}<br>
    3) ${eduQualification[2]}<br>
    4) ${eduQualification[3]}<br>
    5) ${eduQualification[4]}<br>
    6) ${eduQualification[5]}<br>
    7) ${eduQualification[6]}<br>
    8) ${eduQualification[7]}<br>
`);


/* Question # 07: Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like: */
document.writeln(`<h2>Question No.07</h2>`);

var stName = ["Iqra", "Insha", "Sawera"];
var stScore = [490, 450, 396.5];
var totalMarks = 500;

document.writeln(`
    Score of ${stName[0]} is ${stScore[0]}. Percentage ${(stScore[0]/totalMarks) * 100}<br>
    Score of ${stName[1]} is ${stScore[1]}. Percentage ${(stScore[1]/totalMarks) * 100}<br>
    Score of ${stName[2]} is ${stScore[2]}. Percentage ${(stScore[2]/totalMarks) * 100}<br>
`);


/* Question # 08: Initialize an array with color names. Display the array
elements in your browser.
*/
document.writeln(`<h2>Question No.08</h2>`);

// // Initial array
// var colorsName = ["Red", "Green", "Yellow", "Blue", "Black", "White"];
// document.writeln(`Original Array: <strong>${colorsName}</strong><br><br>`);

// // a. Add color at beginning
// var addColorStart = prompt("a) Enter a color to add at the beginning:");
// colorsName.unshift(addColorStart);
// document.writeln(`1st Updated Array: <strong>${colorsName}</strong><br><br>`);

// // b. Add color at end
// var addColorLast = prompt("b) Enter a color to add at the end:");
// colorsName.push(addColorLast);
// document.writeln(`2nd Updated Array: <strong>${colorsName}</strong><br><br>`);

// // c. Add two colors to beginning
// var color01 = prompt("c) Enter 1st color to add at the beginning:");
// var color02 = prompt("c) Enter 2nd color to add at the beginning:");
// colorsName.unshift(color02); 
// colorsName.unshift(color01); 
// document.writeln(`3rd Updated Array: <strong>${colorsName}</strong><br><br>`);

// // d. Delete first color
// colorsName.shift();
// document.writeln(`4th Updated Array (After deleting first color): <strong>${colorsName}</strong><br><br>`);

// // e. Delete last color
// colorsName.pop();
// document.writeln(`5th Updated Array (After deleting last color): <strong>${colorsName}</strong><br><br>`);

// // f. Add color at user-defined index
// var addColorIndex = +prompt("f) Enter index at which you want to add a color:");
// var indexColorAdd = prompt("Enter the color to add at that index:");
// colorsName.splice(addColorIndex, 0, indexColorAdd); 
// document.writeln(`6th Updated Array: <strong>${colorsName}</strong><br><br>`);

// // g. Delete color(s) from user-defined index
// var startdeleteIndex = +prompt("g) Enter starting index from where to delete color:");
// var removeColorCount = +prompt("How many colors do you want to delete?");
// colorsName.splice(startdeleteIndex, removeColorCount);
// document.writeln(`7th Updated Array (After deletion): <strong>${colorsName}</strong><br><br>`);


/* Question # 09: Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method. */
document.writeln(`<h2>Question No.09</h2>`);

var scores = [320, 230, 480, 120];
document.writeln(`Scores of Students: ${scores}<br>`);
document.writeln(`Scores of Students (After Sorting): ${scores.sort()}`);


/* Question # 10: Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array. */
document.writeln(`<h2>Question No.10</h2>`);

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.writeln(`Original Array: ${cities}<br>`);
document.writeln(`Copy Array: ${cities.slice(2,4)}`);


/* Question # 11: Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method) */
document.writeln(`<h2>Question No.11</h2>`);

var arr = ["This", "is", "my", "cat"];
document.writeln(`<strong>Array:</strong><br>${arr}<br><br>`);
document.writeln(`<strong>String:</strong><br>${arr.join(" ")}`);


/* Question # 12: Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out) */
document.writeln(`<h2>Question No.12</h2>`);

var devices = ["keyboard", "mouse", "printer", "monitor"];

document.writeln(`<h3>Devices</h3>
    <p>${devices}</p>
`);

document.writeln(`
    <strong>Out:</strong><br>
    ${devices[0]}<br>
    <strong>Out:</strong><br>
    ${devices[1]}<br>
    <strong>Out:</strong><br>
    ${devices[2]}<br>
    <strong>Out:</strong><br>
    ${devices[3]}<br>
`);


/* Question # 13: Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last InFirst Out) */
document.writeln(`<h2>Question No.13</h2>`);

var devices = ["keyboard", "mouse", "printer", "monitor"];

document.writeln(`<h3>Devices</h3>
    <p>${devices}</p>
`);

document.writeln(`
    <strong>Out:</strong><br>
    ${devices[3]}<br>
    <strong>Out:</strong><br>
    ${devices[2]}<br>
    <strong>Out:</strong><br>
    ${devices[1]}<br>
    <strong>Out:</strong><br>
    ${devices[0]}<br>
`);


/* Question # 14: Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown/select menu in your
browser using document.write() method: */
document.writeln(`<h2>Question No.14</h2>`);

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

document.writeln(`
    <select>
    <option value="${phoneManufacturers[0]}">${phoneManufacturers[0]}</option>
    <option value="${phoneManufacturers[1]}">${phoneManufacturers[1]}</option>
    <option value="${phoneManufacturers[2]}">${phoneManufacturers[2]}</option>
    <option value="${phoneManufacturers[3]}">${phoneManufacturers[3]}</option>
    <option value="${phoneManufacturers[4]}">${phoneManufacturers[4]}</option>
    <option value="${phoneManufacturers[5]}">${phoneManufacturers[5]}</option>
    </select>
`);
