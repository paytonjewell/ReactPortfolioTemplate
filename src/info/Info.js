import self from '../img/self.png';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';
import mock3 from '../img/mock3.png';
import mock4 from '../img/mock4.png';
import mock5 from '../img/mock5.png';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['#ffbd2e', '#f5564d'];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: 'James ',
  lastName: 'Thanawat',
  //initials: `< JMDEV />`, // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Front-end Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(360deg, ${colors})`, // don't change this either
  baseColor: colors[1],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🌎',
      text: 'Based in Phuket / Thailand.',
    },
    {
      emoji: '☕',
      text: 'Dev and Music Lover.',
    },
    {
      emoji: '📧',
      text: 'james_web.dev@outlook.com',
      // text: 'jamesz_duckveloper@hotmail.com',
    },
    {
      emoji: '🔗',
      // <img
      //   src={FEM}
      //   alt='Frontend Mentor'
      //   style={{ width: '2.125rem', height: '2.125rem', margin: '0 .25rem 0 0.25rem' }}
      // />
      text: (
        <a href='https://www.frontendmentor.io/profile/NaiJamesz'>
          <strong>Frontend Mentor.</strong>
        </a>
      ),
    },
  ],
  socials: [
    {
      link: 'https://facebook.com/naijamesz',
      icon: 'fa fa-facebook',
      label: 'facebook',
    },
    {
      link: 'https://instagram.com/naijamesz',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/naijamesz',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://linkedin.com/in/thanawat-sanguanporn-373107198',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com/nai_jameszix',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio:
    `Hello! I’m a self-taught learning developer, i loves exploring different technologies about frontend projects with the use React ecosystem. already eager to learn new things from technology updates and news.and all ready to be part of a team and collaborate using Git version control to embrace new technological updates and enhance my development career. I believe that using open source or even co-developing it can greatly improve your skills and experience as a web developer and artificial intelligence is a tool for developers like us. ` +
    `"Never stop learning & Never stop practice coding."`,
  skills: {
    proficientWith: [
      'javascript',
      'typescript',
      'react',
      'redux',
      'html5',
      'css3',
      'git',
      'github',
      'tailwindcss',
      'bootstrap',
      'sass',
      'bulma',
      'next',
      'express',
      'mongodb',
    ],

    tools: ['nodejs', 'netlify', 'vscode', 'vercel', 'figma', 'Postman'],
  },

  hobbies: [
    {
      label: 'reading',
      emoji: '📖',
    },
    {
      label: 'coding',
      emoji: '💻',
    },
    {
      label: 'listening to music',
      emoji: '🎧',
    },
    {
      label: 'exploring new technologies',
      emoji: '🔭',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: 'Project 1',
      live: 'https://paytonpierce.dev', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/paytonjewell', // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: 'Project 2',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      image: mock2,
    },
    {
      title: 'Project 3',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      image: mock3,
    },
    {
      title: 'Project 4',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      image: mock4,
    },
    {
      title: 'Project 5',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      image: mock5,
    },
    {
      title: 'Project 6',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      image: mock5,
    },
    {
      title: 'Project 7',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      image: mock5,
    },
    {
      title: 'Project 8',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      image: mock5,
    },
    {
      title: 'Project 9',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      image: mock5,
    },
  ],
};

