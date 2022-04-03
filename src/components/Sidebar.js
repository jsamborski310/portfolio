import React, {useState} from 'react';
import { Offcanvas } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {NavLink as Link} from "react-router-dom";

export default function Sidebar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // --------------------

  return (
    <div className='sidebar__container'>

    {/* Top Right Menu */}
      <div>
        <div className='triangle-topright'></div>

        {/* Top Right Menu Button */}
        <button className='sidebar__menu-button' onClick={handleShow}>
          <img
              src="/images/Menu-Icon.png"
              alt="Hamburger Menu Icon."
              className='sidebar__menu-icon-top-right'
              height="25px"
            />
          </button>
      </div>

    {/* Sidebar Menu */}
      <div className='sidebar__sidebar'>

      {/* Logo */}
        <div>
          <img
            src="/images/logo.png"
            alt="Juanita Samborski Logo."
            className='sidebar__logo'
            height="60px"
          />
        </div>

      {/* Menu Hamburger */}
        <div className='sidebar__menu-icon-section'>
          <h3 className='sidebar__menu-title'>menu</h3>


      {/* Offset Menu Button Sidebar */}

          <button className='sidebar__menu-button' onClick={handleShow}>
            <img
              src="/images/Menu-Icon.png"
              alt="Hamburger Menu Icon."
              className='sidebar__menu-icon'
              height="25px"
            />
          </button>

        {/* Offset Menu */}
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
              

              <HashLink to="/#home">Link to Hash Fragment</HashLink> 
              <HashLink to="/#contact">Link to Hash Fragment</HashLink>


              <Link to="/#home"><h1>Home</h1></Link>
              <Link to="/#contact"><h1>Contact</h1></Link>

            </Offcanvas.Body>
          </Offcanvas>


      {/* ------------ */}

      </div>

      {/* Footer Icons */}
        <div className='sidebar__menu-footer-icons'>

        <a href="https://github.com/jsamborski310" rel='noreferrer' target="_blank">
          <img
            src="/icons/github-black.png"
            alt="Github Icon."
            className='sidebar__menu-contact-icon' 
          />
        </a>

        <a href="https://www.linkedin.com/in/juanita-samborski/" rel='noreferrer' target="_blank">
          <img
            src="/icons/linkedin-in-brands.png"
            alt="Linkedin Icon."
            className='sidebar__menu-contact-icon'         
          />  
        </a>

        <a href="mailto:juanita@48fourteen.com">
          <img
            src="/icons/email-add-black.png"
            alt="Email Icon."
            className='sidebar__menu-contact-icon'        
          />  
        </a> 


        <a href="https://twitter.com/SamborskiUp" rel='noreferrer' target="_blank">
          <img
            src="/icons/twitter-brands.png"
            alt="Twitter Icon."
            className='sidebar__menu-contact-icon'       
          />     
        </a>                 

        </div>
      </div>
      
    </div>
  )
}
