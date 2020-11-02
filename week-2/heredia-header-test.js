/*
============================================
; Title:  heredia-header-test.js
; Author: Professor Krasso
; Date:   30 October 2020
; Modified By: Daniel Heredia
; Description: Displays a formatted header
;===========================================
*/

// start program

/*
    Expected output:

    Daniel Heredia
    Assignment 2.2 Header
    Date: 11/1/2020

*/



//import statement of header file
const header = require('./heredia-header.js');

// output
console.log(header.display("Daniel", "Heredia", "Assignment 2.2 - Header"));

//end program
