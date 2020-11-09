/*
============================================
; Title:  heredia-discussion-3.2.js
; Author: Professor Krasso
; Date:   06 November 2020
; Modified By: Daniel Heredia
; Description: Create a program utilizing
; pattern matching functions
;===========================================
*/

/**
* Params: none
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('/Users/dhered1/Desktop/backup/repos/github/bu-webdev/web-231/week-2/heredia-header.js');
console.log(header.display("Daniel", "Heredia", "Assignment 3.2"));

// variables
let testVar1 = "Truck";
let testVar2 = "Car";
let testVar3 = "Bike";
let testVar4 = "Bike";
let testVar5 = "Four";
let testVar6 = "Three";

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


// Output from the match() function
console.log("\n");
console.log(match("A", "B"));
console.log(match(2,2));

//Conditional "if...else" statements.
if (match(testVar1, testVar2)){
  logMatch(testVar1, testVar2);
}
else{
  logMismatch(testVar1, testVar2);
}
if (match(testVar3, testVar4)){
  logMatch(testVar3, testVar4);
}
else{
  logMismatch(testVar3, testVar4);
}
if (match(testVar5, testVar6)){
  logMatch(testVar5, testVar6);
}
else{
  logMismatch(testVar5, testVar6);
}
