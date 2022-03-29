import React from 'react'
import toolkitIcons from '../data/toolkit.json'

export default function Toolkit() {
  return (
    <div>
        
      {toolkitIcons.map(({id, altText, image}) => (
          <div key={id}>
            <img src={image} alt={altText} />
          </div>
      ))}
     
    </div>
  )
}
