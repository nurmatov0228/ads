import React, { useState } from "react";
import "../styles/allteam.scss";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

import user from "../img/user.jpg";
import oybekbegimqulov from "../img/oybekbegimqulov.jpg";
import ravshanbegimov from "../img/ravshanbegimov.jpg";
import YunusovHAkimjon from "../img/YunusovHAkimjon.jpg";
import Xalimoviskandar from "../img/Xalimoviskandar.jpg";
import xolmirzayevaferuza from "../img/xolmirzayevaferuza.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTranslation } from "react-i18next";

const Allteam = () => {
  const { t } = useTranslation();
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const teamMembers = [
    {
      name: t("team.members.0.name"),
      position: t("team.members.0.position"),
      image: user,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998933628225",
    },
    {
      name: t("team.members.1.name"),
      position: t("team.members.1.position"),
      image: user,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998999119009",
    },
    {
      name: t("team.members.2.name"),
      position: t("team.members.2.position"),
      image: user,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998919771000 ",
    },
    {
      name: t("team.members.3.name"),
      position: t("team.members.3.position"),
      image: oybekbegimqulov,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998990740500",
    },
    {
      name: t("team.members.4.name"),
      position: t("team.members.4.position"),
      image: user,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998973660909",
    },
    {
      name: t("team.members.5.name"),
      position: t("team.members.5.position"),
      image: user,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998936965323",
    },
    {
      name: t("team.members.6.name"),
      position: t("team.members.6.position"),
      image: Xalimoviskandar,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998993699616",
    },
    {
      name: t("team.members.7.name"),
      position: t("team.members.7.position"),
      image: YunusovHAkimjon,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998994642054",
    },
    {
      name: t("team.members.8.name"),
      position: t("team.members.8.position"),
      image: xolmirzayevaferuza,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998902266465",
    },
    {
      name: t("team.members.9.name"),
      position: t("team.members.9.position"),
      image: user,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998903201047",
    },
    {
      name: t("team.members.10.name"),
      position: t("team.members.10.position"),
      image: user,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998939800580",
    },
    {
      name: t("team.members.11.name"),
      position: t("team.members.11.position"),
      image: user,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998972006663",
    },
    {
      name: t("team.members.12.name"),
      position: t("team.members.12.position"),
      image: user,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998937433636",
    },
    {
      name: t("team.members.13.name"),
      position: t("team.members.13.position"),
      image: user,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998712445724",
    },
    {
      name: t("team.members.14.name"),
      position: t("team.members.14.position"),
      image: ravshanbegimov,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998712445724",
    },
    {
      name: t("team.members.15.name"),
      position: t("team.members.14.position"),
      image: user,
      instagram: "#",
      telegram: "#",
      phone: "tel: +998712445724",
    },
  ];

  const handleZoomToggle = (index) => {
    if (zoomedIndex === index) {
      setZoomedIndex(null);
    } else {
      setZoomedIndex(index);
    }
  };

  return (
    <div className="team-slider" id="allteam">
      <h2 className="allteam__title">Bizning jamoamiz</h2>
      <div className="slider-container container">
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
      </div>
    </div>
  );
};

export default Allteam;
