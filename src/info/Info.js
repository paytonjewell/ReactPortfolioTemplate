import self from "../img/self.png"
// import self from "/../img/selfie.jpg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"

export let colors = ["rgb(88, 45, 222)", "rgb(34, 182, 157)"];


export const info = {
    firstName: "Songyee",
    lastName: "Han",
    initials: "SH", 
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // 
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕ ',
            text: 'fueled by coffee and pastry'
        },
        {
            emoji: '🌎',
            text: 'Greater New York Area'
        },
        {
            emoji: "💼",
            text: "Currently Open for Work"
        },
        {
            emoji: "📧",
            text: "hansongyee0304@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/SongyeeHan000",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    ],
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    portfolio: [ 
        {
            title: "Oodles",
            live: "https://www.youtube.com/watch?v=ur2uyj7jU3I", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Oodles-App/Oodles-2.0", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1,
            description: "A web and mobile application for restauranteurs and non-profit organizations in NYC to unite and reduce food waste!"
        },
        {
            title: "Kiln Me Softly",
            live: "https://kiln-me-softly.herokuapp.com/home",
            source: "https://github.com/j-sky-graceshopper/kiln-me-softly",
            image: mock2,
            description: "A minimalistic e-commerce web application that allows users to explore and shop for potteries."
        }
    ]
}