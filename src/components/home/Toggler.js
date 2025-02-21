import React from 'react';
import {Box, useTheme} from "@mui/material";

export default function Toggler({darkMode, handleClick}) {
    const transition = 'all 250ms ease'
    const theme = useTheme()

   return (
      <Box fontSize={'1.5rem'} sx={{cursor: 'pointer', transition: transition, 
         [theme.breakpoints.up('md')] : { ":hover": {transform: 'translateY(-3px)' }},
         [theme.breakpoints.down('md')] : { ":hover": {transform: 'translateY(3px)'}}, 
         }} > 
         {
            darkMode ?
               <span onClick={handleClick} aria-label="Full Moon" role="img">🌕</span>
               :
               <span onClick={handleClick} aria-label="New Moon" role="img">🌑</span>
         }
      </Box>
   )
}