import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Routing uchun
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./business.scss"; // SCSS faylingiz
import image1 from "../../../img/assalam.jpg"; // Rasm fayllari
import image2 from "../../../img/bydsong.png"; // Rasm fayllari
import image3 from "../../../img/3dd.jpg";
import image4 from "../../../img/snakers.jpg";
import image5 from "../../../img/3d.jpeg";
import image6 from "../../../img/kat.png";
import image7 from "../../../img/bus.jpeg";
// import logo from "../../../img/logoads.png";
import { useTranslation } from "react-i18next"; // import t o'zgaruvchisi

const Business = () => {
  const { t } = useTranslation(); // t o'zgaruvchisini chaqirish
  // const navigate = useNavigate(); // useNavigate hook'ini chaqiramiz

  const item = [
    {
      id: 1,
      image: image1,
      title: t("business.title1"), // JSON faylidan tarjima olish
      region: "Toshkent",
      description: t("business.description1"), // JSON faylidan tarjima olish
    },
    {
      id: 2,
      image: image2,
      title: t("business.title2"),
      region: "Samarqand",
      description: t("business.description2"),
    },
    {
      id: 3,
      image: image3,
      title: t("business.title3"),
      region: "Navoiy",
      description: t("business.description3"),
    },
    {
      id: 4,
      image: image4,
      title: t("business.title4"),
      region: "Farg'ona",
      description: t("business.description4"),
    },
    {
      id: 5,
      image: image5,
      title: t("business.title5"),
      region: "Namangan",
      description: t("business.description5"),
    },
    {
      id: 6,
      image: image6,
      title: t("business.title6"),
      region: "Andijon",
      description: t("business.description6"),
    },
    {
      id: 7,
      image: image7,
      title: t("business.title7"),
      region: "Jizzax",
      description: t("business.description7"),
    },
    {
      id: 7,
      image: image7,
      title: t("business.title7"),
      region: "Sirdaryo",
      description: t("business.description7"),
    },
    {
      id: 7,
      image: image7,
      title: t("business.title7"),
      region: "Buxoro",
      description: t("business.description7"),
    },
    {
      id: 7,
      image: image7,
      title: t("business.title7"),
      region: "Qashqadaryo",
      description: t("business.description7"),
    },
    {
      id: 7,
      image: image7,
      title: t("business.title7"),
      region: "Surxondaryo",
      description: t("business.description7"),
    },
    {
      id: 7,
      image: image7,
      title: t("business.title7"),
      region: "Xorazm",
      description: t("business.description7"),
    },
    {
      id: 7,
      image: image7,
      title: t("business.title7"),
      region: "Qoraqalpog'iston respublikasi",
      description: t("business.description7"),
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  // const handleMoreClick = (id) => {
  //   navigate(`/oneitem/${id}`); // OneItem sahifasiga o'tish
  // };

  return (
    <div className="business-slider">
      <div className="business-slider__bg"></div>
      <div className="container">
        <h2>{t("business.title")}</h2> {/* JSON faylidan tarjima olish */}
        <Slider {...settings}>
          {item.map((item) => (
            <div
              key={item.id}
              className="business-slider__item"
              // onClick={() => handleMoreClick(item.id)}
            >
              <div className="servise__region">{item.region}</div>
              <div className="servise__data">
                <img
                  src={item.image}
                  alt={item.title}
                  className="business-slider__image"
                />
                <div className="business-slider__content">
                  <p>{item.description}</p>
                  {/* <img className="business-slider__logo" src={logo} /> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Business;
