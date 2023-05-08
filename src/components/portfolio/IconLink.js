import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

function IconLink({ link, title, icon }) {
  return (
    <Link to={link}>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        {icon}
        <small>{title}</small>
      </Box>
    </Link>
  );
}

export default IconLink;
