import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [gamesLeftToPlay, setgamesLeftToPlay] = useState(5);
  const [gamesAlreadyWon, setgamesAlreadyWon] = useState(0);

  useEffect(() => {
    fetch('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/remain.json')
      .then(response => response.json())
      .then(data => {
        setgamesLeftToPlay(data.score);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  const resetCount = () => {
    setgamesLeftToPlay(5);
    setgamesAlreadyWon(0);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '10px', border: '1px solid #fff', width: '100%' }}>
      <div>{gamesLeftToPlay}</div>
      <div>{gamesAlreadyWon}</div>
      <div>{gamesLeftToPlay > 0 ? 'Keep going' : 'Great job'}</div>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default Dashboard;
