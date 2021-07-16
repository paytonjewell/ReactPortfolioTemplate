import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import classNames from 'classnames';
import Navbar from "./Navbar";
import {Switch, Route, useLocation} from 'react-router-dom';
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";

export default function BaseLayout() {
    let [darkMode, setDarkMode] = useState(false);
    const location = useLocation();
    const path = location.pathname;

    function handleClick() {
        darkMode ? setDarkMode(false) : setDarkMode(true);
    }

    return (
        <div className={classNames(Style.container, darkMode ? Style.dark : Style.light)}>
            <Navbar darkMode={darkMode} handleClick={handleClick} path={path} />
            <Main />
            <footer>
                <p>Made with &hearts; by Payton Jewell</p>
                <p>&copy; 2021</p>
            </footer>
        </div>
    )
}

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
    </Switch>
);