const rockPaperScissor = ["Rock", "Paper", "Scissor"]

function getComputerChoice(){
  const computerChoice = rockPaperScissor[(Math.floor(Math.random() * (rockPaperScissor.length)))];
  return computerChoice
}

console.log(getComputerChoice());