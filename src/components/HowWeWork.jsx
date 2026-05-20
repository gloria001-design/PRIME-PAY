import React from 'react'
import Cards from './Props/Cards'
import '../components/Css/HomeCssFile/HowWeWork.css'

import icon1 from '../assets/fluent-emoji-flat_calendar.png'
import icon2 from '../assets/twemoji_oncoming-bus.png'
import icon3 from '../assets/icon-park_washing-machine-one.png'

const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      imageSrc: icon1,
      title: "Schedule Pickup",
      description: "Easy online booking",
      customClass: "card-step-bottom"
    },
    {
      id: 2,
      imageSrc: icon2,
      title: "We Wash & Fold",
      description: "Expert Cleaning & folding",
      customClass: "card-step-middle"
    },
    {
      id: 3,
      imageSrc: icon3,
      title: "Delivered to your Door",
      description: "Back to you in 24 hours",
      customClass: "card-step-top"
    }
  ]

  return (
    <section className="work-section">
      <div className="work-container">
        
        <div className="work-header-content">
          <h2 className="work-heading">How We Work</h2>
          <p className="work-subheading">
            Laundry Made Easy With Our <br />
            Simple Process
          </p>
          <button className="btn-schedule">Schedule Now</button>
        </div>

        <div className="work-right-cards">
          {steps.map((step) => (
            <Cards
              key={step.id}
              img={step.imageSrc}
              title={step.title}
              description={step.description}
              customClass={step.customClass}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default HowWeWork