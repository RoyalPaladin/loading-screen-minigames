import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';

const GameStyles = {
  width: '10%',
  height: '10%',
  border: '2px solid #333',
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,

};

const PlayerCounter = {
  Player1: { content: '🔵' },
  Player2: { content: '🔴' },
};

const Connect = () => {
  const [gameBoard, setGameBoard] = useState(Array.from({ length: 10 }, () => Array(10).fill(null)));
  const [currPlayer, setCurrPlayer] = useState('Player1');
  const [movesDone, setMovesDone] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleClick = (column) => {
    if (gameOver) return;
    const newGameBoard = [...gameBoard];
    let placed = false;
    for (let i = 9; i >= 0; i--) {
      if (!newGameBoard[i][column]) {
        newGameBoard[i][column] = currPlayer;
        setMovesDone(movesDone + 1);
        placed = true;
        break;
      }
    }
    if (!placed) return;
    setGameBoard(newGameBoard);
    setCurrPlayer(currPlayer === 'Player1' ? 'Player2' : 'Player1');
  };

  const checkVertical = () => {
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 10; col++) {
        if (gameBoard[row][col] && gameBoard[row][col] === gameBoard[row + 1][col] && gameBoard[row][col] === gameBoard[row + 2][col] && gameBoard[row][col] === gameBoard[row + 3][col]) {
          return gameBoard[row][col];
        }
      }
    }
  };
  const checkHorizontal = () => {
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 7; col++) {
        if (gameBoard[row][col] && gameBoard[row][col] === gameBoard[row][col + 1] && gameBoard[row][col] === gameBoard[row][col + 2] && gameBoard[row][col] === gameBoard[row][col + 3]) {
          return gameBoard[row][col];
        }
      }
    }
  };

  const checkDiagonal = () => {
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 7; col++) {
        if (gameBoard[row][col] && gameBoard[row][col] === gameBoard[row + 1][col + 1] && gameBoard[row][col] === gameBoard[row + 2][col + 2] && gameBoard[row][col] === gameBoard[row + 3][col + 3]) {
          return gameBoard[row][col];
        }
      }
    }
    for (let row = 3; row < 10; row++) {
      for (let col = 0; col < 7; col++) {
        if (gameBoard[row][col] && gameBoard[row][col] === gameBoard[row - 1][col + 1] && gameBoard[row][col] === gameBoard[row - 2][col + 2] && gameBoard[row][col] === gameBoard[row - 3][col + 3]) {
          return gameBoard[row][col];
        }
      }
    }
  };

  useEffect(() => {
    const winner = checkVertical() || checkHorizontal() || checkDiagonal();
    if (winner) {
      setGameOver(true);
      setWinner(winner);
    }
  }, [gameBoard]);

  return (
    <>
      <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: '100%' }}>
          {gameBoard.map((row, i) =>
            row.map((cell, j) => (
              <Box
                key={`${i}-${j}`}
                sx={{ ...GameStyles }}
                onClick={() => handleClick(j)}
              >
                {cell && <span>{PlayerCounter[cell].content}</span>}
              </Box>
            ))
          )}
        </Box>
        {gameOver && (
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', background: '#fff', border: '1px solid #333', width: '400px', height: '200px', display: 'flex' }}>
            <div style={{ fontSize: '14pt\n' }}>{winner ? `${winner} wins` : 'No one wins'}</div>
            <div>A total of {movesDone} moves were made</div>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Connect;
