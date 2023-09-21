import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//mui
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//images
import bookssmall from "./assets/bookssmall.jpg";
import redUnderline from "./assets/redunderline.png";

const NavBar = () => {
  const [width, setWidth] = useState(0);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [currPage, setCurrPage] = useState("/");

  useEffect(() => {
    try {
      const width = window.innerWidth;
      setWidth(width);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setTimeout(() => {
      setCurrPage(window.location.hash.slice(2));
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav>
        <div className="nameDivContainer">
          <div className="name">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <h1
                style={{
                  fontSize: "inherit",
                  fontFamily: "inherit",
                  fontWeight: "inherit",
                  // color: "inherit",
                  margin: "inherit",
                  padding: "inherit",
                }}
              >
                Hayley Jozwiak
              </h1>
            </Link>
          </div>
        </div>

        <div className="menuItems" id="large">
          <Link to="/portfolio" onClick={() => setCurrPage("portfolio")}>
            <div className={currPage === "portfolio" ? "active" : "menuItems-first-child"}>
              Portfolio
            </div>
          </Link>
          <Link to="/services" onClick={() => setCurrPage("services")}>
            <div className={currPage === "services" ? "active" : "menuItems-second-child"}>
              Services
            </div>
          </Link>
          <Link to="/contact" onClick={() => setCurrPage("contact")}>
            <div className={currPage === "contact" ? "active" : "menuItems-third-child"}>
              Contact
            </div>
          </Link>
        </div>
        <div className="menuItems" id="small">
          <Box
            sx={{
              padding: "0px",
              margin: "0px",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              slotProps={{ className: "menu-paper-root" }}
              sx={{
                padding: 0,
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": { className: "menu-paper-root" },
              }}
            >
              <MenuItem key={"home"} onClick={scrollToTop}>
                <Link
                  offset="10"
                  to="/"
                  id={currPage === "" ? "activelinks" : "links"}
                  onClick={handleCloseNavMenu}
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem key={"portfolio"}>
                <Link
                  offset="10"
                  to="/portfolio"
                  id={currPage === "portfolio" ? "activelinks" : "links"}
                  onClick={handleCloseNavMenu}
                >
                  Portfolio
                </Link>
              </MenuItem>
              <MenuItem key={"services"}>
                <Link
                  offset="10"
                  to="/services"
                  id={currPage === "services" ? "activelinks" : "links"}
                  onClick={handleCloseNavMenu}
                >
                  Services
                </Link>
              </MenuItem>
              <MenuItem key={"contact"}>
                <Link
                  offset="10"
                  to="/contact"
                  id={currPage === "contact" ? "activelinks" : "links"}
                  onClick={handleCloseNavMenu}
                >
                  Contact
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </div>
      </nav>
      <div className="img-mask">
        <img
          src={bookssmall}
          style={{
            width: "100%",
            borderBottom: " 6px solid rgba(50, 80, 250, 0.4)",
          }}
          alt="https://unsplash.com/@eddrobertson"
        />
      </div>
    </>
  );
};

export default NavBar;
