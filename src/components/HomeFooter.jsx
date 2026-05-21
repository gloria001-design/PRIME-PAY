import React from 'react'
import Footer from './Props/Footer'
import "../components/Css/HomeCssFile/HomeFooter.css"    
import Btn from './Props/Btn'

const HomeFooter = () => {
  return (
    <div className='home-footer'>
      <div className='home-footer-container'>
        <div className='home-footer-content'>
          <h1>Let's Take Laundry Off Your To-Do List.</h1>
          <Btn text="Book Your First Pickup Today" className="home-footer-btn"/>
        </div>
      </div>
      <Footer/>  
    </div>
  )
}

export default HomeFooter