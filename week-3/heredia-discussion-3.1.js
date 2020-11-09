/*
============================================
; Title:  heredia-discussion-3.1.js
; Author: Professor Krasso
; Date:   05 November 2020
; Modified By: Daniel Heredia
; Description: Create simple program using if
; else with at least two errors
;===========================================
*/

/**
* Params: none
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('/Users/dhered1/Desktop/backup/repos/github/bu-webdev/web-231/week-2/heredia-header.js');
console.log(header.display("Daniel", "Heredia", "Assignment 3.1"));


// variable declaration and assignment
let x = new Date()

// If the hours are between 6am and 3pm display: Learning to code is fun
if (x.getHours() >= 6 && x.getHours() < 15)

//output
  console.log("Learning to code is fun!");

// If the hours are after 9am display: Hope you had a great day learning to code
else

//output
  console.log("Hope you had a great day learning to code");


