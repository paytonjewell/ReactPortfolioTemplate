import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import classNames from 'classnames';
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleClick() {
      setDarkMode(!darkMode);
   }

   return (
      <Box className={classNames(Style.container, darkMode ? Style.dark : Style.light)}>
         <Navbar darkMode={darkMode} handleClick={handleClick}/>
         <Routes>
            <Route exact path={'/'} element={<Home/>}/>
            <Route exact path={'/about'} element={<About/>}/>
            <Route exact path={'/portfolio'} element={<Portfolio/>}/>
         </Routes>
         <footer>
            <p>Made with &hearts; by Payton Pierce</p>
            <p>&copy; 2022</p>
         </footer>
      </Box>
   )
}

