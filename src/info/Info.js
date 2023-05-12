import self from "../img/self.png"
import AudioToys from "../img/AudioToys.png"
import MidiFootController from "../img/MidiFootController.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(91, 61, 69)", "rgb(80, 168, 187)"];
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
    firstName: "Nate.",
    lastName: "Savoy",
    initials: "NS", // the example uses first and last, but feel free to use three or more if you like.
    position: "Musician // Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌿',
            text: 'passion for bringing new ideas to life - no matter the domain'
        },
        {
            emoji: '🎓',
            text: 'B.S. Honours Mathematical Physics from The Univesity of Waterloo'
        },
        {
            emoji: '⚙️',
            text: 'currently open to work in software development'
        },
        {
            emoji: '🎸',
            text: 'available for acoustic cover gigs, session guitar and drum work, production, mixing, mastering'
        },
        {
            emoji: '📧',
            text: 'CONTACT ME: nsavoy7@gmail.com or the links below!'
        }
    ],
    socials: [
        {
            link: "https://instagram.com/itsnatesavoy/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/NathanSavoy/",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/nathan-savoy/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://soundcloud.com/natesavoy",
            icon: "fa fa-soundcloud",
            label: 'SoundCloud'
        }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    musicBio:
        [
            "I first picked up a guitar when I was seven years old, waiting patiently in the showroom of Jim’s Music Store while my sister completed her lessons. Immediately I knew that this would be a lifelong obsession and outlet for me, no matter what other ventures I pursued (though my seven-year-old thought was probably closer to “hey this is pretty cool!”).", <br></br>, <br></br>,
            "My formal training progressed through the Royal Conservatory of Music, through which I completed my grade 8 exam in classical guitar before transitioning my focus to folk, blues, and rock styles. It was around this time that I developed an interest in songwriting, inspired by the ramblings and rhymes of Bob Dylan, Mark Knofler, and many others.", <br></br>, <br></br>,
            "These days, my time is split between writing and producing my solo projects, drumming for my band Three By Seven, and playing cover shows in establishments around Southern Ontario."
        ],
    devBio:
        [
            "I’ve always grown excited at the prospect of designing and creating bespoke solutions to problems. This began in my father’s woodworking shop when I was young, where I would spend much of my free time building anything I could think of – from pens and trinkets to a custom carving bench and guitar chair. ", <br></br>, <br></br>,
            "This curiosity continues today, bolstered by the technical skills gained during my study of Mathematical Physics at The University of Waterloo. Through the program and its associated co-op work terms, I have gained a foundation in software and hardware development that supports my current endeavors.", <br></br>, <br></br>,
        ],
    musicPortfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Final Dance (Original Song)",
            source: "YgBB3si18RY",
        },
        {
            title: "Just Breathe - Pearl Jam",
            source: "kOt4JgwV9Aw"
        },
        {
            title: "La Catedral - Barrios Mangoré",
            source: "Z1TSfVwbgak"
        },
        {
            title: "Big Love - Fleetwood Mac",
            source: "KChSJWnXgxI"
        },
    ],
    devPortfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Music Analysis Application",
            img: AudioToys, 
            source: "https://github.com/NathanSavoy/Audio-Toys", // this should be a link to the **repository** of the project, where the code is hosted.
            body: ["To expand my knowledge of DSP, I developed a desktop app using Python which replicates features found in common in DJ analysis programs.", <br></br>,<br></br>, 
                    "Particularly, I developed algorithms which, given a WAV file, determine the song's tempo, key, and loudness. I also included a neat waveform display which overlays plots of low, mid, and high frequencies.",<br></br>,<br></br>,
                    "Packaging these methods together behind a GUI gave me a further opportunity in learning about the design side of software development."],
            alt: "Audio Toys GUI"
        },
        {
            title: "Midi Foot Controller",
            img: MidiFootController, 
            source: "https://github.com/NathanSavoy/MidiFootController", // this should be a link to the **repository** of the project, where the code is hosted.
            body: ["Out of a desire to move beyond the creative limitations of my basic guitar loop pedal and an aversion to spending hundreds of dollars on a better one, I designed and manufactured this MIDI foot controller to allow me to do live looping using Ableton Live.",<br></br>,<br></br>, 
                    "Based around an Arduino UNO, the device converts the digital signal received from the various buttons, knobs, and switches into serial output that is sent via USB to a computer. There, 'Hairless Midi-Serial' conveters the serial data to MIDI signals which can be mapped to various options in Live.",<br></br>,<br></br>,
                    "The setup is fully customizable, with (practically) unlimited banks of control mapping presets built into the pedal."],
            alt: "Midi Foot Controller"
        },
    ]
}