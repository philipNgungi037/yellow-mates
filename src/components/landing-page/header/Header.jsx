import React from 'react'
import Logo from './Logo'
import NavList from './NavList'

const Header = () => {
  const logo = 'YELLOW MATES';
  return (
    <div className='app-header overflow-hidden  sticky top-0 z-40 bg-white flex justify-between items-center '>
      <Logo 
      logo ={logo}
      />
      <NavList/> 
    </div>
  )
}

export default Header