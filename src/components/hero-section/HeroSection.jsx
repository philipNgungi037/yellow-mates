import React from 'react'
import Search from './Search'
import Carousel from './Carousel'

const HeroSection = () => {
  return (
    <div className='hero-section w-full h-auto mt-2   '>
        <h1 className='absolute text-center'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>
       
        <Search /> 
        
        <Carousel/>
        
    </div>
  )
}

export default HeroSection