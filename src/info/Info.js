import self from '../img/self.jpg'
import laKinoise from '../img/la_kinoise.png'
import ndule from '../img/ndule.png'
import mock3 from '../img/mock3.png'
import mock4 from '../img/mock4.png'
import mock5 from '../img/mock5.png'

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)']

export const info = {
  firstName: 'Jacobit',
  lastName: 'Kashala',
  initials: 'js',
  position: 'Developer Full Stack ',
  selfPortrait: self,
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
    "Analyste et développeur full stack, doté de cinq ans d'expérience dans le monde de développement, ayant un esprit d’analyse , une certaine rigueur et la capacité de s ‘adapter, je suis capable de définir l’expression de besoin réaliser une maquette puis implémenter l’application.",
  skills: {
    proficientWith: [
      'Java',
      'Javascript',
      'reactJs',
      'git',
      'Bootstrap',
      'html5',
      'Saas',
      'figma',
      'Asana',
      'Sql',
      'Material ui',
      'Slack',
    ].sort(),
    exposedTo: ['nodejs full rest'],
  },
  hobbies: [
    {
      label: 'Scrum',
      emoji: '📖',
    },
    {
      label: 'Séquentielles',
      emoji: '🎭',
    },
    {
      label: 'Travail en équipe',
      emoji: '🎥',
    },
    // {
    //   label: 'cooking',
    //   emoji: '🌶',
    // },
  ],
  portfolio: [
    {
      title: 'La kinoise & moi',
      image: laKinoise,
      techno: ['Javascrip', 'ReactJs Pwa', 'StrapiJs'],
      description:
        "Mise en place d'un dashboard pour la gestion de production et de vente de café.",
    },
    {
      title: 'D-ndule',
      image: ndule,
      techno: ['Javascrip', 'ReactJs', 'Nodejs'],
      description: 'Lorem Lorem u ipsum',
    },
    // {
    //   title: 'Project 3',
    //   image: mock3,
    //   techno: ['Javascrip', 'ReactJs Pwa', 'Strapijs'],
    //   description: 'Lorem Lorem u ipsum',
    // },
    // {
    //   title: 'Project 4',
    //   image: mock4,
    //   techno: ['Javascrip', 'Reactj Pwa', 'Strapijs'],
    //   description: 'Lorem Lorem u ipsum',
    // },
    {
      title: 'Clone ciné',
      image: mock5,
      techno: ['Javascript', 'ReactJs', 'Movie database API'],
      description: 'Lorem Lorem u ipsum',
    },
  ],
}
