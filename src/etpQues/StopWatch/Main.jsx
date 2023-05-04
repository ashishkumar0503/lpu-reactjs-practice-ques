import React, { useState } from 'react'
import StopWatch from './StopWatch';

const Main = () => {

    const [no, setNo] = useState([0]);

    const NewTimer = () => {
        setNo([...no, 0]);
    }

  return (
    <div>
        <button onClick={NewTimer} >New Timer</button>
        <div className="child">
            {no.map(() => <StopWatch/>)}
        </div>
    </div>
  )
}

export default Main