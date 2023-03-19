const rockPaperScissor = ["Rock", "Paper", "Scissor"]

function getPlayerChoice(){
  let playerChoice = prompt("Pick a choice: Rock, Paper, or Scissor");
  playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
  return playerChoice
}

function getComputerChoice(){
  const computerChoice = rockPaperScissor[(Math.floor(Math.random() * (rockPaperScissor.length)))];
  return computerChoice;
}

console.log(getComputerChoice());
console.log(getPlayerChoice());