import React from "react";
import "../Css/Footer.css"
import Instagram from "../../assets/instagram.png"
import Facebook from  "../../assets/fb.png"
import Twitter from  "../../assets/mdi_twitter.png"
import {
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>ABOUT US</h3>

          <a >Delivery Information</a>
          <a>Privacy Policy</a>
          <a>Terms & Condition</a>
          <a>Contact Us</a>
        </div>

        <div className="footer-section">
          <h3>OFFICIAL INFO</h3>

          <p>
            <FaEnvelope className="footer-icon" />
            Primepress@gmail.com
          </p>

          <p>
            <FaMapMarkerAlt className="footer-icon" />
            No 5, Idowu Lane, Ikeja Lagos
          </p>
        </div>

        <div className="footer-section">
          <h3>OPEN HOURS</h3>

          <p>Mon - Sat: 9am - 7pm</p>
          <p>Sunday: Closed</p>
        </div>

        <div className="footer-section">
          <h3>HELP & SUPPORT</h3>

          <a >Contact Us</a>
          <a >Chat 24/7 Services</a>
        </div>

        <div className="footer-section">
          <h3>FOLLOW US</h3>

          <div className="social-icons">
            <div>
              <img src={Twitter} alt="Twitter" />
            </div>

            <div>
             <img src={Instagram} alt="Instagram" />
            </div>

            <div>
              <img src={Facebook} alt="Facebook" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;