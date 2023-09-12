import React from 'react'
import Logo from './Logo'
import NavList from './NavList'

const Header = () => {
  return (
    <div className='app-header  sticky top-0 bg-white flex justify-between items-center  mt-2 z-40 '>
      <Logo/>
      <NavList/>
    </div>
  )
}

export default Header