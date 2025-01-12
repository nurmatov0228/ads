import React from "react";
import "./uyushma.scss";
import logo from "../../../img/TAS2oqrangi.png";
import { NavLink } from "react-router-dom";
const Uyishma = () => {
  return (
    <NavLink to={"/reglament-info"}>
      <div className="uyishma">
        <img src={logo} alt="" />
      </div>
    </NavLink>
  );
};

export default Uyishma;
