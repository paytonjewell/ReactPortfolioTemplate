import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <h1>Hello, my name is Songyee. </h1> 
            <h2> You can call me Song for short!</h2>
            <br />
            <p style={{textAlign:"center", marginTop: "5%", marginLeft: "25%", marginRight:"25%", lineHeight: "2"}}>Prior to my shift to become a software engineer, I was a musician for about 8 years who focused on both being a teacher and a performer. It wasn’t until the pandemic when I decided to attend Grace Hopper Program to learn code so I can create more technologies to help the communities around me. Grace Hopper taught me the fundamentals of how websites are created and replicated an environment that I would encounter at work by working on multiple projects as a pair or a group to practice communicating ideas and concepts. During projects, I was able to use skills from my previous job to communicate with others and use my creativity to envision projects. The projects also allowed me to explore and learn how to research through documents about a new technology or library that I plan to implement. Communication and being open to ideas are key to build amazing projects, but I also look forward to learn from other colleagues to become a better software engineer.
</p>
            
        </Box>
    )
}