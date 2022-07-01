import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";

const bioBullets = [
   {
      link: "https://www.travelwisconsin.com/",
      emoji: "🧀",
      text: "based in wisconsin"
   },
   {
      link: null,
      emoji: "💻",
      text: "software developer at mathison projects"
   },
   {
      link: "https://user-images.githubusercontent.com/18350557/94314005-5c9f6e00-ff45-11ea-86a1-5db9e1371750.jpg",
      emoji: "🐈",
      text: "cat mom"
   },
   {
      link: "mailto:paytontaylor96@gmail.com?subject=Let's work on something together!",
      emoji: "✉️",
      text: "let's get in touch!"
   }
];

const socials = [
   {
      link: "https://github.com/paytonjewell",
      icon: "fa fa-github"
   },
   {
      link: "www.linkedin.com/in/payton-pierce",
      icon: "fa fa-linkedin"
   },
   {
      link: 'https://twitter.com/paytoncodes',
      icon: "fa fa-twitter"
   }
]

export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span className={Style.firstName}>Payton</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm a front-end developer.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {bioBullets.map(bio => (
                  <EmojiBullet link={bio.link} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {socials.map(social => (
                  <SocialIcon link={social.link} icon={social.icon} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}