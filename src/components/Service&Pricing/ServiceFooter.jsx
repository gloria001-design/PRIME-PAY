import React from 'react'
import Footer from "../Props/Footer"
import "../Css/ServiceCssFile/ServiceFooter.css"
import Btn from '../Props/Btn'
import { useNavigate } from 'react-router-dom'

const ServiceFooter  = () => {
  const navigate = useNavigate();
  return (
    <div className='service-footer'>
      <div className='service-footer-container'>
        <div className='service-footer-content'>
          <h1>Book Your Pick Up Within 60 Seconds.</h1>
          <Btn  text="Schedule  Pickup" className="service-footer-btn" onClick={() => navigate('/pickup')}/>
        </div>
      </div>
      <Footer/>  
    </div>
  )
}

export default ServiceFooter