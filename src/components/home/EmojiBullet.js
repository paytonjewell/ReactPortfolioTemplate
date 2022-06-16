import React from 'react';
import Style from "./Home.module.scss";

function EmojiBullet(props) {
    const {link, emoji, text} = props;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <li><span aria-label="cheese" role="img" className={Style.emoji}>{emoji}</span> {text}</li>
        </a>
    );
}

export default EmojiBullet;