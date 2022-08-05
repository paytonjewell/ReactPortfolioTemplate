import React, { useRef, useEffect, useState } from 'react';
import Style from './IntroDevWars.module.scss';
import { Box } from "@mui/material";
import { gsap, Power0 } from "gsap";

export const IntroDevWars = ({
    endIntro,
    handleStartAudio,
    handleControlBtns
}) => {
    const tl = useRef();
    const logoRef = useRef();
    const introRef = useRef();
    const contentRef = useRef();
    const btnStartRef = useRef();


    useEffect(() => {
        gsap.ticker.lagSmoothing(false);

        tl.current = gsap.timeline()
            .to(btnStartRef.current, { duration: 1, opacity: 0})
            .to(introRef.current, { duration: 4.5, delay: 1, opacity: 1 })
            .to(introRef.current, { 
                duration: 1.5, 
                delay: 5.5, 
                opacity: 0, 
                onCompleteParams: [true], 
                onComplete: handleStartAudio  
            })
            .set(logoRef.current, { opacity: 1, scale: 3.75 })
            .to(logoRef.current, { 
                scale: 0.05, 
                ease: Power0.easeOut,
                duration: 8
            })
            .to(logoRef.current, { duration: 2.0, opacity: 0 }, "-=1.5")
            .to(contentRef.current, { duration: 40, top: "40%" })
            .to(contentRef.current, { 
                duration: 1.5, 
                opacity: 0,
                onComplete: () => endIntro(true)
            });

            // tl.current.lagSmoothing(0);

        return () => {
            tl.current.restart();
            tl.current.pause();
        }
    }, []);

    return (
        <Box className={Style.container}>
            {handleControlBtns()}
            <section className={Style.intro} ref={introRef}>
                <p>
                    A long time ago, in a aws server close,<br /> close by....
                </p>
            </section>

            <section className={Style.logo} ref={logoRef}>
                <div>DEV</div>
                <div>WARS</div>
            </section>

            <section className={Style.crawl}>
                <div className={Style.content} ref={contentRef}>
                    <h1 className={Style.title}>Episode 5</h1>
                    <h2 className={Style.subtitle}>THE BUG STRIKES BACK</h2>
                    <p>
                        It is a dark time for the Developers. Although the The project is not a MVP anymore, Imperial functional bugs have driven the developers from their hidden base and pursued them across the Teams.
                    </p>
                    <p>
                        Evading the dreaded Imperial Production Bug, a group of Developers led by Igor have established a new secret base on the remote world of the ELK.
                    </p>
                    <p>
                        The PO, worried with finding Igor, has dispatched couple of remote calls into the far reaches of Igor's calendar on Teams....
                    </p>
                </div>
            </section>
        </Box>
    )
}
