import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";

import {info} from "../info/Info";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: 'Skills',
        to: '/skills',
        active: 'skills'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    }
]


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} in={!trigger}>
        {children}
      </Slide>
    );
}

export default function ElevateNavBar({
    darkMode, 
    handleClick, 
    ...otherProps
}) {
    const location = useLocation()
    const [active, setActive] = useState(
        location.pathname === '/' 
            ? 'home' 
            : location.pathname.slice(1, location.pathname.length)
        );

        const handleCreateLink = (link, index) => (
            <Box 
                key={index} 
                component={'li'} 
                className={(link.active === active && !link.type) && Style.active}
                sx={{borderImageSource: info.gradient}}
            >
                <Link 
                    to={link.to} 
                    onClick={() => setActive(link.active)}
                >
                    {!link.type && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
                    {link.type && <h1>{link.name}</h1>}
                </Link>
            </Box>
        );

    return (
    <React.Fragment>
        <ElevationScroll {...otherProps}>
            <AppBar color='transparent'>
                <Toolbar sx={{display: 'flex', justifyContent: 'center'}}>
                    <Box 
                        component={'ul'} 
                        display={'flex'} 
                        justifyContent={'center'} 
                        alignItems={'center'}
                        gap={{xs: '2rem', md: '8rem'}}
                        textTransform={'lowercase'} fontSize={'1rem'}
                    >
                        {links.map(handleCreateLink)}
                        <li>
                            <Toggler darkMode={darkMode} handleClick={handleClick}/>
                        </li>
                    </Box>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <Toolbar />
    </React.Fragment>
    );
}
