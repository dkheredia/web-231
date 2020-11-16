/*
============================================
; Title:  heredia-assignment-4.4.js
; Author: Professor Krasso
; Date:   15 November 2020
; Modified By: Daniel Heredia
; Description: Create simple program using using
; filterable functions to manage the selection
; of array elements
;===========================================
*/

/**
* Params: none
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('/Users/dhered1/Desktop/backup/repos/github/bu-webdev/web-231/week-2/heredia-header.js');
console.log(header.display("Daniel", "Heredia", "Assignment 4.4"));
console.log("");


/*
    Expected output:
    Daniel Heredia
    Assignment 4.4
    Date: 11/15/2020

    -- ORIGINAL ARRAY --
    Alabama
    Nebraska
    Iowa
    California
    Nevada

  -- SORTED ARRAY --
    Alabama
    California
    Iowa
    Nebraska
    Nevada

  -- SELECTED VALUE --
    Iowa
*/


//Start Program

//Array literal with five (5) state elements
let states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

//Function called getStates with two parameters: array and city
function getStates(array, city){
//A for loop to iterate over the parameterized array
  for (let x = 0; x < array.length; x++) {
//An if statement to test if string value matches the current value in the loop
    if (city === array[x]) {
      console.log(array[x])
    };

  }
}

//Outputs the message below
console.log("-- ORIGINAL ARRAY --");
//A for loop to access each element of the states array
for (let y = 0; y < states.length; y++) {
//Outputs the items in the states array
  console.log(states[y])
}

//Creates a new line
console.log("");
//Outputs the message below
console.log("-- SORTED ARRAY --");

//A for loop to iterate over the states array
for (let y = 0; y < states.length; y++) {
//Outputs the elements in the states array alphabetically
  console.log(states.sort()[y]);
}

//Creates a new line
console.log("");
//Outputs the message below
console.log("-- SELECTED VALUE --");

//call the function for the element and display
getStates(states, "Iowa")

//end program
