import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import {Box} from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal(props) {
   const {text} = props;

   return (
      <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
           width={{xs: '88%', md: '62%'}} borderRadius={'1rem'} mb={'4rem'}>
         <Box sx={{background: 'linear-gradient(90deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06))'}} p={'0.65rem'} borderRadius={'1rem 1rem 0 0'}
              fontSize={'1rem'}>
            <i className={classNames(iconClass, Style.red)}/>
            <i className={classNames(iconClass, Style.amber)}/>
            <i className={classNames(iconClass, Style.green)}/>
         </Box>
         <Box py={{xs: '1rem', md: '2rem'}} px={{xs: '2rem', md: '3rem'}} borderRadius={'0 0 0.5rem 0.5rem'}
              sx={{background: 'linear-gradient(180deg, #17202b 0%, #101720 100%)'}} fontSize={{xs: '1.1rem', md: '1.35rem'}} fontFamily={'IBM Plex Mono, Courier New, Courier, monospace'}>
            {text}
         </Box>
      </Box>
   );
}

export default Terminal;
