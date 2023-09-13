import React from 'react'
import Features from './Features'
import Description from './Description'
import Team from './Team'

const Organization = () => {
  return (
    <div className='organization w-full h-auto'>
        <Features/>
        <Team/>
        <Description/>

    </div>
  )
}

export default Organization