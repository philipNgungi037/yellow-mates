  import React from 'react'
import Header from '../components/header/Header'
import HeroSection from '../components/hero-section/HeroSection'
  
  const LandingPage = () => {
    return (
      <div className='landing-page'>
        <Header/>
        <div className=''>
            <HeroSection/>
        </div>
      </div>
    )
  }
  
  export default LandingPage