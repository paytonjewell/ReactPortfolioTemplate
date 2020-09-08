import React from 'react';
import Style from './About.module.scss';
import classNames from 'classnames';


export default function About() {
    const iconClass = "fa fa-circle";
    return (
        <div className={Style.about}>
            <div className={classNames(Style.terminal, Style.shadowed)}>
                <div className={Style.topRow}>
                    <i className={classNames(iconClass, Style.red)}/>
                    <i className={classNames(iconClass, Style.amber)}/>
                    <i className={classNames(iconClass, Style.green)}/>
                </div>
                <div className={Style.window}>
                    <p><span className={Style.pink}>paytonjewell $</span> cat aboutpayton </p>
                    <p><span className={Style.pink}>aboutpayton <span className={Style.green}>(master)</span> $ </span>
                        Hello! I'm Payton, a front-end developer from Wisconsin. I love creating single-page
                        applications with React, and I'm currently studying NodeJS. I am passionate about performance
                        and accessibility, and I want to build personal productivity tools that will aid everyone, as
                        well as tools aimed at fellow developers.
                    </p>
                    <div className={Style.button}>
                        <a href="#bot"><i className="fa fa-angle-double-down" aria-hidden="true" /></a>
                    </div>
                </div>
            </div>

            <div id="bot" className={classNames(Style.terminal, Style.shadowed)}>
                <div className={Style.topRow}>
                    <i className={classNames(iconClass, Style.red)}/>
                    <i className={classNames(iconClass, Style.amber)}/>
                    <i className={classNames(iconClass, Style.green)}/>
                </div>
                <div className={Style.window}>
                    <p><span className={Style.pink}>paytonjewell $</span> cd hobbies/interests</p>
                    <p><span className={Style.pink}>hobbies/interests <span className={Style.green}>(master)</span> $</span> ls</p>
                    <ul>
                        <li><span className={Style.emoji}>📖</span>reading</li>
                        <li><span className={Style.emoji}>🎨</span>digital art</li>
                        <li><span className={Style.emoji}>🎥</span>movies</li>
                        <li><span className={Style.emoji}>🔮</span>horror / spooky stuff</li>
                        <li><span className={Style.emoji}>🍲</span>cooking/food, particularly of the spicy variety</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}