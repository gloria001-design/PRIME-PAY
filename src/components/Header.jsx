import React from 'react'
import { NavLink } from 'react-router-dom'
import  '../components/Css/HomeCssFile/Header.css'
import Logo from "../assets/Logo.png"
import Btn from './Props/Btn'

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo-box">
          <img src={Logo} alt="Logo" className="logo-img" />
          <h2 className="logo-text">PrimePress<span> Laundry</span></h2>
        </div>
        
        <div className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink 
                to="/home" 
                className={({ isActive }) => isActive ? "nav-tab active" : "nav-tab"}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/services" 
                className={({ isActive }) => isActive ? "nav-tab active" : "nav-tab"}
              >
                Service & pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/pickup" 
                className={({ isActive }) => isActive ? "nav-tab active" : "nav-tab"}
              >
                Pickup
              </NavLink>
            </li>
          </ul>
           </div>
          <div className="header-actions">
            <NavLink to="/signup">
              <Btn text="Sign up" className="signup-btn" />
            </NavLink>
            
            <NavLink to="/pickup">
              <Btn text="Book Now" className="header-btn" />
            </NavLink>
          </div>
       
      </div>
    </header>
  )
}

export default Header