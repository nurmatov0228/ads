import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./sliders.scss";
import gerb from "../../../img/gerb.png";

const Sliders = () => {
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
            <img src={gerb} alt="" />
            <div className="slider-container-item__flex">
              <h1 className="slider-container-item__title">Yoshlar ishlari</h1>
              <h1 className="slider-container-item__title2">agentligi</h1>
            </div>
          </div>
          <div className="slider-container-item">
            <img src={gerb} alt="" />
            <div className="slider-container-item__flex">
              <h1 className="slider-container-item__title">Yoshlar ishlari</h1>
              <h1 className="slider-container-item__title2">agentligi</h1>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
