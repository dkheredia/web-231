/*
============================================
; Title:  heredia-discussion-6.4.js
; Author: Professor Krasso
; Date:   29 November 2020
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
console.log(header.display("Daniel", "Heredia", "Assignment 6.4"));
console.log("");


/*
    Expected output:

    Daniel Heredia
    Assignment 6.4
    Today's Date

    Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

// start program

//Created an object literal ticket with a nested object literal person
let ticket = {
  id: "100",
  name: "Daniel Heredia",
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: "high",

  person:{
    id: "105",
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer I"
  }
};

//Output results from the nested object literal person
console.log("Ticket "+ ticket.person.id +" was created on "+ ticket.dateCreated +" and assigned to employee "+ ticket.person.firstName +(" ")+ ticket.person.lastName +" ("+ ticket.person.jobTitle +").");
