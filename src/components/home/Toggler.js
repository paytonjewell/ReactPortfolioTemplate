import React from 'react';
import { Box } from '@mui/material';

export default function Toggler({ darkMode, handleClick }) {
  const transition = 'all 300ms ease';

  return (
    <Box
      fontSize={{ xs: '0.75rem', sm: '1.5rem', md: '2rem' }}
      sx={{ cursor: 'pointer', ':hover': { transform: 'translateY(-3px)', transition: transition } }}>
      {darkMode ? (
        <span onClick={handleClick} aria-label='Harf Moon' role='img'>
          🌙
        </span>
      ) : (
        <span onClick={handleClick} aria-label='Sun' role='img'>
          ☀️
        </span>
      )}
    </Box>
  );
}
