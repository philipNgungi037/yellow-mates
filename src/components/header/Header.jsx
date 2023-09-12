import React from 'react'
import Logo from './Logo'
import NavList from './NavList'

const Header = () => {
  return (
    <div className='app-header  border-2 flex justify-between items-center border-black m-2 z-40 rounded-md'>
      <Logo/>
      <NavList/>
    </div>
  )
}

export default Header