import React from 'react'

export default function Contact() {
  return (
    <div className="contact__container">

      <div className="contact__container-background">
        <img
          src="/images/abstract-gridLines.png"
          alt="Abstract grid with vertical lines."
          width="400px"
          height="auto"
        />
      </div>

        <div className='row contact__statement'>
            <div className='col-5'>
                <h2>
                    Let's create something together...
                </h2>
            </div>
            <div className='col-6 contact__info'>
                <h4>
                    Reach Me By Email
                </h4>
                <div className='contact__email'>
                    <img src="/icons/email-add-black.png" alt="Email icon with plus sign." height="20px" width="auto"/>
                    <p>juanita(at)breakthroughwebsite(dot)com</p>
                </div>
            </div>
        </div>

        <div className='contact__home-footer'>
           <p>Copyright Ⓒ 2016-2022. All Rights Reserved.</p> 
        </div>

       

            
      
    </div>
  )
}
