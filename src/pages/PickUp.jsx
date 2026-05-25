import React from 'react'
import PickUpHero from '../components/PickUp/PickUpHero'
import BookingSection from '../components/PickUp/BookingSection'
import PickUpFooter from '../components/PickUp/PickUpFooter'  
import Footer from '../components/Props/Footer'    
const PickUp = () => {
  return (
    <div>
      <PickUpHero/>
      <BookingSection/>
      <PickUpFooter/> 
      <Footer/>
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
