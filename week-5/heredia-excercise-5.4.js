/*
============================================
; Title:  heredia-discussion-5.4.js
; Author: Professor Krasso
; Date:   22 November 2020
; Modified By: Daniel Heredia
; Description: Create simple program using the
; ES5 built-in map() function to filter and
; reduce the data structure
;===========================================
*/

/**
* Params: none
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('/Users/dhered1/Desktop/backup/repos/github/bu-webdev/web-231/week-2/heredia-header.js');
console.log(header.display("Daniel", "Heredia", "Assignment 5.4"));
console.log("");

/*
  Expected output:
  FirstName LastName
  Exercise 5.4
  Today's Date

  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven
  Rating: 10
  Composer: Mozart
  Rating: 9
  Composer: Bach
  Rating: 6
  Composer: Haydn
  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven
  Genre: Classical
  Composer: Mozart
  Genre: Classical
  Composer: Bach
  Genre: Classical
  Composer: Haydn
  Genre: Classical
  Composer: Schubert

*/

//start program

// Defining an array object of five (5) composers with
// the fields firstName, lastName, genre, and rating
// (between 1 and 10)
let composers = [
  {
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 8
  },
  {
    firstName: "Wolfgang Anadeus",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10
  },
  {
    firstName: "Johann Sebastian",
    lastName: "Bach",
    genre: "Classical",
    rating: 9
  },
  {
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "Classical",
    rating: 6
  },
  {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: 5
  }
];

// Creating a map to filter out the array of objects
// to composers by rating
let ratings = composers.map(function(cr) {
  return cr
});

// Creating a map to filter out the array of objects
// to composers by genre
let genres = composers.map(function(cg) {
  return cg
});

// Outputs the following line
console.log("-- COMPOSER BY RATING --");

// Output the results of the iteration of the objects in the composers array
// based on the map
ratings.forEach(function(cg) {
  console.log("Rating: " + cg.rating + "\n" + "Composer: " + cg.lastName)
});


// Outputs a space between the two headers
console.log("")
// Outputs the following line
console.log("-- COMPOSER BY GENRE --");

// Output the results of the iteration of the objects in the composers array
// based on the map
ratings.forEach(function(cg) {
  console.log("Genre: " + cg.genre + "\n" + "Composer: " + cg.lastName)
});

  //end program





