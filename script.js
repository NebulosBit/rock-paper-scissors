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

function playRound(playerChoice, computerChoice){
  if (playerChoice === computerChoice){
    return `It's a tie! Player: ${playerChoice} - Computer: ${computerChoice}`;
  }
  else if (
    (playerChoice === rockPaperScissor[0] && computerChoice === rockPaperScissor[2]) ||
    (playerChoice === rockPaperScissor[1] && computerChoice === rockPaperScissor[0]) ||
    (playerChoice === rockPaperScissor[3] && computerChoice === rockPaperScissor[2])
  ){
    return `You win! Player: ${playerChoice} - Computer: ${computerChoice}`
  }
  else{
    return `You lost. Player: ${playerChoice} - Computer: ${computerChoice}`;
  }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i < 5; i++){
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerChoice, computerChoice);
        console.log(roundResult);
        if (roundResult.includes("win")){
            playerScore++;
        } else if (roundResult.includes("lost")){
            computerScore++;
        }
    }
    console.log(`Player Score: ${playerScore} - Computer Score: ${computerScore}`);
    return getScore(playerScore, computerScore);
}


function getScore(playerScore, computerScore){
  if (playerScore === computerScore){
    console.log("The game was a tie!")
  } else if (playerChoice < computerScore){
    console.log("You won the game!")
  }
  else{
    console.log("You lost the game")
  }
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();
game();