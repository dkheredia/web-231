/*
============================================
; Title:  heredia-discussion-4.1.js
; Author: Professor Krasso
; Date:   12 November 2020
; Modified By: Daniel Heredia
; Description: Create simple program using an
; array with at least two (2) errors
;===========================================
*/

/**
* Params: none
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('/Users/dhered1/Desktop/backup/repos/github/bu-webdev/web-231/week-2/heredia-header.js');
console.log(header.display("Daniel", "Heredia", "Assignment 4.1"));
console.log("");

/*
    Expected output:

    Daniel Heredia
    Assignment 4.1
    Date: 11/12/2020

    (3) ['Adidas', 'Nike', 'Under Armour']
*/

// start program

//Array literal with two (2) elements
let shoeBrands = ["Nike" "Adidas"];

//Adding an element of Under Armour to the array
shoeBrands.push "Under Armour";

//Sorting the elements in the array in alphabetical order
shoeBrands.sort;

// output
console.log(shoeBrands);

// end program
