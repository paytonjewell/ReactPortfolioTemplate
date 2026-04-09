import React from 'react';
import ProjectsBlock from "./ProjectsBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Projects({innerRef}) {
    return (
        <Box id={'projects'} ref={innerRef} px={{xs: '1.5rem', md: '3rem'}} py={{xs: '1rem', md: '2rem'}}>
            <Grid container display={'flex'} justifyContent={'center'} spacing={4}>
                {info.projects.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <ProjectsBlock image={project.image} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};
