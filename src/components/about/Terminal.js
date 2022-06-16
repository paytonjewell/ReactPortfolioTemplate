import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";

const iconClass = "fa fa-circle";

function Terminal(props) {
    const {text} = props;

    return (
        <section className={classNames(Style.terminal, Style.shadowed)}>
            <div className={Style.topRow}>
                <i className={classNames(iconClass, Style.red)}/>
                <i className={classNames(iconClass, Style.amber)}/>
                <i className={classNames(iconClass, Style.green)}/>
            </div>
            <div className={Style.window}>
                {text}
            </div>
        </section>
    );
}

export default Terminal;