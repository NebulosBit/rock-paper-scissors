const rPSOption = ["Rock", "Paper", "Scissor"];
const rpsButtons = document.querySelectorAll(".rps-button");

function getPlayerChoice() {
  for (let i = 0; i < rpsButtons.length; i++) {
    rpsButtons[i].addEventListener("click", 
    function() {
      const playerChoice = this.getAttribute("value");
    });
  }
}

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  let computerChoice = rPSOption[randomNum];
  return computerChoice;
}

getPlayerChoice()