import React from 'react';
import { Box } from '@mui/material';
function EmojiBullet(props) {
  const { emoji, text } = props;

  return (
    <Box component={'li'} fontSize={'1rem'} lineHeight={{ xs: '3.5rem' }} style={{ cursor: 'default' }}>
      <Box
        component={'span'}
        aria-label='emoji'
        role='img'
        backgroundColor={'#ffffff00'}
        mr={{ xs: '0.5rem', sm: '0.75rem', md: '1rem' }}
        fontSize={{ xs: '.5rem', sm: '.75rem', md: '1.25rem' }}>
        {emoji}
      </Box>
      {text}
    </Box>
  );
}

export default EmojiBullet;

