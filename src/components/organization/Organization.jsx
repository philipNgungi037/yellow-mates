import React from 'react'
import Features from './Features'
import Description from './Description'
import Team from './Team'
import WhyUs from './WhyUs'

const Organization = () => {
  return (
    <div className='organization w-full h-auto'>
        <WhyUs/>
        <Features/>
        <Team/>
        <Description/>

    </div>
  )
}

export default Organization