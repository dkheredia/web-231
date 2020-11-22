/*
============================================
; Title:  heredia-discussion-5.2.js
; Author: Professor Krasso
; Date:   22 November 2020
; Modified By: Daniel Heredia
; Description: Create simple program using the
; ES5 built-in function forEach()
;===========================================
*/

/**
* Params: none
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('/Users/dhered1/Desktop/backup/repos/github/bu-webdev/web-231/week-2/heredia-header.js');
console.log(header.display("Daniel", "Heredia", "Assignment 5.2"));
console.log("");


/*
  Expected output:
  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi
*/

// start program

// Defining a string array with five (5) favorite food types
let foods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];
// Using the forEach() function to iterate through the food
// array
foods.forEach(function(food) {
//Output of the results from the function iteration
  console.log(food);
});

// end program
