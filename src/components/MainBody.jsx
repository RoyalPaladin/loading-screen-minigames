import { useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export default function MainBody({ children }) {
  const theme = useTheme();

  const styles = {
    position: 'fixed',
    width: '100%',
    top: '0',
    margin: '0px',
    height: 'calc(100% - 100px)',
    backgroundColor: '#ccc',
  };

  return (
    <Box sx={styles}>
      {children}
    </Box>
  );
}
