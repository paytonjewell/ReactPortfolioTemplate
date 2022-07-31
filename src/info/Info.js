import self from '../img/self.jpg'
import mock1 from '../img/mock1.png'
import mock2 from '../img/mock2.png'
import mock3 from '../img/mock3.png'
import mock4 from '../img/mock4.png'
import mock5 from '../img/mock5.png'

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)']
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
  firstName: 'Jacobit',
  lastName: 'Kashala',
  initials: 'js', // the example uses first and last, but feel free to use three or more if you like.
  position: 'Developer Full Stack ',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // {
    //     emoji: '☕',
    //     text: 'fueled by coffee'
    // },
    {
      emoji: '🌎',
      text: 'Kinshasa',
    },
    {
      emoji: '💼',
      text: 'Full remote ou en présentiel',
    },
    {
      emoji: '📧',
      text: 'jacobitkashala@gmail',
    },
  ],
  socials: [
    {
      link: 'https://web.facebook.com/jacob.kashala/?_rdc=2&_rdr',
      icon: 'fa fa-facebook',
      label: 'facebook',
    },
    {
      link: 'https://www.instagram.com/?hl=fr',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/jacobitkashala',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/jacobit-kashala-4a18631a5/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com/jacobit_akashy',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
    {
        link: 'https://www.pinterest.fr/jacobitkashala/',
        icon: 'fa fa-pinterest',
        label: 'pinterest',
      },
      {
        link: 'https://stackoverflow.com/users/14647869/jacobit-kashala',
        icon: 'fa fa-stack-overflow',
        label: 'stackOverflow',
      },
  ],
  bio:
    "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      'javascript',
      'react',
      'git',
      'github',
      'bootstrap',
      'html5',
      'css3',
      'figma',
    ],
    exposedTo: ['nodejs', 'python', 'adobe illustrator'],
  },
  hobbies: [
    {
      label: 'reading',
      emoji: '📖',
    },
    {
      label: 'theater',
      emoji: '🎭',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
    {
      label: 'cooking',
      emoji: '🌶',
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
  ],
}
