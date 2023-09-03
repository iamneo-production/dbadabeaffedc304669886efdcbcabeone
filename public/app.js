// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let buttons = document.querySelectorAll('.cell.btn');  
let gameActive = true;

// Winning conditions
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    if (gameActive && cells[index] === '') {
        cells[index] = currentPlayer;
        element.innerText = currentPlayer;
        element.value = currentPlayer;  
        element.disabled = true;

        if (checkWin()) {
            result.innerText = `Player ${currentPlayer} Won🎉`;
            gameActive = false;
        } else if (cells.every(cell => cell !== '')) {
            result.innerText = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            result.innerText = `Player ${currentPlayer} Turn`;
        }
    }
};

// Function to check for winning conditions
const checkWin = () => {
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return cells[a] && cells[a] === cells[b] && cells[b] === cells[c];
    });
};

// Function to reset the game
const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    result.innerText = "Player X Turn";

    buttons.forEach(button => {
        button.innerText = '';
    });
};

buttons.forEach((button, i) => { // Changed variable name to 'button'
    button.addEventListener('click', () => ticTacToe(button, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);