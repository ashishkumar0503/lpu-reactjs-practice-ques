// Using api fetch the data

import React, { useEffect, useState } from 'react'

const API = () => {

    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setRecords(data))
        .catch(err => console.log(err))
    }, []);

  return (
    <div>
        <ul>Fetched data from an API
            {
                records.map((list, index) => (
                    <li key={index} >{list.id} | {list.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default API