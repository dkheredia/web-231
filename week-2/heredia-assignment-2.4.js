/*
============================================
; Title:  heredia-assignment-2.4.js
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

console.log(header.display("Daniel", "Heredia", "Assignment 2.4"));


// function property definition
fullName.firstName = "Daniel "
fullName.lastName = "Heredia"
dateWriter.year = 2020
dateWriter.month = Oct
dateWriter.day = 31

/**
* Params: none
* Response: Display my first and last name
* Description: returns the value assigned to a function property
*/

function fullName (firstName, lastName){
  return fullName.firstName;
  return fullName.lastName;
}

/**
* Params: none
* Response: Display date
* Description: returns the value assigned to a function property
*/

function dateWriter (year, month, day){
  return dateWriter.year;
  return dateWriter.month;
  return dateWriter.day;
}

/**
* Params: none
* Response: Display date
* Description: returns the value assigned to a function property
*/

function formatNumber (number, numOfFixedPositions){
  return formatNumber
}

//new line
console.log('\n');

//output
console.log(fullName.firstName + fullName.lastName);
console.log(dateWriter.year + dateWriter.month + dateWriter.day);
