import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'

const Menu = () => (
  <>
    <p><a href = "#home">Home</a></p>
    <p><a href = "#info">About Me</a></p>
    <p><a href = "#resume">Resume</a></p>
    <p><a href = "#featured">Featured</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="car__navbar">
      <div className="car__navbar-links"> 
        <div className="car__navbar-links_logo">
          Rohan Jaryal
        </div>
        <div className="car__navbar-links_section">
          <Menu />
        </div>
      </div>  
      <div className="car__navbar-sign">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <button type="button">Click Me</button>
        </a>
      </div>
      <div className="car__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color ="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color ="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="car__navbar-menu_section scale-up-center">
            <div className="car__navbar-menu_section-links">
              <Menu />
              <div className="car__navbar-menu_section-links-sign">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <button type="button">Click Me</button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar