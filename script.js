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

function playRound(playerChoice, computerChoice) {
  
  // assigns a score of 0 to handle tie scenarios in the game
  if (playerChoice == computerChoice){
    return `It's a tie! Player: ${playerChoice} - Computer: ${computerChoice}`;
  } 
  // assigns a score of 0 to handle losing scenarios in the game
  else if (
    (playerChoice === rPSOption[0] && computerChoice === rPSOption[2]) ||
    (playerChoice === rPSOption[1] && computerChoice === rPSOption[0]) ||
    (playerChoice === rPSOption[2] && computerChoice === rPSOption[1])
  ){
    return `You win! Player: ${playerChoice} - Computer: ${computerChoice}`
  }
  // assigns a score of 0 to handle losing scenarios in the game
  else {
    return `You lost. Player: ${playerChoice} - Computer: ${computerChoice}`;
  }
}

function displayScore(playerChoice){
  let computerChoice = getComputerChoice();
  console.log(`Player Choice: ${playerChoice}`);
  console.log(`computer Choice: ${computerChoice}`);
  console.log(`${playRound(playerChoice, computerChoice)}`);
}

getPlayerChoice()