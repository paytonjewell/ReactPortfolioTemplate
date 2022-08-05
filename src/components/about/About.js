import React, { useRef, useEffect, useState } from 'react';
import Style from './About.module.scss';
import { IntroDevWars } from './IntroDevWars';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {Box, Grid, Button} from "@mui/material";
import AboutDescription from './AboutDescription';
import {info} from "../../info/Info";


export default function About({
    onLoad,
    setAbsorver,
    onLeave
}) {
    const audioRef = useRef();
    const [muted, setMuted] = useState(false);
    const [presentDevWars, setPresentDevWars] = useState(false);

    const handleClickDevTributeLink = () => {
        setPresentDevWars(true);
        setAbsorver(false);
    };

    const handleStartAudio = () => {
        audioRef.current.currentTime = 9.1;
        audioRef.current.muted = false;
        audioRef.current.play();
        setMuted(false);
    }

    const handleMuteUnMute = () => {
        setMuted(!muted);
        audioRef.current.muted = muted;
    }  

    const handleSkipAnimation = () => setPresentDevWars(false);

    useEffect(() => {
        onLoad();
        // if (document.referrer === "") { 
        //     setPresentIntro(false); 
        // } 
        return () => onLeave();
    }, []);

    useEffect(() => {
        if (!presentDevWars) {
            setAbsorver(true);
        } else {
            setAbsorver(false);
        }
    }, [presentDevWars]);

    if (presentDevWars) {
        return (
            <Box>
                <audio allow="autoplay" muted="muted" preload="auto" ref={audioRef}>
                    <source src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg" type="audio/ogg" />
                    <source src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3" type="audio/mpeg" />
                </audio>

                <IntroDevWars
                    endIntro={() => setPresentDevWars(false)}
                    handleStartAudio={handleStartAudio}
                    handleControlBtns={() => (
                        <Box className={Style.controllersAnimation}>
                            <Button
                                className={Style.controllersBtn}
                                endIcon={<SkipNextIcon />}
                                onClick={handleSkipAnimation}
                                variant="text" 
                                style={{
                                    color: "white",
                                }}> 
                                Skip
                            </Button>
                            <Button 
                                className={Style.controllersBtn}
                                endIcon={ muted ? (<VolumeOffIcon />) : (<VolumeMuteIcon />)} 
                                onClick={handleMuteUnMute}
                                variant="text"
                                style={{
                                    color: "white",
                                }}
                            >
                            </Button>
                        </Box>)}
                />
            </Box>
        );
    }

    return (
        <AboutDescription linkBtn={handleClickDevTributeLink} />
    );
}