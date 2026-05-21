import React from 'react'
import Behind from '../components/Behind'
import Hero from '../components/Hero'
import HowWeWork from '../components/HowWeWork'
import Review from '../components/Review'
import Why from '../components/Why'
import HomeFooter from '../components/HomeFooter'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Behind/>
      <HowWeWork/>
      <Why/>
      <Review/>
      <HomeFooter/>
    </div>
  )
}

export default Home
