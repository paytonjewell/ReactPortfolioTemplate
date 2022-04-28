import React from 'react';
import Style from './Home.module.scss';
import me from '../../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";

const bioBullets = [
    {
        link: "https://www.travelwisconsin.com/",
        emoji: "🧀",
        text: "based in wisconsin"
    },
    {
        link: null,
        emoji: "💻",
        text: "react dev at Mathison Projects"
    },
    {
        link: "https://user-images.githubusercontent.com/18350557/94314005-5c9f6e00-ff45-11ea-86a1-5db9e1371750.jpg",
        emoji: "🐱",
        text: "cat mom"
    },
    {
        link: "mailto:paytontaylor96@gmail.com?subject=Let's work on something together!",
        emoji: "✉️",
        text: "paytontaylor96@gmail.com"
    }
];

const socials = [
    {
        link: "https://github.com/paytonjewell",
        icon: "fa fa-github"
    },
    {
        link: "https://www.linkedin.com/in/payton-jewell/",
        icon: "fa fa-linkedin"
    }
]

export default function Home() {

    return (
        <main>
            <img src={me} alt="self" className={classNames(Style.avatar, Style.shadowed)}/>
            <div>
                <h1>Hi, I'm <span className={Style.firstName}>Payton</span> <span className={Style.hand}>🤚</span></h1>
                <h2>I'm a front-end developer.</h2>
                <ul>
                    {bioBullets.map((bio, index) => <EmojiBullet link={bio.link} emoji={bio.emoji} text={bio.text}
                                                                 key={index}/>)}
                </ul>
                <div className={Style.socials}>
                    {socials.map((social, index) => <SocialIcon link={social.link} icon={social.icon} key={index}/>)}
                </div>
            </div>
        </main>
    )
}