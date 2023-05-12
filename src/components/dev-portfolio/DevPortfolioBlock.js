import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import "./DevPortfolio.css";

function DevPortfolioBlock(props) {
   const { img, source, title, body, alt } = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <div className="dev-image-container" width="852vw" height="480vw">
            <img src={img} alt={alt} className="dev-image" />
            <div className="dev-overlay">
               <h2 className="dev-title">{title}</h2>
               <p className="dev-description">{body}</p>
            </div>
         </div>
         <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
            <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
         </Box>
      </Box>
   );
}
/*
<Box component={'img'} src={image} alt={'mockup'}/>
<h1 style={{fontSize: '2rem'}}>{title}</h1>
<Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
     alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
   <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
      <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
   </Box>
   <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
      <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
   </Box>
</Box>
*/
export default DevPortfolioBlock;