import React from 'react'
import Btn from '../Props/Btn'
import '../Css/ServiceCssFile/Pricing.css'

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2>How Our Pricing Works</h2>
      </div>
      
      <p className="pricing-sub">Transparent and simple pricing based on your laundry needs.</p>

      <div className="pricing-grid">
        <div className="pricing-card">
          <div className="pricing-card-header">
            <h3>Wash & Fold</h3>
            <span>Based on weight</span>
          </div>
          <div className="pricing-highlight">Starting at $5 per kg</div>
          <ul className="pricing-list">
            <li>Small Load (5kg)</li>
            <li>Medium Load (10kg)</li>
            <li>Large Load (15kg)</li>
          </ul>
          <div className="pricing-btn-box">
            <Btn text="View Pricing" className="btn-pricing-view" />
          </div>
        </div>

        <div className="pricing-card">
          <div className="pricing-card-header">
            <h3>Dry Cleaning</h3>
            <span>Based on item type</span>
          </div>
          <div className="pricing-highlight">Starting at $7 per item</div>
          <div className="pricing-table">
            <div className="table-row"><span>Shirt</span><strong>$10</strong></div>
            <div className="table-row"><span>Trouser</span><strong>$15</strong></div>
            <div className="table-row"><span>Dress</span><strong>$20</strong></div>
            <div className="table-row"><span>Suit</span><strong>$30</strong></div>
          </div>
        </div>
      </div>

      <div className="pricing-footer">
        <span>✓</span> <strong>No hidden Charges.</strong> What you see is what you pay.
      </div>
    </section>
  )
}

export default Pricing