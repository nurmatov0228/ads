import React, { useEffect } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import logo from "../../../img/TAS2oqrangi.png";
import "./sliders.scss";
import gerb from "../../../img/gerb.png";

const Sliders = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="sliders">
      <div className="container">
        <Slider {...settings}>
          <div className="slider-container-item">
            <img className="gerb" src={gerb} alt="" />
            <div className="slider-container-item__flex">
              <h1 className="slider-container-item__title">
                {t("slider.youthWorks")}
              </h1>
              <span className="slider-container-item__title2">
                {t("slider.agency")}
              </span>
            </div>
            <img src={logo} alt="" className="slider-container-item__img" />
          </div>
          <div className="slider-container-item">
            <img className="gerb" src={gerb} alt="" />
            <div className="slider-container-item__flex">
              <h1 className="slider-container-item__title">
                {t("slider.youthWorks")}
              </h1>
              <span className="slider-container-item__title2">
                {t("slider.agency")}
              </span>
            </div>
            <img src={logo} alt="" className="slider-container-item__img" />
          </div>
          <div className="slider-container-item">
            <img className="gerb" src={gerb} alt="" />
            <div className="slider-container-item__flex">
              <h1 className="slider-container-item__title">
                {t("slider.youthWorks")}
              </h1>
              <span className="slider-container-item__title2">
                {t("slider.agency")}
              </span>
            </div>
            <img src={logo} alt="" className="slider-container-item__img" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
