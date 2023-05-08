import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";

export default function Hobbies({ firstName, lastName, baseColor, hobbies }) {
  const miscText = (
    <>
      <p>
        <span style={{ color: baseColor }}>
          {firstName}
          {lastName.toLowerCase()} $
        </span>{" "}
        cd hobbies/interests
      </p>
      <p>
        <span style={{ color: baseColor }}>
          hobbies/interests <span className={Style.green}>(main)</span> $
        </span>{" "}
        ls
      </p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>
            <Box component={"span"} mr={"1rem"}>
              {hobby.emoji}
            </Box>
            {hobby.label}
          </li>
        ))}
      </ul>
    </>
  );

  return <Terminal text={miscText} />;
}
