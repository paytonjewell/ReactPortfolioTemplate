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
                    <a href="https://www.travelwisconsin.com/" target="_blank" rel="noopener noreferrer">
                        <li><span aria-label="cheese" role="img" className={Style.emoji}>🧀</span> wisconsin-based</li>
                    </a>
                    <a href="https://github.com/paytonjewell?tab=repositories" target="_blank"
                       rel="noopener noreferrer">
                        <li><span aria-label="computer laptop" role="img" className={Style.emoji}>💻</span> vanilla
                            javascript & react
                        </li>
                    </a>
                    <a href="https://solveandcreate.com/portfolio/ravo/" target="_blank"
                       rel="noopener noreferrer">
                        <li><span aria-label="briefcase" role="img" className={Style.emoji}>💼</span> working front-end
                            at Ravo
                        </li>
                    </a>
                    <a href="https://user-images.githubusercontent.com/18350557/94314005-5c9f6e00-ff45-11ea-86a1-5db9e1371750.jpg"
                       target="_blank"
                       rel="noopener noreferrer">
                        <li><span aria-label="cat" role="img" className={Style.emoji}>🐱</span> cat-lover</li>
                    </a>
                    <a href="mailto:paytontaylor96@gmail.com?subject=Let's work on something together!">
                        <li><span aria-label="envelope" role="img"
                                  className={Style.emoji}>✉️</span> paytontaylor96@gmail.com
                        </li>
                    </a>


                </ul>
                <div className={Style.socials}>
                    <a target="_blank"
                       rel="noopener noreferrer" href="https://github.com/paytonjewell"><i className="fa fa-github"
                                                                                           aria-hidden="true" /></a>
                    <a target="_blank"
                       rel="noopener noreferrer" href="https://www.facebook.com/paytontjewell"><i
                        className="fa fa-facebook" aria-hidden="true"/></a>
                    <a target="_blank"
                       rel="noopener noreferrer" href="https://www.instagram.com/paytontjewell/"><i
                        className="fa fa-instagram"
                        aria-hidden="true"/></a>
                    <a target="_blank"
                       rel="noopener noreferrer" href="https://www.linkedin.com/in/payton-jewell/"><i
                        className="fa fa-linkedin"
                        aria-hidden="true"/></a>
                    <a target="_blank"
                       rel="noopener noreferrer" href="https://twitter.com/paytontjewell"><i className="fa fa-twitter"
                                                                                             aria-hidden="true"/></a>
                </div>
            </div>
        </main>
    )
}