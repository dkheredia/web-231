/*
============================================
; Title:  Discussion Board 5.1 - Keyed -
; Collections
; Author: Kevin Jones
; Date: 16 November 2020
; Updated: Daniel Heredia
; Description: Keyed Collection program
; with at least two errors
;===========================================
*/

// declare new Map() variable
// corrected syntax of your map declaration by removing
// the square brackets and adding parentheses
let javascriptTypes = new Map();

// add keys and values to javascriptTypes
javascriptTypes
  .set(46, "number")
  .set(true, "boolean")
  .set("cheeseburger", "string")
  .set({}, "object")
  .set(function () {}, "function");

// iterate through javascriptTypes & return keys and values in console
// corrected the syntax of your conditional statement when referencing the
// key value pair by using square brackets instead of parentheses
for (let [key, value] of javascriptTypes) {
  if (value === "object") {
    console.log(
      "In the JavaScript programming language " + key + " is an " + value + "."
    );
  } else {
    console.log(
      "In the JavaScript programming language " + key + " is a " + value + "."
    );
  }
}

/* Expected Output
In the JavaScript programming language 46 is a number.
In the JavaScript programming language true is a boolean.
In the JavaScript programming language cheeseburger is a string.
In the JavaScript programming language [object Object] is an object.
In the JavaScript programming language function() {} is a function. */
