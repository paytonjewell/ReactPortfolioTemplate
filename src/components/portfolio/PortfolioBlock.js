import React from 'react';
import Style from "./PortfolioBlock.module.scss";
import Link from "./Link";

function PortfolioBlock(props) {
    const {image, live, source, title} = props;
    return (
        <div className={Style.block}>
            <div className={Style.image}>
                <img src={image} alt={"mockup"}/>
                <div className={Style.links}>
                    <Link link={live} title={"Live Site"} icon={"fa fa-safari"}/>
                    <Link link={source} title={"Source Code"} icon={"fa fa-code"}/>
                </div>
            </div>
            <h1>{title}</h1>
        </div>
    );
}

export default PortfolioBlock;