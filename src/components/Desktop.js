import React, {useState} from 'react';
import {Box} from "@mui/material";
import StartMenu from "./StartMenu";
import DesktopIcons from "./DesktopIcons";
import About from "./About";

function Desktop(props) {
   const [aboutOpen, setAboutOpen] = useState(false);

   const onClickIcon = (whichIcon) => {
      if (whichIcon === 'about') {
         setAboutOpen(!aboutOpen)
      }
   }

   return (
      <Box display={'flex'} flexDirection={'column'} height={'100vh'} sx={{backgroundColor: '#5534A5'}}>
         <DesktopIcons sx={{flexGrow: 1, position: 'relative'}} onClickIcon={onClickIcon}/>
         <About show={aboutOpen}/>
         <StartMenu/>
      </Box>
   );
}

export default Desktop;