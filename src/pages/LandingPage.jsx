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
  
  const LandingPage = () => {
    return (
      <div className='landing-page'>
        <Header/>
        <div className='flex flex-col gap-8  '>
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