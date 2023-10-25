import React from 'react'
import Features from './Features'
import Description from './Description'
import Team from './Team'
import WhyUs from './WhyUs'

const Organization = () => {
  const sectionHeader = "our team structure and services";
  return (
    <div className='organization w-full h-auto flex flex-col  space-y-16'>
        <WhyUs/>
        <Features header={sectionHeader}/>
        <Team/>
        <Description/>

    </div>
  )
}

export default Organization