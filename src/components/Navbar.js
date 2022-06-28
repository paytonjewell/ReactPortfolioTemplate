import React, {useState} from 'react';
import logo from '../img/logo.png';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link} from "react-router-dom";

export default function Navbar({darkMode, handleClick, changeMain}) {
    const [active, setActive] = useState("home");

    return (
        <nav className={active !== "home" && Style.fixed}>
            <ul className={Style.navList}>
                <Link to={'/'} onClick={() => setActive('home')}>
                    <li className={active === "home" && Style.active}><p>Home</p></li>
                </Link>
                <Link to={'/about'} onClick={() => setActive('about')}>
                    <li className={active === "about" && Style.active}><p>About Me</p></li>
                </Link>
                <li><img alt={"logo"} src={logo}/></li>
                <Link to={'/portfolio'} onClick={() => setActive('portfolio')}>
                    <li className={active === "portfolio" && Style.active}><p>Portfolio</p></li>
                </Link>
                <Toggler darkMode={darkMode} handleClick={handleClick}/>
            </ul>
        </nav>
    )
}