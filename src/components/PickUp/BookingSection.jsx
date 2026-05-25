import React from "react";
import "../Css/PickUpCssFile/BookingSection.css";
import L1 from "../../assets/L1.png";
import L2 from "../../assets/L2.png";
import L3 from "../../assets/L3.png";
import { FaUser, FaPhoneAlt, FaMapMarkerAlt, FaCheck, FaLock } from "react-icons/fa";

const BookingSection = () => {
  return (
    <div className="booking_container">
      <div className="booking_content">
        
        <div className="form_wrapper">
          <div className="booking_card">
            <h2 className="form_title">Book Our Laundry Pickup</h2>
            <p className="form_subtitle">Fill out the form bill to schedule your laundry pickup.</p>
            
            <form>
              <div className="input_wrapper">
                <FaUser className="input_icon" />
                <input type="text" placeholder="Name" />
              </div>

              <div className="input_wrapper">
                <FaPhoneAlt className="input_icon" />
                <input type="tel" placeholder="Phone Number" />
              </div>

              <div className="input_wrapper">
                <FaMapMarkerAlt className="input_icon" />
                <input type="text" placeholder="Pickup Address" />
              </div>

              <div className="datetime_wrapper">
                <label>Pickup Date & Time</label>
                <input type="datetime-local" />
              </div>

              <div className="textarea_wrapper">
                <label>Special Instructions <span>(Optional)</span></label>
                <textarea placeholder="Any specific instructions for our team?"></textarea>
              </div>

              <button type="button" className="booking_submit_btn">Submit</button>
            </form>
          </div>

          <div className="security_note">
            <FaLock className="lock_icon" />
            <span>We respect your privacy and ensure your data is secure.</span>
          </div>
        </div>

        <div className="info_wrapper">
          <div className="feature_list">
            <p><FaCheck className="blue_check" /> Free Pickup & Delivery</p>
            <p><FaCheck className="blue_check" /> Satisfaction Guaranteed</p>
          </div>

          <div className="collage_container">
            <div className="collage_img img_top">
              <img src={L1} alt="Packing clothes" />
            </div>
            <div className="collage_img img_middle">
              <img src={L2} alt="Man thumbs up" />
            </div>
            <div className="collage_img img_bottom">
              <img src={L3} alt="Happy couple with bags" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookingSection;