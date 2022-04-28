import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import classNames from 'classnames';
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Switch} from "react-router-dom";

export default function BaseLayout() {
    let [darkMode, setDarkMode] = useState(false);

    function handleClick() {
        setDarkMode(!darkMode);
    }

    return (
        <div className={classNames(Style.container, darkMode ? Style.dark : Style.light)} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
           <h1>under construction... :)</h1>
            {/*<Navbar darkMode={darkMode} handleClick={handleClick}/>*/}
            {/*<Switch>*/}
            {/*    <Route exact path={'/'}>*/}
            {/*        <Home/>*/}
            {/*    </Route>*/}
            {/*    <Route exact path={'/about'}>*/}
            {/*        <About/>*/}
            {/*    </Route>*/}
            {/*    <Route exact path={'/portfolio'}>*/}
            {/*        <Portfolio/>*/}
            {/*    </Route>*/}
            {/*</Switch>*/}
            {/*<footer>*/}
            {/*    <p>Made with &hearts; by Payton Jewell</p>*/}
            {/*    <p>&copy; 2021</p>*/}
            {/*</footer>*/}
        </div>
    )
}

