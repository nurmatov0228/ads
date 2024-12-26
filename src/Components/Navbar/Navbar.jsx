import React, { useState, useEffect } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import {
  Search,
  Phone,
  AccessTime,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { useTranslation } from "react-i18next";
import { ReactTyped } from "react-typed";

const Navbar = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  // Default dark mode holatini "dark" ga sozlash
  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme ? theme === "dark" : true; // Agar tanlanmagan bo'lsa, default tun rejimi
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <div className="navbar__left">
            <NavLink to="/" className="navbar__link">
              {t("home")}
            </NavLink>
            <a className="navbar__link" onClick={handleClick}>
              {t("services")}
            </a>
            <Menu
              className="navbar__menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem className="menuitem" onClick={handleClose}>
                <NavLink to="/services">{t("onRoad")}</NavLink>
              </MenuItem>
              <MenuItem className="menuitem" onClick={handleClose}>
                <NavLink to="/services">{t("onBridges")}</NavLink>
              </MenuItem>
              <MenuItem className="menuitem" onClick={handleClose}>
                <NavLink to="/services">{t("ledScreen")}</NavLink>
              </MenuItem>
              <MenuItem className="menuitem" onClick={handleClose}>
                <NavLink to={"/services"}>{t("roadAds")}</NavLink>
              </MenuItem>
            </Menu>
            <NavLink to="/about" className="navbar__link">
              {t("aboutUs")}
            </NavLink>
            <NavLink to="/contact" className="navbar__link">
              {t("contact")}
            </NavLink>
          </div>

          <div className="navbar__right">
            <div className="navbar__search">
              <IconButton>
                <Search />
              </IconButton>
              <ReactTyped
                strings={[
                  t("adsOnBuses"),
                  t("adsOnLedScreens"),
                  t("adsOnBillboards"),
                ]}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop
              >
                <input className="navbar__input" />
              </ReactTyped>
            </div>

            <div className="navbar__contact">
              <div className="navbar__contact__flex">
                <AccessTime className="navbar__icon" />
                <span>{t("workingHours")}</span>
              </div>
              <div className="navbar__contact__flex">
                <Phone className="navbar__icon" />
                <a href="tel:+998 55 201 90 10">
                  <span>+998 55 201 90 10</span>
                </a>
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <div className="navbar__theme-switch">
              <IconButton onClick={toggleDarkMode}>
                {darkMode ? (
                  <Brightness7
                    className="navbar__icon-darkmode"
                    style={{ color: "#FFD700" }} // Tun rejimida sariq rang
                  />
                ) : (
                  <Brightness4
                    className="navbar__icon-darkmode"
                    style={{ color: "#0000FF" }} // Kun rejimida ko'k rang
                  />
                )}
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
