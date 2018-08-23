// Global Variables

let wins = 0;
let losses = 0;
let ties = 0;
let guessesRemaining = 15;
let userChoice = [""];

//Generates random number for user to guess
let minNumber = 0;
let maxNumber = 84;

let randomNumber = randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(randomNumber);
//displays random number to the screen for user
$("#randomnum").text(randomNumber)


//Register for user clicks on crystals
$("#em").click(function() {
    
    
});

