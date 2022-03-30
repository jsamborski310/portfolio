import React from 'react'

export default function About() {
  return (
    <div className='about__container'>
      <div className='row about__row'>
          <div className='col'>

            <p>
                I am forever curious. Interested in the interesting. Perpetually looking for ways to create designs that are bold and clean, and websites that are intuitive, simple and convenient.  
            </p>
            <p>
                Since 2016, I have partnered with incredible non-profit organizations, medical associations, and small businesses to design and develop websites that streamlines their process, provides them with functionality that enhance their operations, and is useful and helpful to their users.
            </p>
          </div>
          <div className='col'>
            <div>
                <img
                src="/images/abstract-js.png"
                alt="Abstract box with repeated lines angled."
                width="400px"
                height="auto"
                />
            </div>
            <div className='primary-button__container'>
                <hr className="primary-button__line" />
                <button className='primary-button'>
                    View Resume
                </button>
            </div>
          </div>
      </div>


    </div>
  )
}
