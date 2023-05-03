import React, { useState } from 'react'

// Create an accordion that toggles text content on click of the accordion 
// header using React State

const Accordion = () => {

    const [isShow, setIsShow] = useState(false);

    const handleClick = () => {
        setIsShow(!isShow);
    }

  return (
    <div>
        <h1 style={{cursor: "pointer"}} onClick={handleClick} >Accordion Header</h1>
        <hr />
        { isShow &&
            <p>I'm accordion</p>
        }
    </div>
  )
}

export default Accordion