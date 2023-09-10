import React from 'react'
import './navlist.css'

const NavList = () => {
  return (
    <div className='nav-list p-4  '>
        <ul className='nav-item flex justify-end items-center content-center gap-4'>
            <li><a href='about-us'>About us</a></li>
            <li><a href='dev'>Develoments</a></li>
            <li><a href='your-home'>Find your home</a></li>
            <li><a href='contact-us'>Contact us</a></li>
        </ul>
    </div>
  )
}

export default NavList