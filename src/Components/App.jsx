import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Footer from "./Footer";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import Fade from "@mui/material/Fade";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 32, right: 32 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const App = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Icons /> */}
      </div>
      <ScrollTop {...props}>
        <Fab
          size="large"
          sx={{
            border: "1px solid rgb(20,30,70)",
            height: "48px",
            width: "48px",
            borderRadius: "4px",
            boxShadow: "2px 2px 2px rgba(20,30,70, .5)",
          }}
          aria-label="scroll back to top"
        >
          <ArrowUpwardOutlinedIcon />
        </Fab>
      </ScrollTop>
      <Footer />
    </div>
  );
};

export default App;
