/*
============================================
; Title:  heredia-assignment-4.3.js
; Author: Professor Krasso
; Date:   14 November 2020
; Modified By: Daniel Heredia
; Description: Create simple program using using
; conditionals to determine the equality of an
; array value
;===========================================
*/

/**
* Params: none
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('/Users/dhered1/Desktop/backup/repos/github/bu-webdev/web-231/week-2/heredia-header.js');
console.log(header.display("Daniel", "Heredia", "Assignment 4.3"));
console.log("");

/*
    Expected output:
    Daniel Heredia
    Assignment 4.3
    Date: 11/15/2020

    --DISPLAYING ARRAY ITEMS--
    Car
    Truck
    Motorcycle
    Airplane
    Bus

    -- SELECTED VALUE --
    Motorcycle
*/

// start program

//Array literal with five (5) vehicle elements
let vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

//A function called getValue with two parameters: array and value
function getValue(arr, val) {
//A for loop to iterate over the parameterized array
  for (let x = 0; x < arr.length; x++) {
//An if statement to test if string value matches the current value in the loop
    if (arr[x] == val)
//output
          console.log(arr[x]);

  }
}

//Outputs the message below
console.log("--DISPLAYING ARRAY ITEMS--");
//A for loop to access each element of the array
for (var y = 0; y < vehicles.length; y++) {
//Output the items in the array
  console.log(vehicles[y]);
}

//Creates a new line
console.log("");
//Outputs the message below
console.log("-- SELECTED VALUE --");
//call the function for the element and display
getValue(vehicles, "Motorcycle");
// end program
