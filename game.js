import { joinGame, getPlayerName } from './login.js';

let board = Array(9).fill('');
let currentPlayer = 'X';
let gameEnded = false;

document.getElementById('login').innerHTML = `
    <input type="text" id="playerName" placeholder="Enter your name">
    <button onclick="joinGame()">Join Game</button>
`;

document.getElementById('game').innerHTML = `
    <div class="board">
        <button onclick="makeMove(0)" id="0"></button>
        <button onclick="makeMove(1)" id="1"></button>
        <button onclick="makeMove(2)" id="2"></button>
        <br>
        <button onclick="makeMove(3)" id="3"></button>
        <button onclick="makeMove(4)" id="4"></button>
        <button onclick="makeMove(5)" id="5"></button>
        <br>
        <button onclick="makeMove(6)" id="6"></button>
        <button onclick="makeMove(7)" id="7"></button>
        <button onclick="makeMove(8)" id="8"></button>
    </div>
    <div id="result"></div>
`;

function makeMove(index) {
    if (board[index] === '' && !gameEnded) {
        board[index] = currentPlayer;
        document.getElementById(index.toString()).innerText = currentPlayer;
        document.getElementById(index.toString()).classList.add(currentPlayer === 'X' ? 'blue' : 'red');
        checkGameResult();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkGameResult() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let pattern of winPatterns) {
        if (board[pattern[0]] !== '' && board[pattern[0]] === board[pattern[1]] && board[pattern[1]] === board[pattern[2]]) {
            document.getElementById('result').innerText = `${currentPlayer} wins!`;
            gameEnded = true;
            return;
        }
    }

    if (!board.includes('')) {
        document.getElementById('result').innerText = "It's a draw!";
        gameEnded = true;
        return;
    }
}
