const rockPaperScissor = ["Rock", "Paper", "Scissor"];

function getPlayerChoice(){
  let playerChoice = prompt("Pick a choice: Rock, Paper, or Scissor");
  playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
  if (rockPaperScissor.includes(playerChoice)){
    return playerChoice;
  }
  else{
    return getPlayerChoice();
  }
}

function getComputerChoice(){
  const computerChoice = rockPaperScissor[(Math.floor(Math.random() * (rockPaperScissor.length)))];
  return computerChoice;
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();
console.log(`Player: ${playerChoice}`);
console.log(`Computer: ${computerChoice}`);