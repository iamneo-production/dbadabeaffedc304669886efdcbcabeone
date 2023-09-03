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

// Function to check for a win
const checkWin = () => {
    for (let condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a];
        }
    }
    return null;
};

// Function to handle player moves
const ticTacToe = (element, index) => {
    if (cells[index] === '' && !checkWin()) {
        cells[index] = currentPlayer;
        element.value = currentPlayer;
        element.disabled = true;

        const winner = checkWin();
        if (winner) {
            result.textContent = `Player ${winner} wins!`;
            btns.forEach(btn => (btn.disabled = true));
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            result.textContent = `Player ${currentPlayer}'s turn`;
        }
    }
};

// Function to reset the game
const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    result.textContent = `Player ${currentPlayer}'s turn`;
    btns.forEach((btn, i) => {
        btn.value = '';
        btn.disabled = false;
    });
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
