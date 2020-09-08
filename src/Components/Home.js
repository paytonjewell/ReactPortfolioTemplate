import React from 'react';
import Style from './Home.module.scss';
import me from '../img/me2.png';
import classNames from 'classnames';

export default function Home() {
    return (
        <main>
            <img src={me} alt="self" className={classNames(Style.avatar, Style.shadowed)}/>
            <div className={Style.mainText}>
                <h1>Hi, I'm <span className={Style.firstName}>Payton</span> 👋🏻</h1>
                <h2>I'm a front-end developer.</h2>
                <ul>
                    <li><span aria-label="cheese" role="img" className={Style.emoji}>🧀</span> wisconsin-based</li>
                    <li><span aria-label="computer laptop" role="img" className={Style.emoji}>💻</span> vanilla javascript & react</li>
                    <li><span aria-label="briefcase" role="img" className={Style.emoji}>💼</span> currently working front-end at Ravo</li>
                    <li><span aria-label="cat" role="img" className={Style.emoji}>🐱</span> cat-lover</li>
                    <li><span aria-label="envelope" role="img" className={Style.emoji}>✉️</span> paytontaylor96@gmail.com</li>
                </ul>
                <div className={Style.socials}>
                    <a href="https://www.facebook.com/paytontjewell"><i className="fa fa-facebook" aria-hidden="true" /></a>
                    <a href="https://www.instagram.com/paytontjewell/"><i className="fa fa-instagram" aria-hidden="true" /></a>
                    <a href="https://www.linkedin.com/in/payton-jewell/"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                    <a href="https://medium.com/@paytonjewell"><i className="fa fa-medium" aria-hidden="true" /></a>
                    <a href="https://twitter.com/paytontjewell"><i className="fa fa-twitter" aria-hidden="true" /></a>
                </div>
            </div>
        </main>
    )
}