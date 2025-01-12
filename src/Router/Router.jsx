import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Contact from "../Pages/Contact";
import Videos from "../Pages/Videos";
import Allteam from "../Pages/Allteam";
// import OneItem from "../Pages/Oneitem";
import Services from "../Pages/Services";
import ReglamentInfo from "../Components/UI/ReglamentInfo/ReglamentInfo";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allvideos" element={<Videos />} />
        <Route path="/about" element={<Allteam />} />
        {/* <Route path="/oneitem/:id" element={<OneItem />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/reglament-info" element={<ReglamentInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
