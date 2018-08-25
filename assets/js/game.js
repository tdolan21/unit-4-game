// Global Variables

let guessesRemaining = 15;
let userChoice = [];
let newTotal = [];
let rubyTotal = [];
let topazTotal = [];
let finalTotal = [];

$(document).ready(function() {
  //Generates random number for user to guess
  let randomNumber = Math.floor(Math.random() * 101 + 19);

  //displays random number to the screen for user
  $("#randomnum").text(randomNumber);

  let rand1 = Math.floor(Math.random() * 11 +1);
  let rand2 = Math.floor(Math.random() * 11+1);
  let rand3 = Math.floor(Math.random() * 11+1);
  let rand4 = Math.floor(Math.random() * 11+1);

  let wins = 0;
  let losses = 0;
  let ties = 0;
  let userTotal = [];
  console.log("number to guess" + randomNumber);

  //Register for user clicks on crystals

  $("#em").click(function() {
    userTotal = (userChoice + rand1);
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userChoice);
    //sets win/lose conditions
    if (userTotal == randomNumber) {
        win()
      } else if (userTotal > randomNumber) {
        loss()
      }
  });

$('#ruby').click(function(){
    userTotal = (userChoice + rand2);
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userChoice); 
    if (userTotal == randomNumber) {
        win()
      } else if (userTotal > randomNumber) {
        loss()
      }
  });  
$("#topaz").click(function() {
    
        userTotal = (userChoice + rand3);
        console.log("New userTotal= " + userTotal);
        $("#finalTotal").text(userTotal);
        
        if (userTotal == randomNumber) {
          win()
        } else if (userTotal > randomNumber) {
          loss()
        }
      });
      $("#yellow").click(function() {
    
        userTotal = (userChoice + rand4);
        console.log("New userTotal= " + userTotal);
        $("#finalTotal").text(userChoice);
        
        if (userTotal == randomNumber) {
          win()
        } else if (userTotal > randomNumber) {
          loss()
        }
      });

function loss() {
    if (userTotal > randomNumber)
    alert("You lost");
    losses++
}
function win() {
    if (userTotal===randomNumber)
    alert("You won!");
    wins++;
};
});