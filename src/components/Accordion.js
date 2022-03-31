import React, {useState} from 'react'

// export default function Accordion() {

    const Accordion = ({ id, title, overview, description, link, image }) => {
    const [isActive, setIsActive] = useState(false);

        return (
            <div key={id}
                className="accordion-item personalProjects__accordion-item"
                onClick={() => setIsActive(!isActive)}>

                <div className="d-flex justify-content-between">
                    <h4 className="accordion-title personalProjects__accordion-title">{title}</h4>
                    <div>{isActive ? '-' : '+'}</div>
                </div>
                <p>{overview}</p>

                {isActive && 
                
                    <div className="row accordion-content personalProjects__accordion-content">
                        <div className='col-6 personalProjects__accordion-description'>
                            {description}
                        </div>
                        <div className='col-6 personalProjects__accordion-image'>
                            <img src={image} alt={title} width="70%" height="auto"/>
                        </div>
                        
                    </div>}
            </div>
        )
    }
export default Accordion;