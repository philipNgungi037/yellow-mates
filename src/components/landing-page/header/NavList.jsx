import { React, useState } from "react";
import "./navlist.css";
import Navs from "./NavData";
import { Link } from "react-router-dom";

const NavList = () => {
  // state to open/close toggle-menu
  const [isOpen, setIsOpen] = useState(false);

  //function to toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="nav-list p-2 sm:p-4   text-black ">
      {/* main nav-bar */}
      <div className="nav-bar hidden lg:block">
        
        <ul className="nav-lists flex justify-end items-center content-center   gap-0">
        {Navs.map((navItem, index) => (
            <li className='nav-item  hover:bg-yellow-100 p-4 ' key={index}>
              <Link to={navItem.link}>{navItem.name}</Link>
            </li>
          ))}
        </ul> 
      </div>

      {/* //menu-button */}
      <div className="menu lg:hidden">
        <button onClick={toggleMenu} className="menu-button text-xl md:text-4xl ">
          {
            isOpen ? (<ion-icon name="close-outline"></ion-icon>) : (<ion-icon name="menu-outline" />)
          }
        </button>
      </div>

      {/* phone/tabs menu-list */}
      {isOpen &&
        <div className="menu-list fixed left-0 w-full p-16 h-full  bg-yellow-50">
          <ul className="nav-item flex flex-col  justify-end items-center content-center gap-4 ">
             {Navs.map((navItem, index) => (
              <li key={index}>
                <Link to={navItem.link}>{navItem.name}</Link>
              </li>
            ))}
          </ul>
        </div>}
    </div>
  );
};

export default NavList;
