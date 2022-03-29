import React from "react";
import toolkitIcons from "../data/toolkit.json";

export default function Toolkit() {
  return (
    <div className="toolkit__container">
      <div className="row">
        <div className="col col-3 toolkit__title">
          <h1>Toolkit</h1>
        </div>

        <div className="col col-2 toolkit__subtitle">
            <h3>Experience</h3>
        </div>

        
          <div className="col col-7 toolkit__icon-container">
            {toolkitIcons.map(({ id, altText, image }) => (
              <div key={id}>
                <img src={image} alt={altText} width="auto" height="50px" />
              </div>
            ))}
          </div>
        </div>
      </div>
   
  );
}
