import React, { useEffect, useState } from 'react'
import Timer from './Timer'
import ControlButtons from './ControlButtons'
import "./stopwatch.css";

const StopWatch = () => {

    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
      };
    
  return (
    <div className='stop-watch'>
        <Timer time = {time} />
        <ControlButtons
            active = {isActive}
            isPaused = {isPaused}
            handleStart = {handleStart}
            handlePauseResume = {handlePauseResume}
            handleReset = {handleReset}
        />
    </div>
  )
}

export default StopWatch

// import React, { useState } from 'react';

// const StopWatch = () => {
//   const [time, setTime] = useState(0);
//   const [laps, setLaps] = useState([]);

//   function startTimer() {
//     setInterval(() => {
//       setTime((prevTime) => prevTime + 1);
//     }, 1000);
//   }

//   function stopTimer() {
//     clearInterval(startTimer);
//   }

//   function resetTimer() {
//     setTime(0);
//     setLaps([]);
//   }

//   function addLap() {
//     setLaps((prevLaps) => [...prevLaps, time]);
//   }

//   return (
//     <div>
//       <h1>{time}</h1>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//       <button onClick={resetTimer}>Reset</button>
//       <button onClick={addLap}>Lap</button>
//       <ul>
//         {laps.map((lapTime) => (
//           <li>{lapTime}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default StopWatch;