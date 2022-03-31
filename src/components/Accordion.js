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

                {isActive && <div className="accordion-content">{description}</div>}
            </div>
        )
    }
export default Accordion;