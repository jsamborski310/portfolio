import React, {useState} from 'react';
import PopupMenu from './PopupMenu'

export default function Sidebar() {
  console.log("something...")

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    console.log("Something", isOpen)
    setIsOpen(!isOpen);
  }

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


{/* --------- */}

        <button type="button" onClick={togglePopup}>
            <img
              src="/images/Menu-Icon.png"
              alt="Hamburger Menu Icon."
              className='sidebar__menu-icon'
              height="25px"
            />
        </button>
<div>
  
        {isOpen && <PopupMenu
          content={<>
            <b>Design your Popup</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Test button</button>
          </>}
          handleClose={togglePopup}
        />}
  </div>

{/* ------------ */}

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
