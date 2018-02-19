// Letter constructor
var Letter = function(letter) {
  this.letter = letter;
  this.guessed = false;
};

//Array.prototype constructor adds new properties and methods to the array
Letter.prototype.display = function() {
  //If letter is guessed is true, will display
  if (this.guessed) {
    return " " + this.letter.toLowerCase() + " ";
  } else {
    //if not will display underscore
    return "_";
  }
};

module.exports = Letter;
