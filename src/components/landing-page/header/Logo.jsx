import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({logo}) => {
 
  return (
    <div className='logo p-2 md:p-4 items-center content-center'>

      {/**logo as prop */}
      <Link to='/'>
        <h1 className='pr-4 md:pr-8 hover:text-yellow-100 text-xs sm:text-sm md:text-xl lg:text-2xl'>{logo}</h1>
        </Link>

    </div>
  )
}

export default Logo