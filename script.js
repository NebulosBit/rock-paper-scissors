const rPSOption = ["Rock", "Paper", "Scissor"];
const rpsButtons = document.querySelectorAll(".rps-button");

function getPlayerChoice() {
  for (let i = 0; i < rpsButtons.length; i++) {
    rpsButtons[i].addEventListener("click", 
    function() {
      const playerChoice = this.getAttribute("value");
      displayScore(playerChoice)
    });
  }
}

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  let computerChoice = rPSOption[randomNum];
  return computerChoice;
}

function getScore(playerChoice, computerChoice) {
  let playerScore = 0;
  let computerScore = 0;
  
  // assigns a score of 0 to handle tie scenarios in the game
  if (playerChoice == computerChoice){
    playerScore;
    computerScore;
  } 
  // assigns a score of 0 to handle losing scenarios in the game
  else if (
    (playerChoice === rPSOption[0] && computerChoice === rPSOption[2]) ||
    (playerChoice === rPSOption[1] && computerChoice === rPSOption[0]) ||
    (playerChoice === rPSOption[2] && computerChoice === rPSOption[1])
  ){
    playerScore =+ 1;
  }
  // assigns a score of 0 to handle losing scenarios in the game
  else {
    computerScore =+ 1;
  }
  
  return [playerScore, computerScore];
}

function displayScore(playerChoice){
  let computerChoice = getComputerChoice();
  console.log(`Player Choice: ${playerChoice}`);
  console.log(`computer Choice: ${computerChoice}`);
  console.log(`${getScore(playerChoice, computerChoice)}`);
}


getPlayerChoice()