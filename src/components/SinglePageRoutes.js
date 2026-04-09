import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";
import React from 'react';
import { Box } from "@mui/material";

export default function SinglePageRoutes({refs}) {
    return (<Box mt={'3rem'}>
        <Home innerRef={refs.refHome}/>
        <About innerRef={refs.refAbout}/>
        <Projects innerRef={refs.refProjects}/>
    </Box>)
}
