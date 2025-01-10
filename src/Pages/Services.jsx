import React from "react";
import { useNavigate } from "react-router-dom"; // Routing uchun
import "../styles/services.scss";
import image1 from "../img/assalam.jpg";
import image2 from "../img/bydsong.png"; // Rasm fayllari
import image3 from "../img/3dd.jpg";
import image4 from "../img/snakers.jpg";
import image5 from "../img/3d.jpeg";
import image6 from "../img/kat.png";
import image7 from "../img/bus.jpeg";
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
    {
      id: 2,
      image: image2,
      title: t("business.title2"),
      description: t("business.description2"),
    },
    {
      id: 3,
      image: image3,
      title: t("business.title3"),
      description: t("business.description3"),
    },
    {
      id: 4,
      image: image4,
      title: t("business.title4"),
      description: t("business.description4"),
    },
    {
      id: 5,
      image: image5,
      title: t("business.title5"),
      description: t("business.description5"),
    },
    {
      id: 6,
      image: image6,
      title: t("business.title6"),
      description: t("business.description6"),
    },
    {
      id: 7,
      image: image7,
      title: t("business.title7"),
      description: t("business.description7"),
    },
  ];

  const handleMoreClick = (id) => {
    navigate(`/oneitem/${id}`); // OneItem sahifasiga o'tish
  };

  return (
    <div className="business-slider" id="services">
      <div className="container">
        <h2>{t("business.title")}</h2>
        <div className="services__flex">
          {item.map((item) => (
            <div
              key={item.id}
              className="business-slider__item"
              onClick={() => handleMoreClick(item.id)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="business-slider__image"
              />
              <div className="business-slider__content">
                <p>{item.description}</p>
                <img className="business-slider__logo" src={logo} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
