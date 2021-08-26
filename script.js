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

function resetSelectedIcons() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

function select(playerChoice) {
  resetSelectedIcons();

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
