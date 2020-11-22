/*======================
; Title: Discussion 5.1
; Author: George Henderson
; Date: 19 November 2020
; Updated: Daniel Heredia
; Description: Create a map obj with key/vals, remove one employee
; then output the remaining employee's holiday wages.
;======================*/

// Start Program

/*
  Expected Output:

  Moe was fired!

  -- HOLIDAY WAGES --
  Jerry's holiday wage/hr is: $68.18
  Kristi's holiday wage/hr is: $49.50
  Terry's holiday wage/hr is: $40.13
  Larry's holiday wage/hr is: $60.75
*/



// Variables
let employeeWages = new Map();
  // Setting key/val's for 'employeeWages'
employeeWages.set('Jerry', 45.45);
employeeWages.set('Kristi', 33.00);
employeeWages.set('Terry', 26.75);
employeeWages.set('Larry', 40.50);
employeeWages.set('Moe', 100.00);

// Output
  // Delete Moe from the employeeWages map, if successful log confirmation
  // Corrected the map set from employeeWages.remove to .delete as this
  // removes the value by the key
if (employeeWages.delete('Moe')) {
  console.log('Moe was fired!');
  console.log('');
}

  // Loops over employeeWages and logs each person's holiday wage.

console.log('-- HOLIDAY WAGES --');
for (let [name, wage] of employeeWages) {
  console.log(name + "'s holiday wage/hr is: $" + (wage*1.5).toFixed(2));
}

// End Program
