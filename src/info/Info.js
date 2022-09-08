import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(58,207,197), rgb(27,222,86)"];
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
    firstName: "Antti",
    lastName: "Tamminen",
    initials: "at", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Junior Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Helsinki'
        },
        {
            emoji: "💼",
            text: "IT Consultant at Academic Work"
        },
        {
            emoji: "📧",
            text: "antti.a.tamminen@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/AnttiTamminen",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/anttitamminen/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Antti. I'm a working as a IT consultant for Academic Work. I got my MSc (Tech) degree in Aalto University and Full-stack developer knowlege from AW Academy. I enjoy sking, hiking and biking in nature",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'html5', 'css3', 'C#', '.NET'],
            exposedTo: ['python', 'bootstrap', 'Docker', 'Unit testing', 'Entity Framework', 'SQL', 'REST']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'camping',
            emoji: '⛺'
        },
        {
            label: 'brewing',
            emoji: '🌾🍺'
        }

// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "FindIT Webstore",
            source: "https://github.com/AnttiTamminen/FindIt_WebStore", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Learning Diary WebApp",
            source: "https://github.com/AnttiTamminen/LearningDiaryWebApp",
            image: mock2
        },
        {
            title: "Train info ConsoleApp",
            source: "https://github.com/AnttiTamminen/Train_Info_Console_app",
            image: mock3
        },
        {
            title: "Learning Diary ConsoleApp",
            source: "https://github.com/AnttiTamminen/LearningDiaryConsoleApp",
            image: mock4
        },
    ]
}