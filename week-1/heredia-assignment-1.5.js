/*
============================================
; Title: heredia-assignment-1.5.js
; Author: Daniel Heredia
; Date: 23 October 2020
; Modified By: Daniel Heredia
; Description: This program demonstrates the
; use of JavaScript primitive types
; to create 3 employee records.
;===========================================
*/

// start program

/*
    Expected output:

    First Name: Dan
    Last Name: Heredia
    Address: 123 Baker Street
    Pay Rate: 10.9
    Hire Date: 10/24/2020

    First Name: John
    Last Name: Smith
    Address: 1122 Forest Street
    Pay Rate: 7.3
    Hire Date: 10/24/2020

    First Name: Jane
    Last Name: Doe
    Address: 1428 Elm Street
    Pay Rate: 9.3
    Hire Date: 10/24/2020

*/

// variable declaration and assignment
var firstName = "Dan";
var lastName = "Heredia";
var address = "123 Baker Street";
var payRate = 10.88;
var hireDate = new Date().toLocaleDateString('en-US');

// output
console.log('First Name: ' + firstName);
console.log('Last Name: ' + lastName);
console.log('Address: ' + address);
console.log('Pay Rate: ' + payRate.toFixed(1));
console.log('Hire Date: ' + hireDate);
console.log("");

// variable declaration and assignment
var firstName = "John";
var lastName = "Smith";
var address = "1122 Forest Street";
var payRate = 7.25;
var hireDate = new Date().toLocaleDateString('en-US');

// output
console.log('First Name: ' + firstName);
console.log('Last Name: ' + lastName);
console.log('Address: ' + address);
console.log('Pay Rate: ' + payRate.toFixed(1));
console.log('Hire Date: ' + hireDate);
console.log("");

// variable declaration and assignment
var firstName = "Jane";
var lastName = "Doe";
var address = "1428 Elm Street";
var payRate = 9.32;
var hireDate = new Date().toLocaleDateString('en-US');

// output
console.log('First Name: ' + firstName);
console.log('Last Name: ' + lastName);
console.log('Address: ' + address);
console.log('Pay Rate: ' + payRate.toFixed(1));
console.log('Hire Date: ' + hireDate);
console.log("");


// end program
