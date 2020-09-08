import React from 'react';
import Style from './Portfolio.module.scss';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';
import mock3 from '../img/mock3.png';
import mock4 from '../img/mock4.png';


export default function Portfolio() {
    return (
       <main>
           <div className={Style.projectsGrid}>
            <div className={Style.block}>
                <a href="https://paytonjewell.github.io/"> <img src={mock1} alt="portfolio site mockup"/></a>
                <h1>Personal Website</h1>
                <a href="https://github.com/paytonjewell/paytonjewell.github.io" className={Style.source}>Source Code</a>
            </div>
               <div className={Style.block}>
                   <a href="https://paytonjewell.github.io/Analog-Clock-With-Darkmode-Toggle/"><img src={mock2} alt="Analog Clock mockup"/></a>
                   <h1>Analog Clock with Dark Mode Toggle</h1>
                   <a href="https://github.com/paytonjewell/Analog-Clock-With-Darkmode-Toggle" className={Style.source}>Source
                       Code</a>
               </div>
               <div className={Style.block}>
                   <a href="https://paytonjewell.github.io/To-Do-List/"><img src={mock3} alt="To Do List mockup" /></a>
                   <h1>To-Do List</h1>
                   <a href="https://github.com/paytonjewell/To-Do-List" className={Style.source}>Source Code</a>
               </div>
               <div className={Style.block}>
                   <a href="https://paytonjewell.github.io/gradient-generator/"><img src={mock4} alt="Gradient Generator mockup" /></a>
                   <h1>Gradient Generator</h1>
                   <a href="https://github.com/paytonjewell/gradient-generator" className={Style.source}>Source Code</a>
               </div>
           </div>
       </main>
    );
};