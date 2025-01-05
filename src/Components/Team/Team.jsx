import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import qiz1 from "../../img/qiz1.png";
import qiz2 from "../../img/qiz2.png";
import qiz3 from "../../img/qiz3.png";
import qiz4 from "../../img/qiz4.jpg";
import qiz5 from "../../img/qiz5.jpg";
import qiz6 from "../../img/qiz6.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./team.scss";

const Team = () => {
  const { t } = useTranslation();
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const teamMembers = [
    {
      name: t("team.members.0.name"),
      position: t("team.members.0.position"),
      image: qiz1,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998933628225",
    },
    {
      name: t("team.members.1.name"),
      position: t("team.members.1.position"),
      image: qiz2,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998999119009",
    },
    {
      name: t("team.members.2.name"),
      position: t("team.members.2.position"),
      image: qiz3,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998919771000 ",
    },
    {
      name: t("team.members.3.name"),
      position: t("team.members.3.position"),
      image: qiz4,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998990740500",
    },
    {
      name: t("team.members.4.name"),
      position: t("team.members.4.position"),
      image: qiz5,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998973660909",
    },
    {
      name: t("team.members.5.name"),
      position: t("team.members.5.position"),
      image: qiz6,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998936965323",
    },
    {
      name: t("team.members.6.name"),
      position: t("team.members.6.position"),
      image: qiz6,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998993699616",
    },
    {
      name: t("team.members.7.name"),
      position: t("team.members.7.position"),
      image: qiz6,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998994642054",
    },
    {
      name: t("team.members.8.name"),
      position: t("team.members.8.position"),
      image: qiz6,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998902266465",
    },
    {
      name: t("team.members.9.name"),
      position: t("team.members.9.position"),
      image: qiz6,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998903201047",
    },
    {
      name: t("team.members.10.name"),
      position: t("team.members.10.position"),
      image: qiz6,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998939800580",
    },
    {
      name: t("team.members.11.name"),
      position: t("team.members.11.position"),
      image: qiz6,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998972006663",
    },
    {
      name: t("team.members.12.name"),
      position: t("team.members.12.position"),
      image: qiz6,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998937433636",
    },
    {
      name: t("team.members.13.name"),
      position: t("team.members.13.position"),
      image: qiz6,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998712445724",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleZoomToggle = (index) => {
    if (zoomedIndex === index) {
      setZoomedIndex(null);
    } else {
      setZoomedIndex(index);
    }
  };

  return (
    <div className="team-slider">
      <div className="container">
        <div className="team-slider__flex">
          <div className="team-slider__texts">
            <h2>{t("team.title")}:</h2>
            <p> </p>
          </div>
          <NavLink to="/teams">
            <button className="full-list-button btn">
              {t("team.full_list_button")}
            </button>
          </NavLink>
        </div>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="team-slider__item">
              <div
                className={`team-slider__image ${
                  zoomedIndex === index ? "zoomed" : ""
                }`}
              >
                <img src={member.image} alt={member.name} />
                <div
                  className="zoom-icon"
                  onClick={() => handleZoomToggle(index)}
                >
                  <ZoomInIcon />
                </div>
              </div>
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <div className="social-links">
                <a href={member.instagram}>
                  <InstagramIcon style={{ fontSize: 40 }} />
                </a>
                <a href={member.telegram}>
                  <TelegramIcon style={{ fontSize: 40 }} />
                </a>
                <a href={member.phone}>
                  <PhoneIcon style={{ fontSize: 40 }} />
                </a>
              </div>
              <button className="rate-button btn1">{t("team.Baholash")}</button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <KeyboardArrowRightIcon />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <KeyboardArrowLeftIcon />
    </div>
  );
};

export default Team;
