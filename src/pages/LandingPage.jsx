import React from 'react'
import Header from '../components/landing-page/header/Header'
import HeroSection from '../components/landing-page/hero-section/HeroSection'
import Organization from '../components/landing-page/organization/Organization'
import SocialProof from '../components/landing-page/social-proof/SocialProof'
import Cta from '../components/landing-page/cta/Cta'
import Theme from '../components/landing-page/Organization-commitment/Theme'
import Homes from '../components/landing-page/homes/Properties'
import BLogs from '../components/landing-page/blogs/BLogs'
import Footer from '../components/landing-page/footer/Footer'
import './LandingPage.css'
  const LandingPage = () => {
    return (
      <div className='landing-page shadow-2xl shadow-black sticky top-4 bg-yellow-50'>
        <Header/>
        <div className='overflow-hidden flex flex-col '>
            <HeroSection/>
            <Homes/>
            <Organization/>
            <SocialProof/>
            <Cta/>
            <Theme/>
            
            <BLogs/>
            <Footer/>
            
        </div>
      </div>
    )
  }
  
  export default LandingPage