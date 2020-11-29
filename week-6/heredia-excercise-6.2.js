/*
============================================
; Title:  heredia-discussion-6.2.js
; Author: Professor Krasso
; Date:   27 November 2020
; Modified By: Daniel Heredia
; Description: Create simple program using
; exception handling try, catch, and finally
;===========================================
*/

/**
* Params: none
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('/Users/dhered1/Desktop/backup/repos/github/bu-webdev/web-231/week-2/heredia-header.js');
console.log(header.display("Daniel", "Heredia", "Assignment 6.2"));
console.log("");


/*
    Expected output:

    Daniel Heredia
    Assignment 6.2
    Today's Date

    Catch clause: Too young to enter
  Finally clause reached...

*/

// start program

// Defining a block of code to be tested for errors
try {
  let yearBirth = 2009;
  let currentYear = 2020;
  let valid = currentYear - yearBirth;
// Check to see if age is over 21, if valid
// output age
if (valid < 21) throw "Too young to enter" ;
  console.log(valid);
// If the age is not valid, output the error
} catch (err) {
  console.log("Catch clause: " + err);
// Block of code that is run when try and catch
// are completed regardless of the results
} finally {
  console.log("Finally clause reached...");
}

// end program
