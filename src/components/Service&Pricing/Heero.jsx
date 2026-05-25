import React from 'react';
import "../Css/ServiceCssFile/Heero.css";
import Btn from '../Props/Btn';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (

    <section className="heero-container">
      <div className="heero-content">
        <h1 className="heero-title">
          Our Laundry <br /> Services & Pricing
        </h1>
        <p className="heero-description">
          Quality laundry service at affordable, <br /> transparent prices.
        </p>
        <Btn onClick={() => navigate('/pickup')} text="Book a Pickup" className="heero-btn" />  
      </div>
    </section>
  );
};


export default Hero;