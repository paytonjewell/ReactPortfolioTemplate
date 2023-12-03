import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
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
    firstName: "Gabriela",
    lastName: "caballero",
    initials: "GC", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Product leader",
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
            text: 'Argentinian currently based in the UK'
        },
        {
            emoji: "💼",
            text: "Product Manager at Google"
        },
        {
            emoji: "📧",
            text: "lmgabrielac@gmail.com"
        }
    ],
    socials: [
        
        {
            link: "https://www.instagram.com/gabrielacaballer/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/GabrielaCaballero",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/gabrielacaballero/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/CGabriela66",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Argentinian at heart, embracing the world's diversity. My endless curiosity and tech passion fuel my role as a product manager, solving problems obsessively.",
    skills:
        {
            proficientWith: ['strategic planning', 'problem-solving', 'UX/UI', 'system design', 'data analysis', 'ML', 'figma'],
            exposedTo: ['roadmap definition', 'launching big projects', 'strategic thinking']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'Photos and videos',
            emoji: '🎥'
        },
        {
            label: 'hiking and nature',
            emoji: '🌄'
        },
        {
            label: 'dancing',
            emoji: '💃'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "My path to Google",
            live: "https://www.youtube.com/watch?v=7TF6DWTW6jg&t=1s", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            image: mock1
        },
        {
            title: "Beyond Software Engineering",
            live: "https://careersonair.withgoogle.com/events/beyond-swe",
            image: mock2
        },
        {
            title: "Explorando el universo de los datos",
            live: "https://paytonpierce.dev",
            image: mock3
        },
        {
            title: "Futuros lideres en tecnologia",
            live: "https://www.youtube.com/live/9wEfFLcN14E?si=cR7wfLbXC7eYB6V8",
            image: mock4
        },
        {
            title: "Sobremesa: hablamos de emigrar",
            live: "https://careersonair.withgoogle.com/events/taller-de-proyectos-personales",
            image: mock5
        }
    ]
}