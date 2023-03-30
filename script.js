const rpsButtons = document.querySelectorAll(".rps-button");
const playerHtmlScore = document.getElementById("player-score");
const computerHtmlScore = document.getElementById("computer-score");
const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("computerHand");
const selectThrow = document.getElementById("select-throw")
let reachScore = document.getElementById("reach-score")
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0; // added roundsPlayed variable
const rPSOption = ["Rock", "Paper", "Scissor"];

function getPlayerChoice() {
  for (let i = 0; i < rpsButtons.length; i++) {
    rpsButtons[i].addEventListener("click", 
    function() {
      const playerChoice = this.getAttribute("value");
      displayScore(playerChoice);
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
    let tieText = `It's a tie! Player: ${playerChoice} - Computer: ${computerChoice}`
    reachScore.innerText = tieText;
    return tieText;
  } 
  // assigns a score of 0 to handle losing scenarios in the game
  else if (
    (playerChoice === rPSOption[0] && computerChoice === rPSOption[2]) ||
    (playerChoice === rPSOption[1] && computerChoice === rPSOption[0]) ||
    (playerChoice === rPSOption[2] && computerChoice === rPSOption[1])
  ){
    let winText = `You win! Player: ${playerChoice} - Computer: ${computerChoice}`
    reachScore.innerText = winText;
    return winText;
  }
  // assigns a score of 0 to handle losing scenarios in the game
  else {
    let lostText = `You lost. Player: ${playerChoice} - Computer: ${computerChoice}`;
    reachScore.innerText = lostText;
    return lostText;
    
  }
}

function gameEnd(){
  for (let i = 0; i < rpsButtons.length; i++) {
      rpsButtons[i].disabled = true;
  }
}

function game(playerChoice, computerChoice) {
  const roundResult = playRound(playerChoice, computerChoice);
  if (roundResult.includes("win")){
    const playerGameScore = `Player: ${playerScore = playerScore + 1}`;
    console.log(playerGameScore)
    playerHtmlScore.innerText = playerGameScore;
    if (playerScore == 5) {
      let gameWin = "You Won!"
      selectThrow.innerText = gameWin;
      console.log(gameWin);
      gameEnd()
    }
  } else if (roundResult.includes("lost")){
    const computerGameScore = `Computer: ${computerScore = computerScore + 1}`;
    console.log(computerGameScore);
    computerHtmlScore.innerText = computerGameScore;
    if (computerScore == 5) {
      let gameLost = "You lost!"
      selectThrow.innerText = gameLost;
      console.log(gameLost);
      gameEnd()
    }
  }
  else {
    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
  }
}

function htmlHand(playerChoice, computerChoice){
  playerHandCheck(playerChoice)
  computerHandCheck(computerChoice)
}

function playerHandCheck(playerChoice){
  if (playerChoice == "Rock") {
    playerHand.innerText = "✊"
  }
  if (playerChoice == "Paper") {
    playerHand.innerText = "✋"
  }
  if (playerChoice == "Scissor") {
    playerHand.innerText = "✌️"
  }
}

function computerHandCheck(computerChoice) {
  if (computerChoice == "Rock") {
    computerHand.innerText = "✊"
  }
  if (computerChoice == "Paper") {
    computerHand.innerText = "✋"
  }
  if (computerChoice == "Scissor") {
    computerHand.innerText = "✌️"
  }
}

function displayScore(playerChoice){
  let computerChoice = getComputerChoice();
  console.log(`Player Choice: ${playerChoice}`);
  console.log(`computer Choice: ${computerChoice}`);
  console.log(`${playRound(playerChoice, computerChoice)}`);
  game(playerChoice, computerChoice)
  htmlHand(playerChoice, computerChoice)
}

getPlayerChoice()