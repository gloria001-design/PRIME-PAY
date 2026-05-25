import React from "react";
import "../Css/PickUpCssFile/PickUpHero.css";
import { FaCheck } from "react-icons/fa";
import bImg from "../../assets/bImg.png";

const PickupHero = () => {
  return (
    <div className="pickup_container">
      <div className="pickup_content">
        
        <div className="left_side">
          <div className="blue_blur_bg"></div>
          <h1 className="main_title">Schedule Your Laundry Pickup</h1>
          <p className="subtitle">
            Convenient and reliable laundry service at your doorstep.
          </p>
          <div className="check_list">
            <p>
              <FaCheck className="check_icon" /> Free Pickup & Delivery
            </p>
            <p>
              <FaCheck className="check_icon" /> Satisfaction Guaranteed
            </p>
          </div>
        </div>

        <div className="right_side">
          <div className="hero_image_box">
            <img src={bImg} alt="Delivery man with laundry box" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PickupHero;