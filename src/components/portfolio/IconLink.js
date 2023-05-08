import React from "react";
import { IconButton } from "@mui/material";

function IconLink({ link, title, icon }) {
  return (
    <IconButton
      onClick={() => {
        window.open(link, "_blank");
      }}
      title={title}
      sx={{
        color: "inherit",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      {icon}
    </IconButton>
  );
}

export default IconLink;
