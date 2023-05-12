import React from 'react';
import MusicPortfolioBlock from "./MusicPortfolioBlock";
import Style from './Portfolio.module.scss';
import Terminal from "./Terminal";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";
import coverPic from "../../img/Maxwells.png"
import OverlayedImage from "./OverlayedImage";
import YoutubeEmbed from "./YoutubeEmbed";

export default function MusicPortfolio() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{ color: info.baseColor }}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <OverlayedImage
                img={coverPic}
                alt={"Nate on stage at Maxwell's"}
                title={"my music"}
                body={info.musicBio}
            />
            <Grid container display={'flex'} justifyContent={'center'} gap={'1.5rem'} >
                {info.musicPortfolio.map((song, index) => (
                    <Grid item xs={12} md={4} key={index} columns={2} justifyContent={'center'} display={'flex'}>
                        <div className="App">
                            <h2>{song.title}</h2>
                            <YoutubeEmbed embedId={song.source} />
                        </div>
                    </Grid>

                ))}
            </Grid>
        </Box>
        /*
        <Terminal text={aboutMeText()} />
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                 <Box component={'ul'} p={'2.0rem'}>
                    <h1><span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>my music</span></h1>
                    <Box component={'img'} src={coverPic} alt={"Me on stage at Maxwell's"}></Box>
                    <body style={{fontSize: "large", fontFamily: "Roboto"}}><p>
                        I first picked up a guitar when I was seven years old, waiting patiently in the showroom of Jim’s Music Store while my sister completed her lessons. Immediately I knew that this would be a lifelong obsession and outlet for me, no matter what other ventures I pursued (though my seven-year-old thought was probably closer to “hey this is pretty cool!”).<br></br>
                        My formal training progressed through the Royal Conservatory of Music, through which I completed my grade 8 exam in classical guitar before transitioning my focus to folk, blues, and rock styles. It was around this time that I developed an interest in songwriting, inspired by the ramblings and rhymes of Bob Dylan, Mark Knofler, and many others.<br></br>
                        These days, my time is split between writing and producing my solo projects, drumming for my band Three By Seven, and playing cover shows in establishments around Southern Ontario. Below you will find the results of some of these pursuits!
                    </p></body>
                 </Box>
            </Grid>
        </Box>*/
    );
};
 /* {info.portfolio.map((project, index) => (
           <Grid item xs={12} md={6} key={index}>
               <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
           </Grid>
        ))}*/