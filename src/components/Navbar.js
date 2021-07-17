import React, {useState} from 'react';
import logo from '../img/logo.svg';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";

export default function Navbar({darkMode, handleClick, changeMain}) {
    const [active, setActive] = useState("home");

    const onChangeMain = (path) => {
        changeMain(path)
        setActive(path)
    }

    return (
        <nav className={active !== "home" && Style.fixed}>
            <ul className={Style.navList}>
                <li onClick={() => onChangeMain("home")} className={active === "home" && Style.active}><p>Home</p></li>
                <li onClick={() => onChangeMain("about")} className={active === "about" && Style.active}><p>About Me</p></li>
                <li onClick={() => onChangeMain("home")}><img alt={"logo"} src={logo} /></li>
                <li onClick={() => onChangeMain("portfolio")} className={active === "portfolio" && Style.active}><p>Portfolio</p></li>
                <Toggler darkMode={darkMode} handleClick={handleClick}/>
            </ul>
        </nav>
    )
}