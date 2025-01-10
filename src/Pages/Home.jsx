import React from "react";
import "../styles/home.scss";
import Business from "../Components/UI/Business/Business";
import Team from "../Components/Team/Team";
import Intro from "../Components/UI/Intro/Intro";
import Comments from "../Components/Comments/Comments";
import Contact from "./Contact";
import Sliders from "../Components/UI/Sliders/Sliders";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <div className="containerbase">
        <Sliders />
        <Business />
        <Team />
        <Contact />
        <Comments />
      </div>
    </div>
  );
};

export default Home;
