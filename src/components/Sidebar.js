import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar__container'>

    {/* Top Right Menu */}
      <div>
        <div className='triangle-topright'></div>
          <img
              src="/images/Menu-Icon.png"
              alt="Hamburger Menu Icon."
              className='sidebar__menu-icon-top-right'
              height="25px"
            />
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
          <img
            src="/images/Menu-Icon.png"
            alt="Hamburger Menu Icon."
            className='sidebar__menu-icon'
            height="25px"
          />
        </div>

      {/* Footer Icons */}
        <div className='sidebar__menu-footer-icons'>
          <img
            src="/icons/github-black.png"
            alt="Github Icon."
            className='sidebar__menu-contact-icon'
            
          />

        <img
          src="/icons/linkedin-in-brands.png"
          alt="Linkedin Icon."
          className='sidebar__menu-contact-icon'
         
        />  

        <img
          src="/icons/email-add-black.png"
          alt="Email Icon."
          className='sidebar__menu-contact-icon'
          
        />   

        <img
          src="/icons/twitter-brands.png"
          alt="Twitter Icon."
          className='sidebar__menu-contact-icon'
        
        />                      

        </div>

      </div>
      
    </div>
  )
}
