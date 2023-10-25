import React from 'react'

const Logo = ({logo}) => {
 
  return (
    <div className='logo p-2 md:p-4 items-center content-center'>

      {/**logo as prop */}
        <h1 className='pr-8'>{logo}</h1>

    </div>
  )
}

export default Logo