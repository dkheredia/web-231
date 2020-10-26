/*
George,

I found a few errors with your code.  Javascript uses semicolons to separate the end of statements.  
Therefore, each of your declared variables require a semicolon.  In addition, adding a space after 
each string of text provides your desired output.  In your console.log output the double quotes inside 
the function is not recognized when combining variable outputs.  There is also the additional plus signs 
added which is incorrect syntax.

*/

/* 
;========================================================
; Title: Discussion 1.1
; Author: George Henderson
; Date: 25 October 2020
; Modified By: Daniel Heredia
; Description: Simple JavaScript code meant to have two errors within it for revision.
;========================================================
*/

// start program

/*
    Expected output:

    Tony Anthony Henderson
    
*/


//semicolon added after each declared variable.
//added a blank space after each string
let firstName = "Tony ";
let middleName = "Anthony ";
let lastName = "Henderson ";

//removed the extra plus signs which are not needed
//removed double quotes
console.log(firstName + middleName + lastName);

// end program
