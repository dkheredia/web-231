/*
James,
I found a few errors with your code.
Your first output to console has a typo of “Firstname”.
JavaScript is case sensitive and as such will not recognize the lower case “n”
the same as your declared variable “FirstName”.
Secondly, console.log is a function and uses parentheses
around what will be displayed to screen.  In addition, in the syntax
there is no equal size between the .log and parentheses.
Adding the missing () around “TodaysDate” and remove the = will present the expected output.
*/

/*
Title: Discussion 1.1
Author: James Pinson
Date: 10/22/2020
Modified By: Daniel Heredia
Description: A Javascript program with two errors
*/

//start program
//Below is a javascript program that contains two errors.
/*
Expected Output
JamesPinson
Sat Oct 24 2020 16:50:56 GMT-0400 (Eastern Daylight Time)
*/


var FirstName= "James";
var LastName= "Pinson";
var TodaysDate= new Date();


console.log(FirstName + LastName)
console.log(TodaysDate)
