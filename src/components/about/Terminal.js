import React from 'react';
import Style from './Terminal.module.scss';
import classNames from 'classnames';
import { Box } from '@mui/material';

const iconClass = 'fa fa-circle';

function Terminal(props) {
  const { text } = props;

  return (
    <Box
      component={'section'}
      className={classNames(Style.terminal, Style.shadowed)}
      width={{ xs: '95%', sm: '85%', md: '65%' }}
      borderRadius={'1.5rem'}
      m={'2rem 0'}>
      <Box
        sx={{ backgroundColor: '#808080' }}
        p={'0.5rem'}
        borderRadius={'0.5rem 0.5rem 0 0'}
        fontSize={{ xs: '.5rem', sm: '.75rem', md: '1rem' }}>
        <i className={classNames(iconClass, Style.red)} />
        <i className={classNames(iconClass, Style.amber)} />
        <i className={classNames(iconClass, Style.green)} />
      </Box>
      <Box
        py={{ xs: '1rem', md: '2rem' }}
        px={{ xs: '1rem', md: '2rem' }}
        borderRadius={'0 0 0.5rem 0.5rem'}
        sx={{ backgroundColor: '#525252' }}
        fontSize={{ xs: '0.5rem', sm: '1rem', md: '1.5rem' }}
        fontFamily={'Menlo'}>
        {text}
      </Box>
    </Box>
  );
}

export default Terminal;
