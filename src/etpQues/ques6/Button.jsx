import React, { useState } from 'react'

const Button = () => {

    const [isDisabled, setIsDisabled] = useState(false);

    const handleDisableClick = () => {
        setIsDisabled(!isDisabled);
    }

  return (
    <div>
        <button disabled={isDisabled} >Click me</button>
        <br /><br />
        <button onClick={handleDisableClick} >
            {isDisabled ? 'Enable Button' : 'Disable Button'}
        </button>
    </div>
  )
}

export default Button