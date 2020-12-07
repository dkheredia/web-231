/*
============================================
; Title:  welchcronin-discussion 6.1.js
; Author: Professor Krasso
; Date:   25 November 2020
; Modified By: Daniel Heredia
; Additional ideas for code from https://www.w3schools.com/js/js_objects.asp
; Description: Creating a simple Javascript program using object properties with 2 errors
;===========================================
*/

const header = require('../welchcronin-header.js');

console.log(header.display("Georgia", "WelchCronin", "Discussion 6.1"));
console.log('\n'); //Here I am adding a line break between header and exercise output.

//start program

//creating an object with several name value pairs
// corrected syntax by removing square brackets and adding
// curly braces
let nuts = {
    type:"Almonds",
    protein:"21 grams",
    fat:"50 grams"
};

//output some of the data
//added spaces before "contain" and "of fat"
//so that the sentences match the expected output
console.log(nuts.type + " contain " + nuts.protein + " of protein and " + nuts.fat + " of fat.")

//expected output:
// Almonds contain 21 grams of protein and 50 grams of fat.

//end program
