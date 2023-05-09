import React from "react";
import Terminal from "./Terminal";
import Style from "./About.module.scss";

export default function AboutMe({ firstName, lastName, baseColor, bio }) {
  const aboutMeText = (
    <>
      <p>
        <span style={{ color: baseColor }}>
          {firstName}
          {lastName.toLowerCase()} $
        </span>{" "}
        cat about{firstName}{" "}
      </p>
      <p>
        <span style={{ color: baseColor }}>
          about{firstName} <span className={Style.green}>(main)</span> ${" "}
        </span>
        {bio}
      </p>
    </>
  );

  return <Terminal text={aboutMeText} />;
}
