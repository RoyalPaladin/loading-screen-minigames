/* eslint-disable multiline-ternary */
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import FooterBar from './components/NavBar';
import MainBody from './components/MainBody';
import Navbar from './components/NavBar';
import Dashboard from './components/Dashboard';
import MathGame from './components/MathGame';
import Connect from './components/Connect';
import Memory from './components/Memory';

function PageList () {
  return (
    <div>
      <MainBody>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/game/math' element={<MathGame/>}/>
          <Route path='/game/connect' element={<Connect/>}/>
          <Route path='/game/memory' element={<Memory/>}/>
        </Routes>
      </MainBody>
      <Navbar/>
    </div>
  );
}

export default PageList;
