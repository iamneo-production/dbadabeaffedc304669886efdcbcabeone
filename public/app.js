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
            result.textContent = `Player ${currentPlayer} wins!`;
            btns.forEach(btn => btn.removeEventListener('click', handleCellClick));
            return true;
        }
    }
    return false;
};

// Function to handle player moves
const handleCellClick = (element, index) => {
    if (cells[index] === '' && result.textContent === '') {
        cells[index] = currentPlayer;
        element.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        result.textContent = `Player ${currentPlayer}'s turn`;
        element.removeEventListener('click', handleCellClick);

        if (!checkWin() && cells.indexOf('') === -1) {
            result.textContent = "It's a draw!";
        }
    }
};

// Function to reset the game
const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    result.textContent = `Player ${currentPlayer}'s turn`;
    btns.forEach((btn, i) => {
        btn.textContent = '';
        btn.addEventListener('click', () => handleCellClick(btn, i));
    });
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => handleCellClick(btn, i));
});

document.querySelector('button').addEventListener('click', resetGame);
// let currentPlayer = "X";
// let gameOver = false;

// function makeMove(cell) {
//   if (!cell.textContent && !gameOver) {
//     cell.textContent = currentPlayer;
//     currentPlayer = currentPlayer === "X" ? "O" : "X";
//     document.getElementById(
//       "result"
//     ).textContent = "Player "+currentPlayer+ "'s turn";
//     checkWinner();
//   }
// }

// function checkWinner() {
//   const cells = document.querySelectorAll(".cell");
//   const winningCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   for (const combo of winningCombos) {
//     const [a, b, c] = combo;
//     if (
//       cells[a].textContent &&
//       cells[a].textContent === cells[b].textContent &&
//       cells[a].textContent === cells[c].textContent
//     ) {
//       document.getElementById(
//         "result"
//       ).textContent = `Player ${cells[a].textContent} wins!`;
//       gameOver = true;
//     }
//   }
// }

// function resetGame() {
//   const cells = document.querySelectorAll(".cell");
//   for (const cell of cells) {
//     cell.textContent = "";
//   }
//   document.getElementById("result").textContent = "Player X's turn";
//   currentPlayer = "X";
//   gameOver = false;
// }
