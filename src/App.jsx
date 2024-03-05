/* eslint-disable multiline-ternary */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
// import { createTheme, ThemeProvider } from '@mui/material/styles';

import PageList from './PageList';

const App = () => {
  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
    {/* <ThemeProvider> */}
      <Router>
        <PageList />
      </Router>
    {/* </ThemeProvider> */}
    </>
  );
}

export default App;
