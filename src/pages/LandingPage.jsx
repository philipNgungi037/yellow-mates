  import React from 'react'
import Header from '../components/header/Header'
import HeroSection from '../components/hero-section/HeroSection'
import Organization from '../components/organization/Organization'
  
  const LandingPage = () => {
    return (
      <div className='landing-page'>
        <Header/>
        <div className=''>
            <HeroSection/>
            <Organization/>
        </div>
      </div>
    )
  }
  
  export default LandingPage