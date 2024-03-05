import { Box } from '@mui/system';
import { useTheme } from '@mui/material';
import React, { useState, useEffect } from 'react';

const MathStyles = (theme) => ({
  width: '20%',
  height: '40%',
  background: 'linear-gradient(to right, #abcabc, #cbacbd)',
  color: '#333',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  margin: 0,
});

const MathGame = () => {
  const [randomNumber1, setRandomNumber1] = useState(Math.floor(Math.random() * 50) + 1);
  const [randomNumber2, setRandomNumber2] = useState(Math.floor(Math.random() * 50) + 1);
  const mathOperators = ['+', '-', '*', '/', '%'];
  const [randomOperator, setRandomOperator] = useState(mathOperators[Math.floor(Math.random() * 5)]);
  const [inputAnswer, setInputAnswer] = useState('');

  const newRandomNumbers = () => {
    setRandomNumber1(Math.floor(Math.random() * 50) + 1);
    setRandomNumber2(Math.floor(Math.random() * 50) + 1);
    setRandomOperator(mathOperators[Math.floor(Math.random() * 5)]);
  };
  const handleKeyUp = (event) => {
    setInputAnswer(event.target.value);
    const result = eval(`${randomNumber1} ${randomOperator} ${randomNumber2}`);
    if (parseFloat(inputAnswer).toFixed(1) === result.toFixed(1)) {
      alert('Congratulations');
      setInputAnswer('');
      newRandomNumbers();
    }
  };

  const theme = useTheme();
  return (
    <>
    <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
      <Box sx={MathStyles(theme)}>
        <div>{randomNumber1}</div>
      </Box>
      <Box sx={MathStyles(theme)}>
        <div>{randomOperator}</div>
      </Box>
      <Box sx={MathStyles(theme)}>
        <div>{randomNumber2}</div>
      </Box>
      <Box sx={MathStyles(theme)}>
        <div>=</div>
      </Box>
      <Box sx={MathStyles(theme)}>
        <div>
          <input
            type="text"
            value={inputAnswer}
            onChange={(e) => setInputAnswer(e.target.value)}
            onKeyUp={handleKeyUp}
            style={{ width: '50px' }}
          />
        </div>
      </Box>
    </Box>
    <Box sx={{ position: 'absolute', top: '90%',display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '10%' }}>
      <button onClick={newRandomNumbers}>Reset</button>
    </Box>
    </>
  );
};

export default MathGame;
