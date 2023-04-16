import { useState } from "react";
import "./counter.css";

// Write a code for incrementing and decrementing
// the state variable on button clicked in react js

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

  return (
    <div className="container">
        <h1>{count}</h1>
        <div className="buttons">
            <button onClick={increment}>+</button>
            <button disabled={count <= 0} onClick={decrement}>-</button>
        </div>
    </div>
  )
}

export default Counter