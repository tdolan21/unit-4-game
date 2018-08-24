// Global Variables

let wins = 0;
let losses = 0;
let ties = 0;
let guessesRemaining = 15;
let userChoice = [""];

//Generates random number for user to guess
var randomNumber = Math.floor(Math.random() * 120);
var randomNumCrys = Math.floor(Math.random() * 25);

console.log(randomNumber);

//displays random number to the screen for user
$("#randomnum").text(randomNumber);

//Register for user clicks on crystals
$("#em").click(function() {
    userChoice=randomNumCrys
    $(".crystalValue").html("<p> Your current guess:" + userChoice + "</p>");
    console.log(randomNumCrys);
      
});
//if/else conditions for wins