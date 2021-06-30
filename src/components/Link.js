import React from 'react';
import Style from "./PortfolioBlock.module.scss";

function Link(props) {
    const {link, title, icon} = props;
    return (
        <a className={Style.liveSite} href={link} target={"_blank"} rel="noopener noreferrer">
            <i className={icon} /> {title}
        </a>
    );
}

export default Link;