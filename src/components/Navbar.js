import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from './home/Toggler';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { info } from '../info/Info';

const links = [
  {
    name: 'Home',
    to: '/',
    active: 'home',
  },
  {
    name: 'About Me',
    to: '/about',
    active: 'about',
  },
  // {
  //   name: info.initials,
  //   type: 'initials',
  //   to: '/',
  //   active: 'home',
  // },
  {
    name: 'Portfolio',
    to: '/portfolio',
    active: 'portfolio',
  },
];

export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length)
  );

  return (
    <Box component={'nav'} width={'100%'}>
      <Box
        component={'ul'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
        mt={{ xs: '.5rem', sm: '.375rem', md: '0rem' }}
        gap={{ xs: '2.125rem', sm: '4rem', md: '12rem', justifyContent: 'center' }}
        textTransform={'capitalize'}
        fontSize={{ xs: '.75rem', sm: '1rem', md: '1.25rem' }}>
        {links.map((link, index) => (
          <Box
            key={index}
            component={'li'}
            className={link.active === active && !link.type && Style.active}
            sx={{ borderImageSource: info.gradient }}>
            <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
              {!link.type && <p style={{ margin: '0rem 0rem' }}>{link.name}</p>}
              {link.type && <h1>{link.name}</h1>}
            </Link>
          </Box>
        ))}
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}

