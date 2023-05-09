import { info } from "../info/Info";

const navbarLinks = [
  {
    name: "Home",
    to: "/",
    active: "home",
  },
  {
    name: "About Me",
    to: "/about",
    active: "about",
  },
  {
    name: info.initials,
    type: "initials",
    to: "/",
    active: "home",
  },
  {
    name: "Portfolio",
    to: "/portfolio",
    active: "portfolio",
  },
];

export default navbarLinks;
