import React from "react";
import "../Css/PickUpCssFile/PickUpFooter.css";
import Cards from "../Props/Cards";
import { FaCheck, FaClock, FaLock } from "react-icons/fa";
import Mark from "../../assets/Mark.png";
import Time from "../../assets/Time.png";   

const FeaturesSection = () => {
  return (
    <div className="features_container">
      <div className="features_content">
        
        <Cards 
          img={Mark}
          title="Free Pickup & Delivery"
          description="Enjoy Convenient Pickup and delivery right at your doorstep."
          showBtn={false}
        />

        <Cards 
          img={Time}
          title="Within 24 hours"
          description="Receive your fresh, clean laundry back in just 24 hours."
          showBtn={false}
        />

      </div>

      <div className="features_security">
        <FaLock className="features_lock_icon" />
        <span>We respect your privacy and ensure your data is secure.</span>
      </div>
    </div>
  );
};

export default FeaturesSection;