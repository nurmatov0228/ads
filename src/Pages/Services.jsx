import React from "react";
import { useNavigate } from "react-router-dom"; // Routing uchun
import "../styles/services.scss";
import image1 from "../img/assalam.jpg";
import { useTranslation } from "react-i18next";
import logo from "../img/logoads.png";

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // useNavigate hook'ini chaqiramiz

  const item = [
    {
      id: 1,
      image: image1,
      title: t("business.title1"), // JSON faylidan tarjima olish
      description: t("business.description1"), // JSON faylidan tarjima olish
    },
  ];

  const handleMoreClick = (id) => {
    navigate(`/oneitem/${id}`); // OneItem sahifasiga o'tish
  };

  return (
    <div className="business-slider">
      <div className="container">
        <h2>{t("business.title")}</h2>
        {item.map((item) => (
          <div key={item.id} className="business-slider__item">
            <img
              src={item.image}
              alt={item.title}
              className="business-slider__image"
            />
            <div className="business-slider__content">
              <p>{item.description}</p>
              <img
                className="business-slider__logo"
                onClick={() => handleMoreClick(item.id)}
                src={logo}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
