import React from 'react';
import {Box} from "@mui/material";

function About({show}) {
   return (
      <Box sx={{position: 'absolute', top: 50, left: 150, backgroundColor: 'white', p:6, display: show ? 'block' : 'none'}}>
         <h1>about me</h1>
      </Box>
   );
}

export default About;