import React from 'react';
import {Box, IconButton} from "@mui/material";
import {AssignmentInd, Collections, FormatListBulleted, Mail} from "@mui/icons-material";

function DesktopIcons({sx, onClickIcon}) {
   return (
      <Box sx={sx} p={3}>
         <IconButton sx={{display: 'flex', flexDirection: 'column', fontSize: '14px', color: 'white', mb: 2}} onClick={() => onClickIcon('about')}>
            <AssignmentInd sx={{fontSize: '50px'}} />
            About Me
         </IconButton>
         <IconButton sx={{display: 'flex', flexDirection: 'column', fontSize: '14px', color: 'white', mb: 2}}>
            <FormatListBulleted sx={{fontSize: '50px'}} />
            Skills
         </IconButton>
         <IconButton sx={{display: 'flex', flexDirection: 'column', fontSize: '14px', color: 'white', mb: 2}}>
            <Collections sx={{fontSize: '50px'}} />
            Projects
         </IconButton>
         <IconButton sx={{display: 'flex', flexDirection: 'column', fontSize: '14px', color: 'white'}}>
            <Mail sx={{fontSize: '50px'}} />
            Contact
         </IconButton>
      </Box>
   );
}

export default DesktopIcons;