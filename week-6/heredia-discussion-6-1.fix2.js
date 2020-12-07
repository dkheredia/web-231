/*
; Title: Assignment 6.1
; Author: James Liverman
; Date: 26 November 2020
; Modified By: Daniel Heredia
; Description: Object Properties with at least 2 errors
*/
// header goes here
const header = require("../liverman-header.js");
console.log(header.display("James", "Liverman", "Discussion 6.1"));

/*
Instructions

Expected Output An address of Street, City, State and Zip Code on separate lines
 */

// Create an object called address
var address = {
    street : "123 Nightmare on Elm Street",
    city : "San Diego",
    state : "California",
    zipCode: 91010,
    };

  // Display output
  // added missing + concatenation operator in order to
  // join two strings together
  // removed the extra character 0 at the end of the
  // first line after the semicolon
  console.log("-- My Address is  --" +"\n");
  console.log("Street: " + address.street + "\n");
  console.log("City: " + address.city +"\n");
  console.log("State: " + address.state + "\n");
  // Corrected syntax by adding object identifer address
  console.log("ZipCode: " + address.zipCode + "\n");

  // end program
