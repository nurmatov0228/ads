import React, { useState } from "react";
import Slider from "react-slick";
import { Star } from "@mui/icons-material";
import { useTranslation } from "react-i18next"; // i18next import
import "./comments.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import oybekbegimqulov from "../../img/oybekbegimqulov.jpg";
import ravshanbegimov from "../../img/ravshanbegimov.jpg";
import YunusovHAkimjon from "../../img/YunusovHAkimjon.jpg";
import Xalimoviskandar from "../../img/Xalimoviskandar.jpg";
import xolmirzayevaferuza from "../../img/xolmirzayevaferuza.jpg";
import user from "../../img/user.jpg";

const initialCommentsData1 = [
  {
    id: 1,
    name: "Pem",
    comment: "nhnh",
    rating: 4,
    avatar: user,
  },
  {
    id: 2,
    name: "Alisa",
    comment: "Foydali xizmatlaringiz uchun raxmat",
    rating: 5,
    avatar: user,
  },
  {
    id: 3,
    name: "Mira",
    comment: "Alo darajadagi xizmat uchun rahmat",
    rating: 4,
    avatar: user,
  },
];

const Comments = () => {
  const { t } = useTranslation(); // i18next dan foydalanish
  const initialCommentsData = [
    {
      id: 1,
      name: t("team.members.0.name"),
      comment: t("team.members.0.position"),
      rating: 5,
      avatar: user,
    },
    {
      id: 2,
      name: t("team.members.1.name"),
      comment: t("team.members.1.position"),
      rating: 5,
      avatar: ravshanbegimov,
    },
    {
      id: 3,
      name: t("team.members.2.name"),
      comment: t("team.members.2.position"),
      rating: 4,
      avatar: user,
    },
    {
      id: 4,
      name: t("team.members.3.name"),
      comment: t("team.members.3.position"),
      rating: 5,
      avatar: oybekbegimqulov,
    },
    {
      id: 5,
      name: t("team.members.4.name"),
      comment: t("team.members.4.position"),
      rating: 4,
      avatar: user,
    },
    {
      id: 6,
      name: t("team.members.5.name"),
      comment: t("team.members.5.position"),
      rating: 5,
      avatar: user,
    },
    {
      id: 7,
      name: t("team.members.6.name"),
      comment: t("team.members.6.position"),
      rating: 4,
      avatar: Xalimoviskandar,
    },
    {
      id: 8,
      name: t("team.members.7.name"),
      comment: t("team.members.7.position"),
      rating: 5,
      avatar: YunusovHAkimjon,
    },
    {
      id: 9,
      name: t("team.members.8.name"),
      comment: t("team.members.8.position"),
      rating: 4,
      avatar: xolmirzayevaferuza,
    },
    {
      id: 10,
      name: t("team.members.9.name"),
      comment: t("team.members.9.position"),
      rating: 5,
      avatar: user,
    },
    {
      id: 11,
      name: t("team.members.10.name"),
      comment: t("team.members.10.position"),
      rating: 4,
      avatar: user,
    },
    {
      id: 12,
      name: t("team.members.11.name"),
      comment: t("team.members.11.position"),
      rating: 5,
      avatar: user,
    },
    {
      id: 13,
      name: t("team.members.12.name"),
      comment: t("team.members.12.position"),
      rating: 4,
      avatar: user,
    },
    {
      id: 14,
      name: t("team.members.13.name"),
      comment: t("team.members.13.position"),
      rating: 5,
      avatar: user,
    },
  ];
  const [commentsData, setCommentsData] = useState(initialCommentsData);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2400,
  };

  return (
    <div className="comments" id="reviews">
      <div className="container">
        <div className="comments__flex">
          <h2 className="comments__title">
            <span className="comments__title--highlight">
              {t("comments.title")}
            </span>{" "}
            {t("comments.subtitle")}
          </h2>
        </div>
        <Slider {...settings} className="comments__slider">
          {commentsData.map((comment) => (
            <div key={comment.id} className="comments__item">
              <div className="comments__header">
                <img
                  src={comment.avatar}
                  alt={comment.name}
                  className="comments__avatar"
                />
              </div>
              <div className="comments__info">
                <h3 className="comments__name">{comment.name}</h3>
                <p className="comments__text">{comment.comment}</p>
                <div className="comments__rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="comments__star"
                      style={{
                        color: index < comment.rating ? "#FFFF00" : "#ccc",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Comments;
