import React, { useEffect, useState } from "react";
import "./topnav.scss";
import logo from "../../img/TAS2oqrangi.png";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { NavLink } from "react-router-dom";

const Topnav = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("uz");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setSelectedLanguage(lng);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
    setSelectedLanguage(savedLanguage || "uz");
  }, [i18n]);

  return (
    <div className="header-top p-2">
      <div className="container2">
        <NavLink to="/" className="logo-wrapper">
          <img
            alt="in out"
            width="83"
            height="72"
            src={logo}
            className="logo"
          />
        </NavLink>
        <div className="header-top-wrapper">
          <select
            className="language-select"
            value={selectedLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="uz">
              <span>uzb</span>
            </option>
            <option value="en">
              <span>eng</span>
            </option>
            <option value="ru">
              <span>рус</span>
            </option>
          </select>
          <nav className="navbar">
            {/* <div className="container"> */}
            <div className="navbar__container">
              <div className="navbar__left">
                <NavLink to="/" className="navbar__link">
                  {t("home")}
                </NavLink>
                <NavLink to="/services" className="navbar__link">
                  {t("services")}
                </NavLink>
                <NavLink to="/about" className="navbar__link">
                  {t("aboutUs")}
                </NavLink>
                <NavLink to="/contact" className="navbar__link">
                  {t("contact")}
                </NavLink>
              </div>
            </div>
            {/* </div> */}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
