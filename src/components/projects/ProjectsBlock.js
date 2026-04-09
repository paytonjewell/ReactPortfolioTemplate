import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function ProjectsBlock(props) {
   const {image, source, title} = props;

   return (
      <Box
         display={'flex'}
         flexDirection={'column'}
         justifyContent={'center'}
         alignItems={'center'}
         height={'100%'}
         p={{xs: '1.2rem', md: '1.6rem'}}
         border={'1px solid rgba(31,31,31,0.08)'}
         borderRadius={'32px'}
         sx={{
            boxShadow: '0 24px 50px rgba(31,31,31,0.08)'
         }}
      >
         <Box component={'img'} src={image} alt={'mockup'} borderRadius={'22px'} mb={'1.5rem'}/>
         <h1 style={{fontSize: '1.8rem', textAlign: 'center', marginBottom: '0.25rem'}}>{title}</h1>
         <Box
            className={'projects'}
            display={'flex'}
            flexDirection={'column'}
            gap={'0.5rem'}
            alignItems={'center'}
            fontSize={'1.05rem'}
            py={'1.5rem'}
         >
            <Box
               p={'0.9rem 1.2rem'}
               border={'1px solid rgba(31,31,31,0.12)'}
               borderRadius={'999px'}
               sx={{background: 'linear-gradient(90deg, rgba(10,147,150,0.12), rgba(238,155,0,0.18))'}}
            >
               <IconLink link={source} title={'View Repository'} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default ProjectsBlock;
