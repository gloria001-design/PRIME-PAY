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
  )
}

export default PickUp
