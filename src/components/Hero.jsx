import React from 'react'
import "../components/Css/HomeCssFile/Hero.css"
import LaundryPics from "../assets/LaundryPics.png"
import Ellipse from "../assets/Ellipse 48.png"
import Btn from './Props/Btn'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <img 
        src={Ellipse}
        className="hero-blur-bg"
        alt=""
      />

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-heading">
            Effortless <br />
            Laundry, Delivered <br />
            to Your Door.
          </h1>
          <p className="hero-text">
            We pick up, wash, fold & deliver... all within 24 hours.
          </p>
          <div className="hero-actions">
            <Btn onClick={() => navigate('/pickup')} text="Book a Pickup" className="btn-pickup" /> 
            <Btn onClick={() => navigate('/services')} text="See Pricing" className="btn-pricing" />
          </div>
        </div>

        <div className="hero-image-container">
          <img 
            src={LaundryPics} 
            alt="PrimePress Laundry Room" 
            className="hero-display-img" 
          />
        </div>
      </div>
    </section>
  )
}

export default Hero