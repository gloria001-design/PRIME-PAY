import React from 'react'
import Cards from "../Props/Cards"
import WashIcon from '../../assets/icon-park_washing-machine-one.png' 
import DryIcon from '../../assets/hanger3.png'
// import IronIcon from '../assets/iron.png'
import IronIcon from "../../assets/iron.png"
import ExpressIcon from '../../assets/delivery-icon.png'
import "../Css/ServiceCssFile/OurService.css"
import Btn from "../Props/Btn"
const Service = () => {
  const servicesData = [
    { img: WashIcon, title: "We Wash & Fold", description: "We wash, dry and neatly fold your laundry" },
    { img: DryIcon, title: "Dry Cleaning", description: "Professional dry cleaning for delicate garments." },
    { img: IronIcon, title: "Ironing Only", description: "Expert ironing for wrinkle clothes." },
    { img: ExpressIcon, title: "Express Service", description: "Need it today? We offer same-day service." }
  ]

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our Service</h2>
      </div>

      <div className="services-grid">
        {servicesData.map((item, index) => (
          <Cards 
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
            showBtn={true}
          />
        ))}
    
      </div>
    </section>
  )
}

export default Service