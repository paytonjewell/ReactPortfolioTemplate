import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../img/logo.svg';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import classNames from 'classnames';

export default function Navbar({darkMode, handleClick, path}) {
    const active = {
        borderBottom: "5px solid",
        borderImageSource: "linear-gradient(to right, #8d53ff, #ca6be6",
        borderImageSlice: 1
    }
    return (
        <nav className={path !== "/" && Style.fixed}>
            <ul className={Style.navList}>
                <li><NavLink exact activeClassName="current" to='/' activeStyle={active}>Home</NavLink></li>
                <li><NavLink exact activeClassName="current" to='/about' activeStyle={active}>About Me</NavLink></li>
                <li><NavLink exact activeClassName="none" to='/'><img className={Style.none} alt="logo" src={logo} /></NavLink></li>
                <li><NavLink exact activeClassName="current" to='/portfolio' activeStyle={active}>Portfolio</NavLink></li>
                <Toggler darkMode={darkMode} handleClick={handleClick}/>
            </ul>
        </nav>
    )
}