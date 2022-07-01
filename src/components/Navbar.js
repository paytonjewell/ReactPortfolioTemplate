import React, {useState} from 'react';
import logo from '../img/logo.png';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";

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
      image: logo,
      to: '/',
      active: 'home'
   },
   {
      name: 'Portfolio',
      to: '/portfolio',
      active: 'portfolio'
   }
]

export default function Navbar({darkMode, handleClick}) {
   const location = useLocation()
   const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

   return (
      <Box component={'nav'} width={'100%'}>
         <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
              gap={{xs: '2rem', md: '8rem'}}
              textTransform={'lowercase'} fontSize={'1rem'}>
            {links.map(link => (
               <Link to={link.to} onClick={() => setActive(link.active)}>
                  <li className={(link.active === active && !link.image) && Style.active}>
                     {link.name && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
                     {link.image && <img alt={''} src={link.image} style={{maxWidth: '75px'}}/>}
                  </li>
               </Link>
            ))}
            <Toggler darkMode={darkMode} handleClick={handleClick}/>
         </Box>
      </Box>
   )
}