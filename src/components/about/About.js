import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <h1>About Me</h1> 
            <br />
            <p style={{textAlign:"center", marginTop: "2%", marginLeft: "25%", marginRight:"25%", lineHeight: "2"}}>
            hello
            </p>

            
            
        </Box>
    )
}