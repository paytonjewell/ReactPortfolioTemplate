import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

export const info = {
  firstName: "Óscar",
  lastName: "Gallego",
  initials: "OGR",
  position: "a Frontend Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "Powered by coffee",
    },
    {
      emoji: "🌍",
      text: "Located in Spain",
    },
    {
      emoji: "💼",
      text: "Frontend Developer & QA at AddComm",
    },
    {
      emoji: "✉️",
      text: "Email: work@oscargallegoruiz.email",
    },
  ],
  socials: [
    {
      link: "https://github.com/garbarok",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/oscargallegoruiz/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hey there! I'm a junior frontend developer with experience in customer support, currently working in both QA and development. I have a knack for problem-solving and am passionate about creating awesome web experiences for users. I'm always up for learning new things, tackling challenges, and being a part of exciting projects. Let's make the web a better place together!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "html5",
      "css3",
      "Agile methodologies",
      "QA and testing",
    ],
    exposedTo: [
      "Nodejs",
      "next.js",
      "typescript",
      "tailwindcss",
      "Vue.js",
      "SQL",
    ],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "cycling",
      emoji: "🚴🏼",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Weather App",
      stack: "Vue, Vuex, Vue Router, TailwindCSS",
      live: "https://weatherapp.oscargallegoruiz.com/",
      source: "https://github.com/garbarok/weather-app",
      image: mock4,
    },
    {
      title: "Full Stack App",
      stack: "React, Next.js, PostgreSQL, Primsa",
      live: "https://fullstack.garbarok.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/garbarok/fullstack-app", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "AdoptMe (React)",
      stack: "React, Vite",
      live: "https://adopt-me-red.vercel.app/",
      source: "https://github.com/garbarok/AdoptMe",
      image: mock2,
    },
    {
      title: "BlackJack Game",
      stack: "HTML, CSS, JavaScript",
      live: "https://garbarok.github.io/Blackjack-Game/",
      source: "https://github.com/garbarok/Blackjack-Game",
      image: mock3,
    },
  ],
};
