/*
============================================
; Title:  heredia-discussion-6.1.js
; Author: Professor Krasso
; Date:   26 November 2020
; Modified By: Daniel Heredia
; Description: Create simple program using a
; object properties with at least (2) errors
;===========================================
*/

/**
* Params: none
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('/Users/dhered1/Desktop/backup/repos/github/bu-webdev/web-231/week-2/heredia-header.js');
console.log(header.display("Daniel", "Heredia", "Assignment 6.1"));
console.log("");


/*
    Expected output:

    Daniel Heredia
    Assignment 6.1
    Today's Date

    The iPhone 12 mini has the following features

    64GB of Storage
    5.4in Display
    A14 Chip Set
    Dual 12MPCamera

    For the low Price of $699
*/

// start program

// Defining an object "phone" with 6 name value pairs
 let phone = {
   type: "iPhone 12 mini",
   storage: "64GB",
   display: "5.4in";
   chip: "A14",
   camera: "Dual 12MP",
   price: "$699"
 };
// Output the sentences using the objects values
 console.log("The "+ phone.type +" has the following features");
 console.log("")
 console.log(phone.storage +" of Storage");
 console.log(phone.display +" Display");
 console.log(phone.Chip +" Chip Set ");
 console.log(phone.camera +"Camera ");
 console.log("")
 console.log("For the low Price of "+ phone.price);

//end program