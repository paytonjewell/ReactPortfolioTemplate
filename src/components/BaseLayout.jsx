import React from "react";
import Style from "./BaseLayout.module.scss";
import Navbar from "../components/Navbar";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import useDarkMode from "../hooks/useDarkMode";

export default function BaseLayout() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <React.StrictMode>
      <Box className={darkMode ? Style.dark : Style.light}>
        <Grid
          container
          display={"flex"}
          flexDirection={"column"}
          minHeight={"100vh"}
          justifyContent={"space-between"}
        >
          <Grid item>
            <Navbar darkMode={darkMode} handleClick={toggleDarkMode} />
          </Grid>
          <Grid item flexGrow={1}>
            <Routes>
              <Route exact path={"/"} element={<Home />} />
              <Route exact path={"/about"} element={<About />} />
              <Route exact path={"/portfolio"} element={<Portfolio />} />
            </Routes>
          </Grid>
          <Grid item>
            <Box
              component={"footer"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              py={"0.5rem"}
              sx={{ opacity: 0.7 }}
              width={"100%"}
            >
              <small
                style={{
                  fontSize: "0.7rem",
                }}
              >
                template created with &hearts; by{" "}
                <a href={"https://paytonpierce.dev"}>Payton Pierce</a>
              </small>
              <p>&copy; 2023</p>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.StrictMode>
  );
}
