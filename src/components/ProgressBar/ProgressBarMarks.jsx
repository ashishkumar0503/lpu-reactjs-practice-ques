import React, { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
const ProgressBarMarks = () => {

    const [marks, setMarks] = useState([85, 90, 72, 65, 92]);

    const getAverage = () => {
        const sum = marks.reduce((acc, curr) => acc + curr, 0);
        return sum / marks.length;
    };

    const getPercentage = (value) => {
        const max = Math.max(...marks);
        return (value / max) * 100;
    }

  return (
    <div>
        <h2>Student Marks Analysis</h2>
        <ul>
            {marks.map((mark, index) => (
                <div>
                    <li key={index} >Student {index + 1}: {mark}</li>
                    <ProgressBar now={getPercentage(mark)} label={`${mark}%`} />
                </div>
            ))}
        </ul>
        <p>Average: {getAverage()}</p>
        <ProgressBar now={getPercentage(getAverage())} label={`${getAverage()}%`} />
    </div>
  )
}

export default ProgressBarMarks