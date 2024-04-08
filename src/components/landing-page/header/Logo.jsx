import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({logo}) => {
 
  return (
    <div className='logo p-2 md:p-4 items-center flex content-center'>

      {/**logo as prop */}
      <Link to='/'className='flex items-center  ' >
        <img src='assets/images/logo-x.png' alt='logo' className='h-4 sm:h-8' />
        <h3 className='pr-4 md:pr-8  hover:text-yellow-600 text-xs '>{logo}</h3>
        </Link>

    </div>
  )
}

export default Logo