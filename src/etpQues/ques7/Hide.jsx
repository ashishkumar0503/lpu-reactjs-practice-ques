import React, { useState } from 'react'

// Create a react code to hide element on the screen with the click of a button

const Hide = () => {

    const [isHide, setIsHide] = useState(true);

    const handleHide = () => {
        setIsHide(!isHide);
    }

  return (
    <div>
        {isHide && <h3>Hey there</h3>}
        <button onClick={handleHide} >{isHide ? 'Hide' : 'Show'}</button>
    </div>
  )
}

export default Hide