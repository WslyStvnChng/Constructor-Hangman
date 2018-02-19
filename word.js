//My thinking is to make functions for everything; that way I can evoke each function,
//And call it back and use each one whenever I like

//Require Letter, to be used in constructor
var Letter = require("./letters.js");

//Word constructor given word a parameter
var Word = function(word) {
  this.word = word;
  this.letter = [];
  this.guessCorrect = 0;
  this.totalLetters = this.word.length;
};

//Print word function
Word.prototype.printWord = function() {
  var that = this;
  //split method will split a string obj to array of strings
  var word = this.word.split("");
  var output = "";
  //execute a provided function once for each an array element
  word.forEach(function(letter, index) {
    //show the letters in the index and display space
    (output += that.letters[index]), display();
  });
  console.log(output + "\n");
};

//Pseudode the rest

//Create a function to verify a match found within the word
//Use if/else statement to verify if the correct guess is true,
//Correct guess will remain unchange as the counter
//If the correct guess is correct, evoke it

//Create a function to check if all letters have been guessed
//*Since prototypes is inheriting info from constructor, use prototype again
//If correct guess is within the word.length return true, if not return false

//Create a letter object function and push letters into it
//Create an object for each letter and add it to the currentWord.letters array
//Constructor property to define each letter and push into the letter array

module.exports = Word;
