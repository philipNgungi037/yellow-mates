import React from 'react'
import imageData from './organization-data'
import './organization.css'

const Features = () => {
  return (
    <div className='features mx-2 '>
        <h1> Neque porro quisquam est qui dolorem </h1>
        <div className='features-card flex justify-between gap-0'>
      {imageData.map((item, index) => (
        <div key={index}>
          <img className=' feat-img' src={item.image} alt={item.description} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Features