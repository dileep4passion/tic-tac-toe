import { useState, useEffect } from 'react';
import BoardTile from './components/BoardTile';
import { createBoard, nextTurn, checkWinner, checkTie, TURNS } from './logic/board';

function App() {
  const [board, setBoard] = useState(createBoard());
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);
  const [winnerCombo, setWinnerCombo] = useState([]);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(nextTurn(turn));
  };

  useEffect(() => {
    const result = checkWinner(board);
    if (result) {
      setWinner(result.player);
      setWinnerCombo(result.combo);
    } else if (checkTie(board)) {
      setWinner(false);
      setWinnerCombo([]);
    } else {
      setWinnerCombo([]);
    }
  }, [board]);

  const resetGame = () => {
    setBoard(createBoard());
    setTurn(TURNS.X);
    setWinner(null);
    setWinnerCombo([]);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>

      <div className="board">
        {board.map((value, index) => (
          <BoardTile
            key={index}
            value={value}
            highlight={winnerCombo.includes(index)}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      <button onClick={resetGame}>Reset</button>

      {winner === null && <p>{turn}'s turn</p>}
      {winner === false && <p>Tie!</p>}
      {winner && <p>{winner} won!</p>}
    </div>
  );
}

export default App;