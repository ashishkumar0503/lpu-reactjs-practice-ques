import React, { useState } from 'react'

// Create a react code to add two numbers. 
// Insert two textboxes and a button, after inserting values in textboxes, 
// user should be able to add two numbers with click on button

const AddNum = () => {

    const [result, setResult] = useState();
    const [firstNum, setFirstNum] = useState();
    const [secondNum, setSecondNum] = useState();

    const handleAdd = () => {
        setResult(Number(firstNum) + Number(secondNum));
    }

  return (
    <div>
        <h3>Add a Number</h3>
        <input type="number" onChange={(e) => setFirstNum(e.target.value)} value={firstNum} name="first" id="first" placeholder='Enter first number' /><br /><br />
        <input type="number" onChange={(e) => setSecondNum(e.target.value)} value={secondNum} name="second" id="second" placeholder='Enter second number' /><br /><br />
        <button onClick={handleAdd} >Add</button>
        <p>Result: {result}</p>
    </div>
  )
}

export default AddNum