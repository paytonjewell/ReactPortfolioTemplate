import React from 'react';
import {Box} from "@mui/material";

function EmojiBullet(props) {
   const {link, emoji, text} = props;

   return (
      <a href={link} target="_blank" rel="noopener noreferrer">
         <Box component={'li'} fontSize={'1rem'} lineHeight={1.5}>
            <Box component={'span'} aria-label="cheese"
                 role="img"
                 mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>{emoji}</Box> {text}
         </Box>
      </a>
   );
}

export default EmojiBullet;