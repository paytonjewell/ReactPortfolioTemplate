import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";

export default function Skills({ firstName, lastName, baseColor, skills }) {
  const skillsText = (
    <>
      <p>
        <span style={{ color: baseColor }}>
          {firstName}
          {lastName.toLowerCase()} $
        </span>{" "}
        cd skills/tools
      </p>
      <p>
        <span style={{ color: baseColor }}>
          skills/tools <span className={Style.green}>(main)</span> $
        </span>{" "}
        ls
      </p>
      <p style={{ color: baseColor }}> Proficient With</p>
      <ul className={Style.skills}>
        {skills.proficientWith.map((proficiency, index) => (
          <li key={index}>
            {proficiency.charAt(0).toUpperCase() + proficiency.slice(1)}
          </li>
        ))}
      </ul>
      <p style={{ color: baseColor }}> Exposed To</p>
      <ul className={Style.skills}>
        {skills.exposedTo.map((skill, index) => (
          <li key={index}>{skill.charAt(0).toUpperCase() + skill.slice(1)}</li>
        ))}
      </ul>
    </>
  );

  return <Terminal text={skillsText} />;
}
