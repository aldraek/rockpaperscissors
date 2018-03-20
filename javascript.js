var btn_rock = document.querySelector('#btn_rock');
var btn_paper = document.querySelector('#btn_paper');
var btn_scissors = document.querySelector('#btn_scissors');

btn_rock.addEventListener('click', (e) => {
  playerSelection = 'rock';
  playRound("rock", computerPlay());
  console.log("[Score] You: " + playerScore + " Computer: " + computerScore);
  updateScore();
  });

btn_paper.addEventListener('click', (e) => {
  playerSelection = 'paper';
  playRound("paper", computerPlay());
  console.log("[Score] You: " + playerScore + " Computer: " + computerScore);
  updateScore();
  });

btn_scissors.addEventListener('click', (e) => {
  playerSelection = 'scissors';
  playRound("scissors", computerPlay());
  console.log("[Score] You: " + playerScore + " Computer: " + computerScore);
  updateScore();
  });

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = '';
let roundNumber = 0;

let resultsdiv = document.querySelector('.resultsdiv');
let html_playerChoice = document.querySelector('.playerchoice');
let html_compChoice = document.querySelector('.compchoice');
let html_roundResult = document.querySelector('.roundresult');
let html_score = document.querySelector('.score');
let html_gameResult = document.querySelector('.gameresult');

function updateScore() {
  updateChoices();
  updatePlayerScore();
  updateGameResult();
}

/*
  let ptag = document.createElement('p');
  ptag.classList.add('ptag');
  ptag.textContent = 'Hey I\'m red!';
  ptag.setAttribute('style', 'color: red;');

  container.appendChild(ptag);
  */

let playerChoiceText = document.createElement('p');
html_playerChoice.appendChild(playerChoiceText);
let computerChoiceText = document.createElement('p');
html_compChoice.appendChild(computerChoiceText);
let roundResultText = document.createElement('p');
html_roundResult.appendChild(roundResultText);

function updateChoices() {
  playerChoiceText.textContent = "You chose " + playerSelection;
  computerChoiceText.textContent = "The computer chose " + computerSelection;
  roundResultTextUpdate();
}

function roundResultTextUpdate() {
  let result = checkWin(playerSelection, computerSelection);
  if (result == 1) {
    roundResultText.textContent = "Result: Win";
  } else if (result == -1) {
    roundResultText.textContent = "Result: Loss";
  } else {
    roundResultText.textContent = "Result: Tie";
  }
}

let scoreText = document.createElement('p');
html_score.appendChild(scoreText);

function updatePlayerScore() {
  scoreText.textContent = "[Round " + roundNumber + "]" + " Player: " + playerScore + " Comp: " + computerScore;
}

let gameResultText = document.createElement('h2');
html_gameResult.appendChild(gameResultText);

function updateGameResult() {
  if (roundNumber >= 5) {
    if (playerScore > computerScore) {
      gameResultText.textContent = "YOU WIN THE GAME";
    } else if (computerScore > playerScore) {
      gameResultText.textContent = "YOU LOSE THE GAME";
    } else {
      gameResultText.textContent = "YOU TIE THE GAME";
    }
    roundNumber = 0;
    playerScore = 0;
    computerScore = 0;
  } else {
    gameResultText.textContent = "";
  }

}


function computerPlay() {
  let randomNumber = Math.random() * 9;

  if (randomNumber <= 3) {
    computerSelection = 'rock';
    return "rock";
  } else if (randomNumber > 3 && randomNumber <= 6) {
    computerSelection = 'paper';
    return "paper";
  } else {
    computerSelection = 'scissors';
    return "scissors";
  }
}

function playRound (playerSelection, computerSelection) {
  let result = checkWin(playerSelection, computerSelection);
  displayStatus(playerSelection, computerSelection);
  if (result == 1) {
    playerScore++;
  } else if (result == -1) {
    computerScore++;
  }
  roundNumber++;
}

function checkWin (player, computer) {
  if (player == 'rock') {
    if (computer == 'rock') return 0;
    if (computer == 'paper') {return -1;}
    else {return 1;}
  }
  if (player == 'paper') {
    if (computer == 'rock') return 1;
    if (computer == 'paper') {return 0;}
    else {return -1;}
  }
  if (player == 'scissors') {
    if (computer == 'rock') return -1;
    if (computer == 'paper') {return 1;}
    else {return 0;}
  }
}

function displayStatus (player, computer) {
  if (player == 'rock') {
    if (computer == 'rock') {
      console.log("You tie! You both played Rock!");
    } else if (computer == 'paper') {console.log("You lose! Paper beats Rock!");}
    else {
      console.log("You win! Rock beats Scissors!");}
  }
  if (player == 'paper') {
    if (computer == 'rock') {
    console.log("You win! Paper beats Rock!");
    } else if (computer == 'paper') {console.log("You tie! You both played Paper!");}
    else {console.log("You lose! Scissors beats Paper!");}
  }
  if (player == 'scissors') {
    if (computer == 'rock') {
      console.log("You lose! Rock beats Scissors!");
    } else if (computer == 'paper') {console.log("You win! Scissors beats Paper!");}
    else { console.log("You tie! You both played Scissors!");}
  }
}

function playerPlay() {
  let choice = prompt("Rock, Paper, or Scissors?");
  // choice.toLowerCase();
  return choice;
}

function game() {
  playRound(playerPlay(), computerPlay());
  playRound(playerPlay(), computerPlay());
  playRound(playerPlay(), computerPlay());
  playRound(playerPlay(), computerPlay());
  playRound(playerPlay(), computerPlay());

  console.log("[Score] You: " + playerScore + " Computer: " + computerScore);

  if (playerScore > computerScore) {
    console.log("You WIN the game!");
  }
  else {
    console.log("You LOSE the game!");
  }
}
