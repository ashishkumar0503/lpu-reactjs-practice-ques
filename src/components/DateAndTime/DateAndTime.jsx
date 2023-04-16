import { useState } from "react";

// Display current date and time in JSX in React JS.
// Use two buttons for date and time.
// While clicking it displays the date and time.

// Also refresh the time on clicking Refresh Button

const DateAndTime = () => {

    let myDate = new Date().toLocaleDateString();
    let myTime = new Date().toLocaleTimeString();

    const [date, setDate] = useState(myDate);
    const [time, setTime] = useState(myTime);
    const [displayDate, setDisplayDate] = useState(false);
    const [displayTime, setDisplayTime] = useState(false);

    const showDate = () => {
        myDate = new Date().toLocaleDateString();
       setDate(myDate);
       setDisplayDate(!displayDate);
    }

    const showTime = () => {
        myTime = new Date().toLocaleTimeString();
        setTime(myTime);
        setDisplayTime(!displayTime);
    }

    const refreshTime = () => {
        myTime = new Date().toLocaleTimeString();
        setTime(myTime);
    }

  return (
    <div>
        <h1>Display current date and time</h1>
        { displayDate &&
            <h3>Today date is: { date }</h3>
        }
        <button onClick={showDate}>Display Date</button><br/>
        { displayTime &&
            <h3>Current time is: { time }</h3>
        }
        <button onClick={showTime}>Display Time</button><br/>
        <button onClick={refreshTime}>Refresh Time</button>
    </div>
  )
}

export default DateAndTime