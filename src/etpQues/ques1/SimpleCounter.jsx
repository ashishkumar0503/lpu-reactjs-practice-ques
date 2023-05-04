import React, { useState } from 'react'

// Create a simple counter using react which increments or decrements count dynamically as the user clicks on the button

const SimpleCounter = () => {

    const [count, setCount] = useState(0);

    const handleDecrementCount = () => {
        if (count <= 0) {
            setCount(0);
        } else {
            setCount(prevCount => prevCount - 1);
        }
    }

    const handleIncrementCount = () => {
        setCount(prevCount => prevCount + 1);
    }

  return (
    <div>
        <h3>Counter</h3>
        <button onClick={handleDecrementCount} >-</button>
        <span>{count}</span>
        <button onClick={handleIncrementCount} >+</button>
    </div>
  )
}

export default SimpleCounter