import React from "react";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Hobbies from "./Hobbies";

function useInfo() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setData(info);
  }, []);

  return data;
}

export default function About() {
  const data = useInfo();

  if (!data) {
    return <div>Loading...</div>;
  }

  const { firstName, lastName, baseColor } = data;

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <AboutMe
        firstName={firstName}
        lastName={lastName}
        baseColor={baseColor}
        bio={data.bio}
      />
      <Skills
        firstName={firstName}
        lastName={lastName}
        baseColor={baseColor}
        skills={data.skills}
      />
      <Hobbies
        firstName={firstName}
        lastName={lastName}
        baseColor={baseColor}
        hobbies={data.hobbies}
      />
    </Box>
  );
}
