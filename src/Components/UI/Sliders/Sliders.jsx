import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./sliders.scss";

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
            <h3>1</h3>
          </div>
          <div className="slider-container-item">
            <h3>2</h3>
          </div>
          <div className="slider-container-item">
            <h3>3</h3>
          </div>
          <div className="slider-container-item">
            <h3>4</h3>
          </div>
          <div className="slider-container-item">
            <h3>5</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
