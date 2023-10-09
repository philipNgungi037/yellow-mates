import { React, useState } from "react";
import "./navlist.css";

const NavList = () => {
  // state to open/close toggle-menu
  const [isOpen, setIsOpen] = useState(false);

  //function to toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="nav-list p-2 sm:p-4   text-black ">
      {/* nav-bar */}
      <div className="nav-bar hidden sm:block">
        <ul className="nav-item flex justify-end items-center content-center gap-4">
          <li>
            <a href="about-us">About us</a>
          </li>
          <li>
            <a href="dev">Developments</a>
          </li>
          <li>
            <a href="your-home">Find land</a>
          </li>
          <li>
            <a href="contact-us">Contact us</a>
          </li>
        </ul>
      </div>

      {/* //menu-button */}
      <div className="menu sm:hidden">
        <button onClick={toggleMenu} className="menu-button text-4xl">
          <ion-icon name="menu-outline" />
        </button>
      </div>

      {/* menu-list */}
      {isOpen &&
        <div className="menu-list fixed left-0 w-full p-16 h-full  bg-yellow-50">
          <ul className="nav-item flex flex-col  justify-end items-center content-center gap-4 ">
            <li>
              <a href="about-us">About us</a>
            </li>
            <li>
              <a href="dev">Developments</a>
            </li>
            <li>
              <a href="your-home">Find land</a>
            </li>
            <li>
              <a href="contact-us">Contact us</a>
            </li>
          </ul>
        </div>}
    </div>
  );
};

export default NavList;
