import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';

const ConnectStyles = {
    width: '25%',
    height: '25%',
    border: '1px solid rgb(255,255,0)',
    background: '#fff',
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
};
const Memory = () => {
    const [stage, setStage] = useState(1);
    const [board, setBoard] = useState(Array(4).fill(Array(4).fill(false)));
    const [randomGrid, setRandomGrid] = useState([null, null]);
    useEffect(() => {
        if (window.confirm('Would you like to play?')) {
            const randomCol = Math.floor(Math.random() * 4);
            const randomRow = Math.floor(Math.random() * 4);
            setRandomGrid([randomRow, randomCol]);
            const newBoard = board.map((row, i) =>
                row.map((cell, j) => (i === randomRow && j === randomCol ? '#999' : '#fff'))
            );
            setBoard(newBoard);
            setTimeout(() => {
                setBoard(Array(4).fill(Array(4).fill('#fff')));
            }, 500);
        }
    }, []);

    const handleClick = (i, j) => {
        if (i === randomGrid[0] && j === randomGrid[1]) {
            setStage(stage + 1);
        } else {
            setBoard(board.map(row => row.map(() => '#f00')));
            setTimeout(() => {
                setBoard(Array(4).fill(Array(4).fill('#fff')));
            });
        }
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: '100%' }}>
            {board.map((row, i) =>
                row.map((cell, j) => (
                    <div
                        key={`${i}-${j}`}
                        style={{ ...ConnectStyles, background: cell }}
                        onClick={() => handleClick(i, j)}
                    />
                ))
            )};
        </div>
    );
};


export default Memory;
