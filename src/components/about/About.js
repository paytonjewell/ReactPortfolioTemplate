import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";


export default function About() {

    function aboutMeText() {
        return <>
            <p><span className={Style.pink}>paytonjewell $</span> cat aboutpayton </p>
            <p><span className={Style.pink}>aboutpayton <span className={Style.green}>(master)</span> $ </span>
                Hello! I'm Payton, a front-end developer from Wisconsin. I love creating web
                applications with React, and I'm currently studying unit testing. I've been working for Mathison Projects since July 2021.
            </p>
            <p>I still don't know if it's "front-end",
                "frontend, or "front end", and at this point I'm too afraid to ask.
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span className={Style.pink}>paytonjewell $</span> cd skills/tools</p>
            <p><span className={Style.pink}>skills/tools <span
                className={Style.green}>(master)</span> $</span> ls</p>
            <p className={Style.pink}> Proficient In</p>
            <ul className={Style.skills}>
                <li>Vanilla JS</li>
                <li>React</li>
                <li>DOM Manipulation</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>Sass</li>
                <li>Scss Modules</li>
                <li>Git</li>
                <li>Github</li>
                <li>Phabricator</li>
                <li>Arcanist</li>
                <li>IntelliJ IDEA</li>
                <li>VSCode</li>
                <li>Chrome DevTools</li>
                <li>npm</li>
                <li>API Requests</li>
                <li>JSON</li>
                <li>Custom React Hooks</li>
            </ul>
            <p className={Style.pink}> Exposed To</p>
            <ul className={Style.skills}>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Jest</li>
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span className={Style.pink}>paytonjewell $</span> cd hobbies/interests</p>
            <p><span className={Style.pink}>hobbies/interests <span
                className={Style.green}>(master)</span> $</span> ls</p>
            <ul>
                <li><span className={Style.emoji}>📖</span>reading</li>
                <li><span className={Style.emoji}>🎨</span>digital art</li>
                <li><span className={Style.emoji}>🎥</span>movies</li>
                <li><span className={Style.emoji}>🔮</span>horror / spooky stuff</li>
                <li><span className={Style.emoji}>🍲</span>cooking/food, particularly of the spicy variety</li>
            </ul>
        </>;
    }

    return (
        <div className={Style.main}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </div>
    )
}