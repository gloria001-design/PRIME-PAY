import React from 'react'
import "../components/Css/HomeCssFile/Behind.css"
import Granny from "../assets/Rectangle 5.png"
import Sissy from "../assets/Rectangle 6.png"
const behind = () => {
return (
  <section className="behind-section">
    <div className="behind-container">
      
      <div className="behind-images-layout">
        <div className="behind-img-main-wrapper">
          <img 
            src={Granny}
            alt="Happy customer with fresh clothes" 
            className="behind-img-main" 
          />
        </div>
        <div className="behind-img-sub-wrapper">
          <img 
            src={Sissy}
            alt="Laundry worker sorting clothes" 
            className="behind-img-sub" 
          />
        </div>
      </div>

      <div className="behind-content">
        <h2 className="behind-heading">
          Behind PrimePress Laundry <br />
          Company Stories
        </h2>
        
        <p className="behind-text">
          At PrimePress laundry, we go beyond washing <br /> clothes... we deliver freshness, convenience, <br /> and care in every service.
        </p>

        <ul className="behind-features-list">
          <li className="behind-feature-item">
            <span className="feature-check">✓</span> Fresh clothes, Happy customers
          </li>
          <li className="behind-feature-item">
            <span className="feature-check">✓</span> Wash. Fold. Refresh
          </li>
          <li className="behind-feature-item">
            <span className="feature-check">✓</span> Sparkling Clean Every Time
          </li>
          <li className="behind-feature-item">
            <span className="feature-check">✓</span> Professional Laundry Care
          </li>
        </ul>
      </div>

    </div>
  </section>
)
}

export default behind
