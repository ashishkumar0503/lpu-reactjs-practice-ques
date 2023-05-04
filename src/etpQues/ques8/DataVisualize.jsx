import React, { useEffect, useState } from 'react'
import axios from 'axios';

// Create a dashboard that visualizes data from an API (You may consider fake REST API)

const DataVisualize = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/users',
            );
            setData(result.data);
        };
        fetchData();
    }, []);

    console.log(data);

  return (
    <div>
        <h1>Dashboard</h1>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id} >
                        <td>{item.username}</td>
                        <td>{item.name}</td>
                        <td>{item.address.city}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default DataVisualize