import React from 'react'
import Cards from './Props/Cards'
import "../components/Css/HomeCssFile/Why.css"

import iconDelivery from '../assets/delivery-icon.png'
import iconPricing from '../assets/pricing-icon.png'
import iconEco from '../assets/recycle.png'
import iconTrusted from '../assets/thumbUp.png'

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      imageSrc: iconDelivery,
      title: "24- Hours Delivery",
      description: "Quick turn around time."
    },
    {
      id: 2,
      imageSrc: iconPricing,
      title: "Affordable Pricing",
      description: "Best rates in town."
    },
    {
      id: 3,
      imageSrc: iconEco,
      title: "Eco-Friendly Products",
      description: "Safe for you & the environment."
    },
    {
      id: 4,
      imageSrc: iconTrusted,
      title: "Trusted by 1,000+ Customers",
      description: "Top-rated Service"
    }
  ]

  return (
    <section className="why-section">
      <div className="why-container">
        
        <div className="why-header-row">
          <div className="why-divider-line"></div>
          <h2 className="why-main-heading">Why Choose Us?</h2>
          <div className="why-divider-line"></div>
        </div>

        <div className="why-cards-grid">
          {features.map((item) => (
            <Cards
              key={item.id}
              img={item.imageSrc}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs