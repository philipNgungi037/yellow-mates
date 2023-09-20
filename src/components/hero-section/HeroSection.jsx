import React from 'react'
import Search from './Search'
import Carousel from './Carousel'

const HeroSection = () => {
  return (
    <div className='hero-section w-full h-auto mt-2 flex flex-col items-center content-center   '>
        <h2 className='absolute px-4 text-center'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua <span className=''><Search/></span> </h2>
        <Carousel/>
        
    </div>
  )
}

export default HeroSection