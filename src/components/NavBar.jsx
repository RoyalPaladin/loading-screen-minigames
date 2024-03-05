import { useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Logo from '../images/logo.png';
import { Link as RouterLink } from "react-router-dom";
import { Typography } from '@mui/material';

const navBarStyles = (theme) => ({
  position: 'fixed',
  bottom: '0',
  width: '100%',
  height: '100px',
  backgroundColor: '#333',
  color: '#fff',
  border: '1px solid #fff',
  padding: '0 10%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxSizing: 'border-box',
  [theme.breakpoints.down('lg')]: {
    height: '80px',
  },
  [theme.breakpoints.down('md')]: {
    height: '60px',
  },
  '& a': {
    color: '#fff',
  },
});

const linkStyles = (theme) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
});

const shortLinkStyles = (theme) => ({
  display: 'none',
  [theme.breakpoints.down('lg')]: {
    display: 'inline',
  },
  [theme.breakpoints.down('md')]: {
    display: 'inline',
  },
});

function BigText ({ text, theme }) {
  return (
    <Typography
      variant='h6'
      sx={linkStyles(theme)}
    >
      {text}
    </Typography>
  );
};

function SmallText ({ text, theme }) {
  return (
    <Typography
      variant='h6'
      sx={shortLinkStyles(theme)}
    >
      {text}
    </Typography>
  );
};

export default function Navbar() {
  const theme = useTheme();

  return (
    <Box sx={navBarStyles(theme)}>
      <Box>
        <img src={Logo} alt="logo" style={{ width: '20px', height: '20px' }} />
      </Box>
      <Box>
        <RouterLink to="/dashboard">
          <SmallText text='Da' theme={theme} />
          <BigText text='Dashboard' theme={theme} />
        </RouterLink>
      </Box>
      <Box>
        <RouterLink to="/game/math">
          <SmallText text='Ma' theme={theme} />
          <BigText text='Math' theme={theme} />
        </RouterLink>
      </Box>
      <Box>
        <RouterLink to="/game/connect">
          <SmallText text='Co' theme={theme} />
          <BigText text='Connect 4' theme={theme} />
        </RouterLink>
      </Box>
      <Box>
        <RouterLink to="/game/memory">
          <SmallText text='Me' theme={theme} />
          <BigText text='Memorisation' theme={theme} />
        </RouterLink>
      </Box>
    </Box>
  );
}
