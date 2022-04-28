import React from 'react';
import Style from './Toggler.module.scss';

export default function Toggler({darkMode, handleClick}) {


    return (
        <div className={Style.toggler} onClick={handleClick}>
            {darkMode ? <span aria-label="Full Moon" role="img">🌕</span> : <span aria-label="New Moon" role="img">🌑</span>}
        </div>
    )
}