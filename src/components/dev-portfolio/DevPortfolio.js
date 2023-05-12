import React from 'react';
import DevPortfolioBlock from "./DevPortfolioBlock";
import OverlayedImage from "../music-portfolio/OverlayedImage";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";
import coverPic from "../../img/whiteboard.png"

export default function DevPortfolio() {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <OverlayedImage
                img={coverPic}
                alt={"Nate in front of a whiteboard"}
                title={"my projects"}
                body={info.devBio}
            />
            <Grid container display={'flex'} justifyContent={'center'} gap={'1.5rem'}>
                {info.devPortfolio.map((project, index) => (
                    <Grid item xs={12} md={5} key={index} columns={2} justifyContent={'center'} display={'flex'}>
                        <DevPortfolioBlock img={project.img} source={project.source} title={project.title} body={project.body} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

