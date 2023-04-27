import React, { useState } from 'react'
import "./digitalClock.css";

const DigitalClock = () => {

    let time = new Date().toLocaleTimeString();
    let date = new Date().toDateString();

    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);

  return (
    <div className='container'>
        <div className="clock">
            <h1>{ currentTime }</h1>
            <p>{ date }</p>
        </div>
    </div>
  )
}

export default DigitalClock