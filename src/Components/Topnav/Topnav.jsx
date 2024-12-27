import React, { useEffect, useState } from "react";
import "./topnav.scss";
import uz from "../../img/uz.png";
import en from "../../img/en.png";
import ru from "../../img/ru.png";
import logo from "../../img/TAS2oqrangi.png";
import { useTranslation } from "react-i18next";
import "../../i18n";
import Select from "react-select";
import { NavLink } from "react-router-dom";

// Tilni o'zgartirish funksiyasi
const Topnav = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState({});

  const options = [
    { value: "uz", label: <img src={uz} alt="uz" /> },
    { value: "en", label: <img src={en} alt="en" /> },
    { value: "ru", label: <img src={ru} alt="ru" /> },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Tilni o'zgartirish
    localStorage.setItem("language", lng); // Tanlangan tilni localStorage'ga saqlash
  };

  useEffect(() => {
    // Dastlabki yuklanishda localStorage'dan tilni o'qish va o'sha tilga o'zgartirish
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }

    // Saqlangan tildan `selectedLanguage` qiymatini o'rnatish
    setSelectedLanguage(
      options.find((option) => option.value === savedLanguage) || options[0]
    );
  }, [i18n]);

  return (
    <div className="header-top p-2">
      <div className="container">
        <div className="logo-wrapper">
          <NavLink to="/" className="logo">
            <img alt="in out" width="83" height="72" src={logo} />
          </NavLink>
          <div className="header-top-wrapper">
            <div className="advertasing"></div>
            <div className="link">
              <a
                target="_blank"
                className="link-btn one"
                href="https://t.me/bahtiyorkamalov"
              >
                <img
                  src="https://www.inoutads.uz/_nuxt/telegram.61463358.svg"
                  alt="telegram"
                  width="20"
                  height="20"
                />
                <p className="link-text">{t("telegram")}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="languages desktop">
          <div className="menu-languages">
            {/* react-select bilan rasmli til tanlash */}
            <Select
              value={selectedLanguage} // Tanlangan tilni value sifatida berish
              options={options}
              onChange={(selectedOption) => {
                changeLanguage(selectedOption.value); // Tilni o'zgartirish
                setSelectedLanguage(selectedOption); // Tanlangan tilni saqlash
              }}
              className="language-select"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
