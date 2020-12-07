/*
============================================
; Title:  heredia-discussion-6.3.js
; Author: Professor Krasso
; Date:   28 November 2020
; Modified By: Daniel Heredia
; Description: Create simple program using
; object literal
;===========================================
*/

/**
* Params: none
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('/Users/dhered1/Desktop/backup/repos/github/bu-webdev/web-231/week-2/heredia-header.js');
console.log(header.display("Daniel", "Heredia", "Assignment 6.3"));
console.log("");


/*
    Expected output:

    Daniel Heredia
    Assignment 6.3
    Today's Date

    {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

// start program

// Created an Object literal with three (3) name:value pairs
let ticket = {
  id: "101",
  name: "Help Desk Support",
  requestor: "Bob Jones"
};
// Output results for the fields id, name, and requestor using dot notation
console.log("{id: "+ ticket.id +", name: "+ ticket.name +", requestor: "+ ticket.requestor +"}");

//end program
