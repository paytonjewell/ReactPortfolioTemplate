import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";

function PortfolioBlock(props) {
  const { image, live, source, title, stack } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ textAlign: "center" }}
    >
      <Box component={"img"} src={image} alt={"mockup"} />
      <h1 sx={{ fontSize: "2rem" }}>{title}</h1>
      <h3 sx={{ fontSize: "1.2rem" }}>{stack}</h3>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={live} title={"Live Demo"} icon={<LanguageIcon />} />
        </Box>
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={source} title={"Source Code"} icon={<CodeIcon />} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
