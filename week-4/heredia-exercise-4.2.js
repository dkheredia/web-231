/*
============================================
; Title:  heredia-assignment-4.2.js
; Author: Professor Krasso
; Date:   14 November 2020
; Modified By: Daniel Heredia
; Description: Create simple program using an
; array with five (5) fruit elements
;===========================================
*/

/**
* Params: none
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('/Users/dhered1/Desktop/backup/repos/github/bu-webdev/web-231/week-2/heredia-header.js');
console.log(header.display("Daniel", "Heredia", "Assignment 4.2"));
console.log("");

/*
    Expected output:
    Daniel Heredia
    Assignment 4.2
    Date: 11/14/2020

    Apple
    Orange
    Banana
    Mango
    Pear

*/

// start program

//Array literal with five (5) fruit elements
let fruit = ["Apple", "Orange", "Banana", "Mango", "Pear"];

//A function called getFruit with one (1) parameter
function getFruit(arr) {
//A for loop to access each element of the array
  for (let k = 0; k < arr.length; k++){
//output of each element of the array
      console.log(arr[k]);
  }
}

//Output from the getFruit() function
getFruit(fruit);


// end program
