import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <h1>Hello, my name is Songyee. </h1> 
            <break></break>
            <p> You can call me Song for short!</p>
            
        </Box>
    )
}