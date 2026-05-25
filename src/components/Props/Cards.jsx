import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Cards.css";
import Btn from "./Btn";
const Cards = ({ img, title, description, customClass, showBtn }) => {
  const navigate = useNavigate();

  return (
    <div className={`work-card ${customClass || ""}`}>
      <div className="work-card-icon-box">
        <img src={img} alt="" />
      </div>
      <h3 className="work-card-title">{title}</h3>
      <p className="work-card-desc">{description}</p>
      {showBtn && (
        <Btn
          text="Book Now"
          className={customClass || "btn-book-now"}
          onClick={() => navigate("/pickup")}
        />
      )}
    </div>
  );
};

export default Cards;
