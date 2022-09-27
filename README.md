# React Portfolio, multiple pages with dark mode

## a portfolio for developers

![screenshot](https://user-images.githubusercontent.com/18350557/176953627-cd79fe83-0b84-4082-b79e-cc88da28f2e1.png)

[View Live Template](https://reactportfoliotemplate.paytonpierce.dev/) | [View Live Example](https://paytonpierce.dev/)

## features

🌑 Dark Mode Toggler

📖 Multi-Page Layout

📱 Fully Responsive

🎨 Modern Design

💡 Perfect Lighthouse Score

![screenshot of perfect lighthouse score](https://user-images.githubusercontent.com/18350557/179609620-847374a6-23e6-4432-b7a8-181d7d9bf026.png)


---

## getting started

### prerequisites

- have [Git](https://git-scm.com/) installed on your machine
- have [Node.js](https://nodejs.org/en/download/) installed on your machine
- basic familiarity with your machine's command line
- basic understanding of JSON data outline (arrays of objects basically)

## how to use

- fork the repository and clone locally
- run `npm install` to install dependencies
- once installation is complete, run `npm run start` to get your local copy running in the browser.

## template instructions

### 1. replace the images

- open the project in your file explorer, and navigate to `src/img`. there, you will see a bunch of images. these need
  to be replaced with your own images.

#### self.png

- add an image of yourself with the background removed, and cropped into a square. i know this seems picky, but the
  template is set up in a way that this is how it will look best :) I recommend using https://remove.bg to remove the
  background from your image. Once you add it to this img folder, rename it to `self.png` (delete the old self.png so
  yours replaces it)
- if background removal is not an option for you, any image you use will automatically be made into a circle. for this
  reason, square images without too tall of an aspect-ratio work best.
- example with background removed:

![](https://user-images.githubusercontent.com/18350557/176955112-a84b32a6-ddfc-44c9-86e3-268e56654346.png)

- example with background not removed:

![](https://user-images.githubusercontent.com/18350557/176955109-2c6251d4-a623-482a-9059-e186f32f7f2c.png)

#### mockups

- add to the `img` folder up to 5 screenshots of projects you have completed to be added to your portfolio page. this
  can either be a regular screenshot, or you can create mockups like what are on the default template. I created these
  in Canva -- if you would like help with creating them for your own projects, feel free to message me
  on [Twitter](https://twitter.com/paytoncodes) and I will happily help you make them :)

example: ![](http://localhost:3000/static/media/mock5.7a3de7b6c7393f774688.png)

- to make life easier later, name these files `mock1.png`, `mock2.png`, etc.

---

### 2. edit `Info.js`

Next, open the project in your code editor. Navigate to `src/info/Info.js`. There are some instructions written in the
comments there, but I will go over it all here as well:

#### Color Scheme

near the top of the file, you will find a line that looks like this:

```
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
```

There are the colors being used to determine the "accents" throughout the site - the circle behind your self portrait,
the color of your name, the labels on the about page, and the underline for the navigation.

You can pick any colors you like for this, just play around with it and make sure to check the colors against both light
mode and dark mode to make sure it looks good on both :)

#### Your Information

going further down the Info.js file, you can start replacing the default information with your own information, such as
first name, last name, initials, position, etc. Some of the values in this file should remain untouched -- be sure to
read the comments to see what to edit.

if you're not sure how to get emojis for the miniBio and hobbies, on Mac you should be able to access the emoji keyboard
with ctrl+cmd+space, and on Windows with windows+period('.')

Otherwise, use [Emojipedia](https://emojipedia.org/) to find and copy-paste what you like.

For the 'socials' section, be sure to replace the links with your own social profile links.

For the 'portfolio' section, update the titles to whatever you want. The `live` link should be a link to the **live demo** of your project. The `source` link should be a link to the **repository where the *code* of the project is hosted**, such as GitHub.

Note: If you have more than 5 projects, you will need to add more objects to the portfolio array. Just copy from the opening bracket to the comma of *one* object and continue pasting as many as you need. If you need help with this, feel free to reach out.

And that's it! If you save the file and check your live server, you should see that the information has been updated and the portfolio has been customized. 

Now, you can commit and push your changes to your forked repository, and deploy however you like. 

---

And you're done!

If you have any questions or issues with the setup process, feel free to contact me by any of the means below:

[Twitter](https://twitter.com/paytoncodes) | paytontaylor96@gmail.com

Or, use this repo and post an "issue" :)

All that I ask is that you please credit me for the template :) If you'd like to remove the credit from the bottom of the site, go for it, just link my profile somewhere in your ReadMe when you deploy, or wherever.

.•° ✿ °•.

If you enjoyed this template and want to support my ability to make more of these,
as well as creating video tutorials about React projects, writing articles about
helpful developer tools, or you just want to be nice, feel free to
support me on [Ko-Fi](https://ko-fi.com/paytoncodes)!

If you have any suggestions for how to improve this template, the ReadMe guide, etc.
please don't hesitate to reach out -- I will always happily accept constructive feedback!

°•. ✿ .•°

---

##### examples of people using this template!

[1](https://atramucsd.github.io/My-Website/#/)

[2](https://irfanbalghari.netlify.app/)

[3](https://karasakalmt.dev/)

[4](https://needon.kr/#/)

[5](https://inascim.github.io/)

[6](https://www.keyrxng.xyz/)

[7](https://ellerman4.github.io/ellerman4_portfolio/)

[8](https://anshu-sharma.netlify.app/)

[9](https://humbertodutra.github.io/)

[10](https://mehmetzorlu07.github.io/Portfolio/)

[11](https://react-portfolio-template-41210wtc0-paytonjewell.vercel.app/)

[12](https://www.lindseyk.dev/)


