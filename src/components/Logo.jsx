import React from "react";
import { ReactComponent as LogoSVG } from "../img/logo.svg";
import "./Logo.scss";

const Logo = ({ className, darkMode }) => (
  <LogoSVG className={`${className} ${darkMode ? "dark" : ""}`} />
);

export default Logo;
