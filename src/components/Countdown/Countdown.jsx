import React, { useState, useEffect, useRef } from 'react';

function Countdown() {
  const [totalSeconds, setTotalSeconds] = useState(3600);
  const [isActive, setIsActive] = useState(false);
  const countRef = useRef(null);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setTotalSeconds(3600);
    setIsActive(false);
  };

  const getTimeString = () => {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    return `${hours < 10 ? '0' + hours : hours}:${
      minutes < 10 ? '0' + minutes : minutes
    }:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  useEffect(() => {
    if (isActive && totalSeconds > 0) {
      countRef.current = setInterval(() => {
        setTotalSeconds((totalSeconds) => totalSeconds - 1);
      }, 1000);
    } else if (totalSeconds === 0) {
      clearInterval(countRef.current);
    }
    return () => clearInterval(countRef.current);
  }, [isActive, totalSeconds]);

  return (
    <div>
      <h2>Countdown Timer: {getTimeString()}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Countdown;
