import React, { useEffect, useState } from 'react'

// Write a react code to collect data from rest API using fetch in
// javascript combined with useEffect() to load the content on page render

const Fetch = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(records => setData(records))
        .catch(err => console.log(err));
    }, []);

  return (
    <div>
        <h2>Fetched Data from API</h2>
        <ul> Names:
            {data.map(record => <li key={record.id}>{record.name}</li>)}
        </ul>
    </div>
  )
}

export default Fetch