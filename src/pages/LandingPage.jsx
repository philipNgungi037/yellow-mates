import React from 'react'
import Header from '../components/header/Header'
import HeroSection from '../components/hero-section/HeroSection'
import Organization from '../components/organization/Organization'
import SocialProof from '../components/social-proof/SocialProof'
import Cta from '../components/cta/Cta'
import Theme from '../components/Organization-commitment/Theme'
import Homes from '../components/homes/Homes'
import BLogs from '../components/blogs/BLogs'
import Footer from '../components/footer/Footer'
import './LandingPage.css'
  const LandingPage = () => {
    return (
      <div className='landing-page shadow-2xl shadow-black sticky top-4 bg-yellow-50'>
        <Header/>
        <div className='flex flex-col '>
            <HeroSection/>
            <Organization/>
            <SocialProof/>
            <Cta/>
            <Theme/>
            <Homes/>
            <BLogs/>
            <Footer/>
            
        </div>
      </div>
    )
  }
  
  export default LandingPage