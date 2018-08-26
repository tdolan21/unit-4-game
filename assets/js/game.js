// Global Variables

let guessesRemaining = 15;
let userChoice = [];
let newTotal = [];

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
 
  let userTotal = 0;
  console.log("number to guess" + randomNumber);
  $("#numwins").text(wins);
  $("#numloss").text(losses);


  //Register for user clicks on crystals

  $("#em").click(function() {
    userTotal += rand1;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    //sets win/lose conditions
    if (userTotal == randomNumber) {
        win()
      } else if (userTotal > randomNumber) {
        loss()
        reset()
      }
  });

$('#ruby').click(function(){
    userTotal += rand2;
    console.log("New userTotal= " + userTotal);
   

    $('#finalTotal').text(userTotal); 
    if (userTotal == randomNumber) {
        win()
        reset()
      } else if (userTotal > randomNumber) {
        loss()
        reset()
      }
  });  
$("#topaz").click(function() {
    
        userTotal += rand3;
        
        console.log("New userTotal= " + userTotal);
        $("#finalTotal").text(userTotal);
        
        if (userTotal == randomNumber) {
          win()
          reset()
        } else if (userTotal > randomNumber) {
          loss()
          reset()
        }
      });
      $("#yellow").click(function() {
    
        userTotal += rand4;
        
        console.log("New userTotal= " + userTotal);
        $("#finalTotal").text(userTotal);
        
        if (userTotal == randomNumber) {
          win()
          reset()
        } else if (userTotal > randomNumber) {
          loss();
          reset();
        }
      });

function loss() {
    
    alert("You lost");
    losses++;
    $("#numloss").text(losses);
};
function win() {
    
    alert("You won!");
    wins++;
    $("#numwins").text(wins);
};
function reset() {
    
    randomNumber = Math.floor(Math.random() * 101 + 19);
    $("#randomnum").text(randomNumber);
    userTotal=0;
    $("#finalTotal").text(userTotal);

     rand1 = Math.floor(Math.random() * 11 +1);
     rand2 = Math.floor(Math.random() * 11+1);
     rand3 = Math.floor(Math.random() * 11+1);
     rand4 = Math.floor(Math.random() * 11+1);
    
};

});