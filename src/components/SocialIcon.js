import React from 'react';

function SocialIcon(props) {
    const {link, icon} = props;
    return (
        <a target="_blank"
           rel="noopener noreferrer" href={link}>
            <i className={icon} aria-hidden="true"/>
        </a>
    );
}

export default SocialIcon;