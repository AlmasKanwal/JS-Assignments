/* Question # 01: Declare and initialize an empty multidimensional array.
(Array of arrays) */
document.writeln(`<h2>Question No.01</h2>`);

document.writeln(`<h3>Multidimensional Array (Array of Arrays)</h3>`);

var multiArr = [[], [], [[], []]];
document.writeln(`Multidimensional Array: <strong>${multiArr}</strong> `);


/* Question # 02: Declare and initialize a multidimensional array
representing the following matrix: */
document.writeln(`<h2>Question No.02</h2>`);

document.writeln(`<h3>Multidimensional Array Representation</h3>`);
var multidimensionalArr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]

document.writeln(`
    ${multidimensionalArr[0].join(" ")}<br>
    ${multidimensionalArr[1].join(" ")}<br>
    ${multidimensionalArr[2].join(" ")}
`);


/* Question # 03: Write a program to print numeric counting from 1 to 10. */
document.writeln(`<h2>Question No.03</h2>`);

document.writeln(`<h3>Counting (1 to 10)</h3>`);

for(var i = 1; i <= 10; i++){
    document.writeln(`${i}<br>`);
}


/* Question # 04: Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user. */
document.writeln(`<h2>Question No.04</h2>`);

// var tableNumber = +prompt("Enter the number to generate table for: ");
// var startIndex = +prompt("Enter the starting value of the table: ");
// var endIndex = +prompt("Enter the ending value of the table: ");

// document.writeln(`<h3>Multiplication Table of ${tableNumber}</h3>`);
// for(var i = startIndex; i <= endIndex; i++){
//     document.writeln(`${tableNumber} x ${i} = ${tableNumber * i}<br>`);
// }


/* Question # 05: Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”] */
document.writeln(`<h2>Question No.05</h2>`);

document.writeln(`<h3>Printing Items</h3>`);

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i = 0; i < fruits.length; i++){
    document.writeln(`${fruits[i]}<br>`);
}

document.writeln(`<br>`);

for(var i = 0; i < fruits.length; i++){
    document.writeln(`Element at index ${i} is ${fruits[i]}<br>`);
}


/* Question # 06: Generate the following series in your browser. See
example output. */
document.writeln(`<h2>Question No.06</h2>`);

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.writeln(`<h3>Counting</h3>`);

for(var i=1; i <= 15; i++){
    document.writeln(`${i}, `);
}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.writeln(`<h3>Reverse Counting</h3>`);

for(var i=10; i >= 1; i--){
    document.writeln(`${i}, `);
}

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.writeln(`<h3>Even Numbers</h3>`);
for(var i=0; i <= 20; i+=2){
    document.writeln(`${i}, `);
}

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.writeln(`<h3>Odd Numbers</h3>`);
for(var i=1; i <= 19; i+=2){
    document.writeln(`${i}, `);
}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.writeln(`<h3>Series</h3>`);
for(var i=2; i <= 20; i+=2){
    document.writeln(`${i}k, `);
}


/* Question # 07: You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not. Example: */
document.writeln(`<h2>Question No.07</h2>`);

document.writeln(`<h3>ABC Bakery</h3>`);

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am? ").toLowerCase();
// var isFound = false; 

// for(var i=0; i < A.length; i++){
//     if(user === A[i]){
//         isFound = true;
//         document.writeln(`<strong>${user}</strong> is available at index ${i} in our bakery.`);
//         break;
//     }
// }

// if(isFound === false){
//     document.writeln(`We are sorry. <strong>${user}</strong> is not available in our bakery.`)
// }


/* Question # 08: Write a program to identify the largest number in the
given array.
 */
document.writeln(`<h2>Question No.08</h2>`);

document.writeln(`<h3>Largest Number</h3>`);

var A = [24, 53, 78, 91, 12];
var largest = A[0];

for(var i=1; i < A.length; i++){
    if(A[i] > largest){
        largest = A[i]
    }
}

document.writeln(`Array Items: ${A}<br>`);
document.writeln(`The largest Number is ${largest}`);


/* Question # 09: Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12] */
document.writeln(`<h2>Question No.09</h2>`);

document.writeln(`<h3>Smallest Number</h3>`);
var A = [24, 53, 78, 91, 12];
var smallest = A[0];

for(var i=1; i < A.length; i++){
    if(A[i] < smallest){
        smallest = A[i]
    }
}

document.writeln(`Array Items: ${A}<br>`);
document.writeln(`The smallest Number is ${smallest}`);


/* Question # 10: Write a program to print multiples of 5 ranging 1 to
100. */
document.writeln(`<h2>Question No.10</h2>`);

document.writeln(`<h3>Multiples of 5</h3>`);

for(var i=5; i <= 100; i+=5){
    document.writeln(`${i},`);
}
