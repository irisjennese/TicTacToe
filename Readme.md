Initialize the game board, current player, and game status variables.
Define the function for the player's move, which gets called when the player clicks on a cell in the game board. It updates the game board array, renders the move on the game board UI, checks for a winner, and updates the current player.
Define the function for the computer's move, which randomly selects an empty cell on the game board and calls the playerMove function with the cell index.
Define the function to check for a winner or a tie. It checks all the possible winning combinations and updates the game status accordingly.
Define the function to handle the end of the game by displaying a message and updating the win counters.
Define the function to reset the game board and all the variables to their initial values.
Set up event listeners for the game board cells and the reset button.
Define the function to update the win counters on the UI.
Overall, this script uses a combination of HTML, CSS, and JavaScript to implement a functional Tic Tac Toe game where the player competes against the computer.

board: This is an array that represents the current state of the Tic Tac Toe game board. It contains 9 elements that are initially empty strings.

human and computer: These are string variables that represent the symbols used by the human player and the computer player respectively. The human player uses 'X' and the computer player uses 'O'.

currentPlayer: This variable is initially set to human. It is used to keep track of whose turn it is.

gameOver: This is a boolean variable that is initially set to false. It is used to keep track of whether the game is over or not.

playerScore and computerScore: These variables are used to store the player and computer scores respectively. They are initialized with the DOM elements that display the scores.

playerWins and computerWins: These variables are initialized to 0 and are used to keep track of the number of wins for each player.

playerMove: This is a function that takes a parameter cell which represents the index of the cell that was clicked by the human player. If the game is not over and the clicked cell is empty, it updates the board with the human player's symbol ('X') and checks for a winner. It then switches the currentPlayer to the computer player if the game is not over and calls the computerMove function.

computerMove: This function generates a random move for the computer player by selecting an available cell on the board and calling playerMove with the selected cell.

gameOverMessage: This function takes a message parameter and displays the message on the screen. It also sets gameOver to true.

checkForWinner: This function checks the board to see if there is a winner or a tie. If there is a winner, it calls gameOverMessage with a congratulations message and increments the player's score. If the computer wins, it calls gameOverMessage with a sorry message and increments the computer's score. If there is a tie, it calls gameOverMessage with a tie message.

resetGame: This function resets the board to its initial state, clears the messages on the screen, and sets currentPlayer to the human player.

updateCounters: This function updates the player and computer score DOM elements with the current score values.

Event listeners: There are two event listeners. One listens for a click on the game board and calls playerMove with the clicked cell if it is a valid move. The other listens for a click on the reset button and calls resetGame.
