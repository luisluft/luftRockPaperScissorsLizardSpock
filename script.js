const playerScoreElement = document.querySelector("#player-score");
const playerChoiceElement = document.querySelector("#player-choice");
const computerScoreElement = document.querySelector("#computer-score");
const computerChoiceElement = document.querySelector("#computer-choice");
const resultText = document.querySelector("#result-text");

const playerRock = document.querySelector("#player-rock");
const playerPaper = document.querySelector("#player-paper");
const playerScissors = document.querySelector("#player-scissors");
const playerLizard = document.querySelector("#player-lizard");
const playerSpock = document.querySelector("#player-spock");

const computerRock = document.querySelector("#computer-rock");
const computerPaper = document.querySelector("#computer-paper");
const computerScissors = document.querySelector("#computer-scissors");
const computerLizard = document.querySelector("#computer-lizard");
const computerSpock = document.querySelector("#computer-spock");

const allGameIcons = document.querySelectorAll(".fas");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let computerChoice = "";

function resetSelectedIcons() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) computerChoice = "rock";
  else if (computerChoiceNumber <= 0.4) computerChoice = "paper";
  else if (computerChoiceNumber <= 0.6) computerChoice = "scissors";
  else if (computerChoiceNumber <= 0.8) computerChoice = "lizard";
  else if (computerChoiceNumber <= 1) computerChoice = "spock";
}

// AKA checkResult()
function processTurn() {
  resetSelectedIcons();
  computerRandomChoice();
  displayComputerChoice();
}

function select(playerChoice) {
  processTurn();

  switch (playerChoice) {
    // add selected styling & playerChoice
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceElement.textContent = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceElement.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceElement.textContent = " --- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceElement.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceElement.textContent = " --- Spock";
      break;
    default:
      break;
  }
}

function displayComputerChoice() {
  switch (computerChoice) {
    // add selected styling & playerChoice
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceElement.textContent = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceElement.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceElement.textContent = " --- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceElement.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceElement.textContent = " --- Spock";
      break;
    default:
      break;
  }
}
