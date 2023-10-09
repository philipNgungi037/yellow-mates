import React from 'react'
import Logo from './Logo'
import NavList from './NavList'

const Header = () => {
  return (
    <div className='app-header overflow-hidden  sticky top-0 z-40  bg-yellow-50 flex justify-between items-center  '>
      <Logo/>
      <NavList/> 
    </div>
  )
}

export default Header