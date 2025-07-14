let playerScore = 0;
let computerScore = 0;
let computerChoice;

const message = document.querySelector('.message');

const participants = document.querySelectorAll('.participant');

const playerTitle = participants[0].querySelector('h3');
const playerImage = participants[0].querySelector('img');
playerTitle.textContent = `player: ${playerScore}`;

const computerTitle = participants[1].querySelector('h3');
const computerImage = participants[1].querySelector('img');
computerTitle.textContent = `computer: ${computerScore}`;

const playerWeapons = document.querySelectorAll('.weapon');

playerWeapons.forEach((playerWeapon) => {
  playerWeapon.addEventListener(`click`, (e) => {
    playerImage.setAttribute(`src`, `images/${e.currentTarget.dataset.weapon}.png`)
    playGame(e.currentTarget.dataset.weapon)
  });
});

function playGame(playerChoice) {
  getComputerChoice();
  if (playerChoice === computerChoice) {
    message.textContent = `It's a tie.`;
  } else if ((playerChoice === `rock` && computerChoice === `scissors`) || (playerChoice === `scissors` && computerChoice === `paper`) || (playerChoice === `paper` && computerChoice === `rock`)) {
    message.textContent = `You win. ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}.`;
    playerScore++;
    updateScore();
  } else {
    message.textContent = `You lose. ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}.`;
    computerScore++;
    updateScore();
  }

  if (playerScore === 5) {
    message.textContent = `You won the game! Choose your weapon to start over.`;
    playerScore = 0;
    computerScore = 0;
    updateScore();
  } else if (computerScore === 5) {
    message.textContent = `You lost the game :( Choose your weapon to start over.`;
    playerScore = 0;
    computerScore = 0;
    updateScore();
  }
}

function getComputerChoice() {
  switch(getWeaponNumber()) {
    case 1:
      computerChoice = `rock`;
      break;
    case 2:
      computerChoice = `paper`;
      break;
    case 3:
      computerChoice = `scissors`;
      break;
  }
  computerImage.setAttribute(`src`, `images/${computerChoice}.png`)
}

function updateScore() {
  playerTitle.textContent = `player: ${playerScore}`;
  computerTitle.textContent = `computer: ${computerScore}`;
}

function getWeaponNumber() {
  return Math.floor(Math.random() * 3) + 1;
}


