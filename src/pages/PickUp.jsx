import React from "react";
import "./css/pickup.css"
import { GiCheckMark } from "react-icons/gi";

const PickUp = () => {
  return (
    <div className="primepress_container">
      {/* HEADER NAVBAR */}
      

      {/* HERO SECTION */}
      <header className="pp_hero_section">
        <div className="pp_hero_left">
          <h1 className="pp_hero_title">Schedule Your<br />Laundry Pickup</h1>
          <p className="pp_hero_subtitle">
            Convenient and reliable laundry service at your doorstep.
          </p>
          <div className="pp_hero_bullets">
            <p><span className="teal_check">✓</span> Free Pickup & Delivery</p>
            <p><span className="teal_check">✓</span> Satisfaction Guaranteed</p>
          </div>
        </div>
        <div className="pp_hero_right">
          <div className="pp_hero_img_frame">
            <img 
              src="manBox.jpg" 
              alt="Laundry Delivery" 
            />
          </div>
        </div>
      </header>

      {/* MAIN MAIN BOOKING WORKSPACE */}
      <main className="pp_workspace">
        {/* Left Form Column */}
        <section className="pp_form_column">
          <div className="pp_form_card">
            <h2 className="pp_card_title">Book Our Laundry Pickup</h2>
            <p className="pp_card_sub">Fill out the form bill to schedule your laundry pickup.</p>
            
            <form className="pp_native_form">
              <div className="pp_input_wrapper">
                <span className="pp_field_icon">👤</span>
                <input type="text" placeholder="Name" required />
              </div>

              <div className="pp_input_wrapper">
                <span className="pp_field_icon">📞</span>
                <input type="tel" placeholder="Phone Number" required />
              </div>

              <div className="pp_input_wrapper">
                <span className="pp_field_icon">📍</span>
                <input type="text" placeholder="Pickup Address" required />
              </div>

              <div className="pp_input_inline_row">
                <label>Pickup Date & Time</label>
                <input type="text" className="pp_line_input" placeholder="___________________________" />
              </div>

              <div className="pp_textarea_wrapper">
                <label className="pp_area_label">Special Instructions <span>(Optional)</span></label>
                <textarea placeholder="Any specific instructions for our team?"></textarea>
              </div>

              <button type="button" className="pp_submit_btn">Submit</button>
            </form>
          </div>
          <p className="pp_security_footer">
            <span className="shield_icon">🛡️</span> We respect your privacy and ensure your data is secure.
          </p>
        </section>

        {/* Right Info Elements & Images Collage Column */}
        <section className="pp_collage_column">
          <div className="pp_collage_bullets">
            <p><span className="blue_check">✓</span> Free Pickup & Delivery</p>
            <p><span className="blue_check">✓</span> Satisfaction Guaranteed</p>
          </div>
          
          <div className="pp_stacked_collage">
            <div className="pp_blob_bg"></div>
            <div className="pp_frame frame_1">
              <img src="unboxingCloths.jpg" alt="Sorting clothes" />
            </div>
            <div className="pp_frame frame_2">
              <img src="tumbsUp.jpg" alt="Thumbs up customer" />
            </div>
            <div className="pp_frame frame_3">
              <img src="smiles.jpg" alt="Smiley client" />
            </div>
          </div>
        </section>
      </main>

      {/* MID PAGE BANNER HIGHLIGHT CARDS */}
      <section className="pp_highlight_ribbon">
        <div className="pp_highlight_row">
          <div className="pp_h_card">
            <div className="pp_h_icon_container blue_variant">✓</div>
            <div className="pp_h_info">
              <h3>Free Pickup & Delivery</h3>
              <p>Enjoy Convenient Pickup and delivery right at your doorstep.</p>
            </div>
          </div>
          
          <div className="pp_h_card">
            <div className="pp_h_icon_container teal_variant">🌐</div>
            <div className="pp_h_info">
              <h3>Within 24 hours</h3>
              <p>Receive your fresh, clean laundry back in just 24 hours.</p>
            </div>
          </div>
        </div>
        <div className="pp_ribbon_security">
          <span className="shield_icon">🛡️</span> We respect your privacy and ensure your data is secure.
        </div>
      </section>

      {/* BRAND FOOTER SYSTEM */}
      <footer className="pp_footer">
        <div className="pp_footer_grid">
          <div className="pp_footer_block">
            <h4>ABOUT US</h4>
            <a href="#dev">Delivery Information</a>
            <a href="#priv">Privacy Policy</a>
            <a href="#term">Terms & Condition</a>
            <a href="#cont">Contact Us</a>
          </div>

          <div className="pp_footer_block">
            <h4>OFFICIAL INFO</h4>
            <p>📥 Primepress@gmail.com</p>
            <p>📍 No 5, Idowu Lane, Ikeja Lagos</p>
          </div>

          <div className="pp_footer_block">
            <h4>OPEN HOURS</h4>
            <p>Mon - Sat: 8 am - 7 pm</p>
            <p>Sunday: Closed</p>
          </div>

          <div className="pp_footer_block">
            <h4>HELP & SUPPORT</h4>
            <a href="#help">Contact Us</a>
            <p>Chat 24/7 Services</p>
          </div>

          <div className="pp_footer_block">
            <h4>FOLLOW US</h4>
            <div className="pp_social_row">
              <a href="#tw" className="pp_social_btn">𝕏</a>
              <a href="#ig" className="pp_social_btn">📸</a>
              <a href="#fb" className="pp_social_btn">📘</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PickUp;























// const BookingPage = () => {
//   return (
//     <div className="laundry_page">
//       {/* Navbar Section */}
//       <nav className="laundry_navbar">
//         <div className="nav_logo">
//           <span className="logo_icon">🧺</span> PrimePress <span className="logo_sub">Laundry</span>
//         </div>
//         <div className="nav_links">
//           <a href="#home">Home</a>
//           <a href="#services">Service & Pricing</a>
//           <a href="#pickup" className="active_link">Pickup</a>
//           <a href="#login">Log in</a>
//           <button className="btn_book">Book Now</button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="laundry_hero">
//         <div className="hero_text">
//           <h1>Schedule Your Laundry Pickup</h1>
//           <p>Convenient and reliable laundry service at your doorstep.</p>
//           <ul className="hero_checks">
//             <li><span className="check_icon">✓</span> Free Pickup & Delivery</li>
//             <li><span className="check_icon">✓</span> Satisfaction Guaranteed</li>
//           </ul>
//         </div>
//         <div className="hero_image_box">
//           <img 
//             src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=600" 
//             alt="Delivery worker carrying laundry box outside" 
//           />
//         </div>
//       </header>

//       {/* Main Content Area: Form & Collage Side-by-Side */}
//       <main className="booking_container">
//         {/* Left Side: Form Box */}
//         <section className="form_section">
//           <div className="form_card">
//             <h2>Book Our Laundry Pickup</h2>
//             <p className="form_subtitle">Fill out the form below to schedule your laundry pickup.</p>
            
//             <form className="pickup_form">
//               <div className="form_input_group">
//                 <span className="input_icon">👤</span>
//                 <input type="text" placeholder="Name" required />
//               </div>

//               <div className="form_input_group">
//                 <span className="input_icon">📞</span>
//                 <input type="tel" placeholder="Phone Number" required />
//               </div>

//               <div className="form_input_group">
//                 <span className="input_icon">📍</span>
//                 <input type="text" placeholder="Pickup Address" required />
//               </div>

//               <div className="form_input_group inline_group">
//                 <label>Pickup Date & Time</label>
//                 <input type="datetime-local" required />
//               </div>

//               <div className="form_textarea_group">
//                 <label>Special Instructions <span>(Optional)</span></label>
//                 <textarea placeholder="Any specific instructions for our team?"></textarea>
//               </div>

//               <button type="button" className="btn_submit">Submit</button>
//             </form>
//           </div>
//           <p className="privacy_note">🛡️ We respect your privacy and ensure your data is secure.</p>
//         </section>

//         {/* Right Side: Features & Collage Images */}
//         <section className="collage_section">
//           <ul className="collage_checks">
//             <li><span className="check_blue">✓</span> Free Pickup & Delivery</li>
//             <li><span className="check_blue">✓</span> Satisfaction Guaranteed</li>
//           </ul>
          
//           <div className="image_collage">
//             <div className="collage_img img_top">
//               <img src="https://images.unsplash.com/photo-1545173168-9f1947e80154?q=80&w=300" alt="Folding clothes" />
//             </div>
//             <div className="collage_img img_mid">
//               <img src="https://images.unsplash.com/photo-1563132337-f159f484226c?q=80&w=300" alt="Happy client thumbs up" />
//             </div>
//             <div className="collage_img img_bottom">
//               <img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=300" alt="Clean clothes in closet" />
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Highlight Info Cards Row */}
//       <section className="info_cards_bar">
//         <div className="info_card">
//           <div className="info_card_icon blue_check_box">✓</div>
//           <div className="info_card_content">
//             <h3>Free Pickup & Delivery</h3>
//             <p>Enjoy Convenient Pickup and delivery right at your doorstep.</p>
//           </div>
//         </div>
        
//         <div className="info_card">
//           <div className="info_card_icon timer_icon">🕒</div>
//           <div className="info_card_content">
//             <h3>Within 24 hours</h3>
//             <p>Receive your fresh, clean laundry back in just 24 hours.</p>
//           </div>
//         </div>
//       </section>

//       <div className="mid_privacy_banner">
//         <p>🛡️ We respect your privacy and ensure your data is secure.</p>
//       </div>

//       {/* Footer Section */}
//       <footer className="laundry_footer">
//         <div className="footer_grid">
//           <div className="footer_col">
//             <h4>ABOUT US</h4>
//             <a href="#delivery">Delivery Information</a>
//             <a href="#privacy">Privacy Policy</a>
//             <a href="#terms">Terms & Condition</a>
//             <a href="#contact">Contact Us</a>
//           </div>

//           <div className="footer_col">
//             <h4>OFFICIAL INFO</h4>
//             <p>📧 Primepress@gmail.com</p>
//             <p>📍 No 5, Idowu Lane, Ikeja Lagos</p>
//           </div>

//           <div className="footer_col">
//             <h4>OPEN HOURS</h4>
//             <p>Mon - Sat: 8 am - 7 pm</p>
//             <p>Sunday: Closed</p>
//           </div>

//           <div className="footer_col">
//             <h4>HELP & SUPPORT</h4>
//             <a href="#contact">Contact Us</a>
//             <p>Chat 24/7 Services</p>
//           </div>

//           <div className="footer_col">
//             <h4>FOLLOW US</h4>
//             <div className="social_icons">
//               <a href="#tw" className="social_link">🕊️</a>
//               <a href="#ig" className="social_link">📸</a>
//               <a href="#fb" className="social_link">👥</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default BookingPage;


























// import React from 'react'
// import "../Styles/BookingPage.css"

// const BookingPage = () => {
//   return (
//     <div>
//       <h4>hello world</h4>
//     </div>
//   )
// }

// export default BookingPage
