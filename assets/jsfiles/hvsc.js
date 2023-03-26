var board = ['', '', '', '', '', '', '', '', ''];
var human = 'X';
var computer = 'O';
var currentPlayer = human;
var gameOver = false;
var playerScore = document.getElementById('player-count');
var computerScore = document.getElementById('computer-count');
let playerWins = 0;
let computerWins = 0;

// Make player move
function playerMove(cell) {
  if (!gameOver && board[cell] === '') {
    board[cell] = currentPlayer;
    document.getElementById(cell).innerHTML = currentPlayer;
    if (currentPlayer === human) {
      document
        .getElementById(cell)
        .setAttribute('style', 'background-color:#7EB6C3');
    } else {
      document
        .getElementById(cell)
        .setAttribute('style', 'background-color:#DBF28F');
    }
    checkForWinner();
    currentPlayer = currentPlayer === human ? computer : human;

    if (currentPlayer === computer && !gameOver) {
      computerMove();
    }
  }
}

// Make computer move
function computerMove() {
  var availableCells = [];
  for (var i = 0; i < 9; i++) {
    if (board[i] === '') {
      availableCells.push(i);
    }
  }
  var randomCell =
    availableCells[Math.floor(Math.random() * availableCells.length)];
  playerMove(randomCell);
}

// Handle game over
function gameOverMessage(message) {
  document.getElementById('message').innerHTML = message;
  gameOver = true;
}

// Check for winner or tie
function checkForWinner() {
  if (
    (board[0] === human && board[1] === human && board[2] === human) ||
    (board[3] === human && board[4] === human && board[5] === human) ||
    (board[6] === human && board[7] === human && board[8] === human) ||
    (board[0] === human && board[3] === human && board[6] === human) ||
    (board[1] === human && board[4] === human && board[7] === human) ||
    (board[2] === human && board[5] === human && board[8] === human) ||
    (board[0] === human && board[4] === human && board[8] === human) ||
    (board[2] === human && board[4] === human && board[6] === human)
  ) {
    gameOverMessage('Congratulations, you won!');
    playerWins++;
    updateCounters();

    console.log(playerWins);
  } else if (
    (board[0] === computer && board[1] === computer && board[2] === computer) ||
    (board[3] === computer && board[4] === computer && board[5] === computer) ||
    (board[6] === computer && board[7] === computer && board[8] === computer) ||
    (board[0] === computer && board[3] === computer && board[6] === computer) ||
    (board[1] === computer && board[4] === computer && board[7] === computer) ||
    (board[2] === computer && board[5] === computer && board[8] === computer) ||
    (board[0] === computer && board[4] === computer && board[8] === computer) ||
    (board[2] === computer && board[4] === computer && board[6] === computer)
  ) {
    gameOverMessage('Sorry, you lost!');
    computerWins++;
    updateCounters();
  } else if (!board.includes('')) {
    gameOverMessage("It's a tie!");
  }
}

// Handle reset game
function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  for (var i = 0; i < 9; i++) {
    document.getElementById(i).innerHTML = '';
    document.getElementById(i).removeAttribute('style');
  }
  document.getElementById('message').innerHTML = '';
  currentPlayer = human;
  gameOver = false;
}

// Event listeners
document.getElementById('board').addEventListener('click', function (event) {
  if (event.target.tagName === 'TD') {
    playerMove(event.target.id);
  }
});

document.getElementById('reset').addEventListener('click', function () {
  resetGame();
});

function updateCounters() {
  let playerWinCount = document.getElementById('player-win-count');
  let computerWinCount = document.getElementById('computer-win-count');
  playerWinCount.innerHTML = 'Player Wins: ' + playerWins;
  computerWinCount.innerHTML = 'Computer Wins: ' + computerWins;
}
