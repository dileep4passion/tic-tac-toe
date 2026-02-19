export const TURNS = Object.freeze({
  X: 'X',
  O: 'O'
});

export const createBoard = () => Array(9).fill(null);

export const nextTurn = (turn) => (turn === TURNS.X ? TURNS.O : TURNS.X);

export const checkWinner = (board) => {
  const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a], combo }; // player and combo
    }
  }
  return null;
};

export const checkTie = (board) => board.every(cell => cell !== null);