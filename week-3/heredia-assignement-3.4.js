/*
============================================
; Title:  heredia-discussion-3.4.js
; Author: Professor Krasso
; Date:   07 November 2020
; Modified By: Daniel Heredia
; Description: Create a program utilizing
; looping algorithm
;===========================================
*/

/**
* Params: none
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('/Users/dhered1/Desktop/backup/repos/github/bu-webdev/web-231/week-2/heredia-header.js');
console.log(header.display("Daniel", "Heredia", "Assignment 3.4"));

//Variable declaration
let x = 6;

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

//functions
function match(arg1, arg2){
  if (arg1 == arg2)
    return true
  else
    return false
}

function logMismatch (arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do not match!");
}

function logMatch (arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do match!");
}

//output from the loop statements
console.log("\n");
console.log("-- DO THE NUMBERS MATCH GAME --");

//for...loop with ten (10) iterations
for(let i = randomNumber(); i < 10 ; i++){

if (match(x, i)){
  logMatch(x, i);
}
else{
  logMismatch(x, i);
}
}
