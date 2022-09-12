import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import { info } from '../../info/Info';

function PortfolioBlock({image, live, source, title, description} ) {
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem', color: info.baseColor}}>{title}</h1>
         <p style={{fontSize: '1.25rem', textAlign: 'center', width: "75%", marginTop: "0.75rem"}}>{description}</p>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.75rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            { live !== "" &&
               <Box p={1} border={'1px solid black'} borderRadius={'20px'}>
                  <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
               </Box>
            }
            { source !== "" &&

               <Box p={1} border={'1px solid black'} borderRadius={'20px'}>
                  <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
               </Box>
            }
         </Box>
      </Box>
   );
}

export default PortfolioBlock;