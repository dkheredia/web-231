/*
============================================
; Title: Discussion 3.1.js
; Author: James Pinson
; Date: November 5th 2020
; Modified by: Daniel Heredia
; Description: This is a switch statement that has two errors and therefore won’t work.
;============================================
*/

/*
Expected Outcome
Today is (Current Day!)
*/  //Corrected comment syntax
//The switch function should return the current day based off whatever day it is.
switch (new Date().getDay()) { //Corrected syntax to .getDay()
    case 0:
        console.log ("Today is Sunday!");
        break;
    case 1:
        console.log("Today is Monday!");
        break;
    case 2:
        console.log("Today is Tuesday!");
        break;
    case 3:
        console.log("Today is Wednesday!");
        break;
    case 4:
        console.log("Today is Thursday!");
        break;
    case 5:
        console.log("Today is Friday"); //added missing parentheses
        break;
    case 6:
        console.log("Today is Saturday!");
        break;
    default:
        console.log("A new day has been added!");
}

//End Program
