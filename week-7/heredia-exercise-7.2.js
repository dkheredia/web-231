/*
============================================
; Title:  heredia-discussion-7.2.js
; Author: Professor Krasso
; Date:   06 December 2020
; Modified By: Daniel Heredia
; Description: Create simple program using the
; constructor object
;===========================================
*/

/**
* Params: none
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('../heredia-header.js');
console.log(header.display("Daniel", "Heredia", "Assignment 7.2"));
console.log("");


/*
    Expected output:

    Daniel Heredia
    Assignment 7.2
    Today's Date

    1 Thomas Edison Software Engineer
    2 Benjamin Franklin Programmer
    3 Nikola Tesla Project Manager
    4 Charles Babbage Product Manager
    5 Alexander Bell Business Analyst

*/

// start program

// Employee constructor object with four (4) parameters
function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;

}

// An arry with five (5) employee objects
let employee = [
  new Employee('', 'Thomas', 'Edison','Software Engineer'),
  new Employee('', "Benjamin", "Franklin","Programmer"),
  new Employee('', "Nikola", "Tesla","Project Manager"),
  new Employee('', "Charles", "Babbage","Product Manager"),
  new Employee('', "Alexander", "Bell","Business Analyst"),
];

//Output
console.log
//Creating for loop to iterate through the variables.
let index = 1
for (let x = 0; x < employee.length; x++) {
console.log(index + '. ' + employee[x].firstName +" " + employee[x].lastName +" "  + employee[x].title)
index++
}
//end program
