import React, { useState, useEffect } from 'react';
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import logo from '../../assets/educationlogo.png';
 
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [toggleMenu, setToggleMenu] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={` ${scrolling ? 'scrolled' : ''}`}>
      <img className='nav_logo' src={logo} alt='logo' />
      <ul className='app__navbar-links'>
         
        <li><a href="#home"  >Home</a></li>
        <li><a href="#Program"  >Program</a></li>
        <li><a href="#AboutUs"  >About Us</a></li>
        <li><a href="#Campus"  >Campus</a></li>            
        <li><a href="#Testimonials" >Testimonials</a></li>
        <li>
          <button className='btn'>Contact Us</button>
        </li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#Program" onClick={() => setToggleMenu(false)}>Program</a></li>
              <li><a href="#AboutUs" onClick={() => setToggleMenu(false)}>About Us</a></li>
              <li><a href="#Campus" onClick={() => setToggleMenu(false)}>Campus</a></li>            
              <li><a href="#Testimonials" onClick={() => setToggleMenu(false)}>Testimonials</a></li>
            </ul>
          </div>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
