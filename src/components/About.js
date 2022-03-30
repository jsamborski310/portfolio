import React from "react";

export default function About() {
  return (
    <div className="about__container">
      <div className="about__container-background">
        <img
          src="/images/abstract-gridLines.png"
          alt="Abstract grid with vertical lines."
          width="400px"
          height="auto"
        />
      </div>
      <div className="container">
      <div className="row about__row">
        <div className="
            col col-12 col-lg-6 col-md-6 col-sm-12
            order-lg-1 order-md-1 order-sm-2">
          <p>
            I am forever curious. Interested in the interesting. Perpetually
            looking for ways to create designs that are bold and clean, and
            websites that are intuitive, simple and convenient.
          </p>
          <p>
            Since 2016, I have partnered with incredible non-profit
            organizations, medical associations, and small businesses to design
            and develop websites that streamlines their process, provides them
            with functionality that enhance their operations, and is useful and
            helpful to their users.
          </p>
        </div>
        <div className="
            col col-12 col-lg-6 col-md-6 col-sm-12
            order-lg-2 order-md-2 order-sm-1">
          <div>
            <img
              src="/images/abstract-js.png"
              alt="Juanita Samborski looking over shoulder at the river."
              width="400px"
              height="auto"
            />
          </div>
          <div className="primary-button__container">
            <hr className="primary-button__line" />
            <button className="primary-button">View Resume</button>
          </div>
        </div>
      </div>
      </div>

      <div>        
        <div className="borderless-button__container">
            <hr className="borderless-button__line" />
            <button className="borderless-button">Projects</button>
        </div>
      </div>



    </div>
  );
}
