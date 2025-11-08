function getComputerChoice() {
  let randomComputer = Math.floor(Math.random() * 3);
  let rockChoice = "rock";
  let paperChoice = "paper";
  let scissorsChoice = "scissors";

  if (randomComputer == 0) {
    return rockChoice;
  } else if (randomComputer == 1) {
    return paperChoice;
  } else {
    return scissorsChoice;
  }
}

let playerScore = 0;
let computerScore = 0;
let gameCounter = 5;

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice == "rock" && computerChoice == "scissors") {
    playerScore++;
  }
  if (playerChoice == "scissors" && computerChoice == "paper") {
    playerScore++;
  }
  if (playerChoice == "paper" && computerChoice == "rock") {
    playerScore++;
  }
  if (playerChoice == computerChoice) {
    console.log("TIE!");
  }

  if (computerChoice == "rock" && playerChoice == "scissors") {
    computerScore++;
  }
  if (computerChoice == "scissors" && playerChoice == "paper") {
    computerScore++;
  }
  if (computerChoice == "paper" && playerChoice == "rock") {
    computerScore++;
  }

  if (playerScore == gameCounter || computerScore == gameCounter) {
    const buttonsDiv = document.querySelector(".buttons-div");
    const finalMessage = document.createElement("h3");
    finalMessage.classList.add("game-end-message");
    finalMessage.textContent = "GAME ENDED";
    buttonsDiv.append(finalMessage);
    const buttons = buttonsDiv.querySelectorAll("button");
    buttons.forEach((button) => button.remove());
  }
}

const buttonsDiv = document.querySelector(".buttons-div");
const messageWinner = document.querySelector(".message-winner");
const scoreBoard = document.querySelector(".score-board");

buttonsDiv.addEventListener("click", (e) => {
  let playerChoice = "";
  let computerChoice = getComputerChoice();
  if (e.target.classList.contains("button-rock")) {
    playerChoice = "rock";
    console.log(playerChoice);
    determineWinner(playerChoice, computerChoice);
    messageWinner.textContent =
      "You chose " + playerChoice + " computer chose " + computerChoice;
    scoreBoard.textContent =
      "Human score: " + playerScore + " Computer Score " + computerScore;
  }
  if (e.target.classList.contains("button-paper")) {
    playerChoice = "paper";
    determineWinner(playerChoice, computerChoice);
    messageWinner.textContent =
      "You chose " + playerChoice + " computer chose " + computerChoice;
    scoreBoard.textContent =
      "Human score: " + playerScore + " Computer Score " + computerScore;
  }
  if (e.target.classList.contains("button-scissors")) {
    playerChoice = "scissors";
    determineWinner(playerChoice, computerChoice);
    messageWinner.textContent =
      "You chose " + playerChoice + " computer chose " + computerChoice;
    scoreBoard.textContent =
      "Human score: " + playerScore + " Computer Score " + computerScore;
  }
});
