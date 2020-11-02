/*
============================================
; Title:  header.js
; Author: Professor Krasso
; Date:   30 October 2020
; Modified By: Daniel Heredia
; Description: Displays a formatted header
;===========================================
*/

/**
* Params: none
* Response: output
* Description: Returns a well-formatted string header
*/

const header = require('/Users/dhered1/Desktop/backup/repos/github/bu-webdev/web-231/week-2/heredia-header.js');

console.log(header.display("Daniel", "Heredia", "Assignment 2.3 Function Properties"));


// function property definition
myName.daniel = "Daniel"


/**
* Params: none
* Response: Display my first name
* Description: Returns the value assigned to myName.daniel
*/

function myName () {
  return myName.daniel;
}


//new line
console.log('\n');

//output
console.log(myName());


