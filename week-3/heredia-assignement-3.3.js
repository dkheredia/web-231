/*
============================================
; Title:  heredia-discussion-3.3.js
; Author: Professor Krasso
; Date:   07 November 2020
; Modified By: Daniel Heredia
; Description: Create a program utilizing
; switch block to replace if...else statements
;===========================================
*/

/**
* Params: none
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('/Users/dhered1/Desktop/backup/repos/github/bu-webdev/web-231/week-2/heredia-header.js');
console.log(header.display("Daniel", "Heredia", "Assignment 3.3"));

//variables
let eventKeyCode = 13

//output
console.log("\n");

//Switch block for multiway branch of statements
switch(eventKeyCode){
  case 13:
    console.log("The enter key was pressed.")
    break;
  case 16:
    console.log("The shift key was pressed.")
    break;
  case 32:
    console.log("The spacebar key was pressed.")
    break;
  case 8:
    console.log("The backspace / delete key was pressed.")
    break;
  default:
    console.log("Unrecognized key.")
    break;

}



