import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";


export default function About() {

   function aboutMeText() {
      return <>
         <p><span className={Style.pink}>paytonpierce $</span> cat aboutpayton </p>
         <p><span className={Style.pink}>aboutpayton <span className={Style.green}>(main)</span> $ </span>
            Hello! I'm Payton, a front-end developer from Wisconsin. I love creating web
            applications with React, and I'm currently studying NodeJS. I've been working for <a
               target={'_blank'} rel={'noreferrer'} href={'https://mathisonprojectsinc.com'}>Mathison
               Projects</a> since July 2021.
         </p>
         <p>I still don't know if it's "front-end",
            "frontend, or "front end", and at this point I'm too afraid to ask.
         </p>
      </>;
   }

   function skillsText() {
      return <>
         <p><span className={Style.pink}>paytonpierce $</span> cd skills/tools</p>
         <p><span className={Style.pink}>skills/tools <span
            className={Style.green}>(main)</span> $</span> ls</p>
         <p className={Style.pink}> Proficient With</p>
         <ul className={Style.skills}>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>Material UI</li>
            <li>Tailwind</li>
            <li>Sass</li>
            <li>Scss Modules</li>
            <li>Git</li>
            <li>Github</li>
            <li>npm</li>
            <li>API Requests</li>
            <li>JSON</li>
            <li>Custom React Hooks</li>
            <li>Jest</li>
            <li>Cypress</li>
            <li>Strapi</li>
         </ul>
         <p className={Style.pink}> Exposed To</p>
         <ul className={Style.skills}>
            <li>Node</li>
            <li>Express</li>
            <li>Vue</li>
            <li>Firebase</li>
            <li>AWS</li>
            <li>Figma</li>
         </ul>
      </>;
   }

   function miscText() {
      return <>
         <p><span className={Style.pink}>paytonpierce $</span> cd hobbies/interests</p>
         <p><span className={Style.pink}>hobbies/interests <span
            className={Style.green}>(main)</span> $</span> ls</p>
         <ul>
            <li><Box component={'span'} mr={'1rem'}>📖</Box>reading</li>
            <li><Box component={'span'} mr={'1rem'}>🎨</Box>digital art</li>
            <li><Box component={'span'} mr={'1rem'}>🎥</Box>movies</li>
            <li><Box component={'span'} mr={'1rem'}>🔮</Box>horror / spooky stuff</li>
            <li><Box component={'span'} mr={'1rem'}>🍲</Box>cooking/food, particularly of the spicy variety
            </li>
         </ul>
      </>;
   }

   return (
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
         <Terminal text={aboutMeText()}/>
         <Terminal text={skillsText()}/>
         <Terminal text={miscText()}/>
      </Box>
   )
}