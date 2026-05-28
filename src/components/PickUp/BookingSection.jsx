import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../Css/PickUpCssFile/BookingSection.css";
import L1 from "../../assets/L1.png";
import L2 from "../../assets/L2.png";
import L3 from "../../assets/L3.png";
import { FaUser, FaPhoneAlt, FaMapMarkerAlt, FaCheck, FaLock } from "react-icons/fa";
import { BaseURL } from "../../lib/HighFunction";

const BookingSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [bookingInfo, setBookingInfo] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    dateAndTime: "",
    instruction: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo({ ...bookingInfo, [name]: value });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();

    if (!bookingInfo.fullName || !bookingInfo.phoneNumber || !bookingInfo.address || !bookingInfo.dateAndTime) {
      Swal.fire({
        title: "Missing Fields",
        text: "Please fill in all required fields.",
        icon: "warning",
        confirmButtonColor: "#008d94",
      });
      return;
    }
    
    try {
      setIsLoading(true);

      const parts = bookingInfo.dateAndTime.split("T");
      const formattedDate = `${parts[0]} ${parts[1]}`;
      
      // const parts = bookingInfo.dateAndTime.split("T");
      // const datePieces = parts[0].split("-");
      // const timePieces = parts[1].split(":");
      // let hour = Number(timePieces[0]);
      // const ampm = hour >= 12 ? " PM" : " AM";
      // hour = hour % 12 || 12;
      // const formattedHour = String(hour).padStart(2, "0");
      // const formattedDate = `${datePieces[2]}/${datePieces[1]}/${datePieces[0]} ${formattedHour}:${timePieces[1]}${ampm}`;

      const finalPayload = {
        ...bookingInfo,
        dateAndTime: formattedDate,
        phoneNumber: String(bookingInfo.phoneNumber)
      };

      // console.log("TESTING VALIDATOR PATTERN:", finalPayload);

      const response = await axios.post(`${BaseURL}booking`, finalPayload);
      console.log("BACKEND SUCCESS INFO:", response);

      Swal.fire({
        title: "Success",
        text: "Booking successfully created!",
        icon: "success",
        confirmButtonColor: "#008d94"
      });

      setBookingInfo({
        fullName: "",
        phoneNumber: "",
        address: "",
        dateAndTime: "",
        instruction: ""
      });

    } catch (error) {
      // console.log("BACKEND ERROR INFO:", error);
      
      Swal.fire({
        title: "Booking Failed",
        text: "error.response?.data?.message ",
        icon: "error",
        confirmButtonColor: "#008d94"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="booking_container">
      <div className="booking_content">
        
        <div className="form_wrapper">
          <div className="booking_card">
            <h2 className="form_title">Book Our Laundry Pickup</h2>
            <p className="form_subtitle">Fill out the form bill to schedule your laundry pickup.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="input_wrapper">
                <FaUser className="input_icon" />
                <input 
                  type="text" 
                  placeholder="Name" 
                  name="fullName"
                  value={bookingInfo.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input_wrapper">
                <FaPhoneAlt className="input_icon" />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  name="phoneNumber"
                  value={bookingInfo.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input_wrapper">
                <FaMapMarkerAlt className="input_icon" />
                <input 
                  type="text" 
                  placeholder="Pickup Address" 
                  name="address"
                  value={bookingInfo.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="datetime_wrapper">
                <label>Pickup Date & Time</label>
                <input 
                  type="datetime-local" 
                  name="dateAndTime"
                  value={bookingInfo.dateAndTime}
                  onChange={handleInputChange}
                />
              </div>

              <div className="textarea_wrapper">
                <label>Special Instructions <span>(Optional)</span></label>
                <textarea 
                  placeholder="Any specific instructions for our team?"
                  name="instruction"
                  value={bookingInfo.instruction}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="booking_submit_btn" 
                disabled={isLoading}
              >
                {isLoading ? "Booking..." : "Submit"}
              </button>
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