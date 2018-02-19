// Constructors
var Letter = require("./letters.js");
var Word = require("./word.js");
var figlet = require("figlet");

// NPM Packages
var inquirer = require("inquirer");
var isLetter = require("is-letter");


figlet("Chemistry", function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// Set game defaults
var defaults = {
  words: [
    "atom",
    "nucleus",
    "molecule",
    "proton",
    "electron",
    "catalyst",
    "cathode",
    "covalent",
    "ionic",
    "delocalization",
    "denature",
    "endothermic"
  ],
  score: 0,
  lives: 10
};

// Initialize variables
var wordBank = [];
var userGuesses = [];
var score = 0;
var lives = 0;
var currentWord = {};
// var gameRun = true;

// Function to return a random integer between and including
// min and max arguments
// This function will randomize a min and max number to use to randomize the word
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to randomly choose a new word from wordBank
function chooseWord() {
  // Create random number from 0 to wordBank index max
  var random = randomInt(0, wordBank.length - 1);
  // Create currentWord object with random word from wordBank using the constructor from words.js
  currentWord = new Word(wordBank[random]);

  // Create letter objects and add them to letters in word object
  currentWord.generateLetters();
  // Removes the currentWord from wordBank so that it cannot be
  // selected again in the same game
  wordBank.splice(random, 1);
}

// Function to reinitialize variables.
function resetVars() {
  wordBank = defaults.words;
  score = defaults.score;
  lives = defaults.lives;
  userGuesses = [];
}

function startGame() {
  //In this function, I will callback each function that pertains to the game,
  //Callback function will initialize the game
}

function endGame() {
  //function to display win status and ask if user would like to play a game
  //Use switch case
  // when the user live goes to 0; will print message
  // when the user wins, will print message
  // when the word bank = 0, will print message
}

function restart() {
  //Use prompt or inquirer to ask user to play again after entire game has ended
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "again",
        message: "Let's play again?"
      }
    ])
    .then(function(res) {
      switch (response.again) {
      //
      }
    });
}

function printGuess() {
  //a function that shows user's guess and print them onto console.log
}

function checkGuess() {
  //a function to check if the user guesses are correct by using a
  //for loop to see whether or not that letter is guessed
  //Use an if/else statement to clairfy the guessed letter is correct
  //if so, imprint onto command-line
  //if not, return the guess and lose a life
}

function promptingLetter() {
  //a function to ask user to guess a letter
  //use validation to verify the letter is true if guessed
  //if the letter guess is  corrected in the word.bank, the letter will return
  //true and else, false
  //when the letter is correct, push the result from guess letter
  //if the correct letter is found within th word, score counter ++, else --
  //
}

// Begin the game, by evoking it from the beginning
startGame();

console.log("hi")

