import React, { useState } from 'react'

// Display the color button and message of the submit button

const ColorButton = () => {

    const [isProcessing, setIsProcessing] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsProcessing(true);

        setTimeout(() =>{
            setIsProcessing(false);
        }, 2000);

        setIsClicked(true);
    };

  return (
    <div>
        <button style={{background: isClicked ? 'red' : '', color: isClicked ? 'white' : 'black'}} disabled={isProcessing} onClick={handleClick} >
            {isProcessing ? 'Processing...' : 'Submit'}
        </button>
    </div>
  )
}

export default ColorButton