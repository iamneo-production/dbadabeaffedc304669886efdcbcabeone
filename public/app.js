// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
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
    // Check if the cell is empty before proceeding
    if (cells[index] === '') {
        cells[index] = currentPlayer;
        element.textContent = currentPlayer;

        // Check for a win
        if (checkWin()) {
            result.textContent = `Player ${currentPlayer} wins!`;
            disableAllButtons();
        } else if (cells.indexOf('') === -1) {
            result.textContent = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            result.textContent = `Player ${currentPlayer}'s turn`;
        }

        element.disabled = true; // Disable the button after it's clicked
    }
};

// Function to check for a win
const checkWin = () => {
    for (let condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return true;
        }
    }
    return false;
};

// Function to disable all buttons
const disableAllButtons = () => {
    btns.forEach(btn => (btn.disabled = true));
};

// Function to reset the game
const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    result.textContent = `Player ${currentPlayer}'s turn`;
    btns.forEach((btn) => {
        btn.textContent = '';
        btn.disabled = false; // Re-enable all buttons
    });
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);

// Call resetGame to initialize the game
resetGame();
