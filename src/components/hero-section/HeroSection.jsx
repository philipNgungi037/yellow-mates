import React from 'react'
import Search from './Search'
import Carousel from './Carousel'

const HeroSection = () => {
  return (
    <div className='hero-section w-full h-96 m-2 bg-ft2-image  relative'>
        <h1 className='absolute text-center'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>
       
        <Search /> 
        
        <Carousel/>
        
    </div>
  )
}

export default HeroSection