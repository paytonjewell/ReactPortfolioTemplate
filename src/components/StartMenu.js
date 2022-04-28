import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {Window} from "@mui/icons-material";
import moment from "moment";

function StartMenu() {
   return (
      <Box p={1} sx={{backgroundColor: 'lightgray'}} display={'flex'} alignItems={'center'}>
         <Box sx={{flexGrow: 1}}>
            <Button startIcon={<Window />} variant={'outlined'} sx={{color: '#5534A5', borderColor: '#5534A5', ":hover": {borderColor: '#5534A5'}}}>Start</Button>
         </Box>
         <Typography>{moment().local().format('LT')}</Typography>
      </Box>
   );
}

export default StartMenu;