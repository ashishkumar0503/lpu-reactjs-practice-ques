import React, { useState, useRef } from 'react';

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 10);
    }, 10);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
    setLaps([]);
    clearInterval(intervalRef.current);
  };

  const lapTimer = () => {
    setLaps(prevLaps => [...prevLaps, time]);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <button onClick={isRunning ? pauseTimer : startTimer}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={lapTimer}>Lap</button>
      <ul>
        {laps.map((lapTime, index) => (
          <li key={index}>{formatTime(lapTime)}</li>
        ))}
      </ul>
    </div>
  );
}

export default StopWatch;