import React from 'react'

// Write a react code to print each item from the list on the page using
// Array.map() function to display each item on the page

const DisplayList = () => {

    const data = [
        {name: 'Ashish', gender: 'Male', age: 21},
        {name: 'Happy', gender: 'Male', age: 22},
        {name: 'Rahul', gender: 'Male', age: 19},
    ]

  return (
    <div>
        <h1>Display List</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {data.map((value, index) => (
                        <tr>
                            <td>{value.name}</td>
                            <td>{value.gender}</td>
                            <td>{value.age}</td>
                        </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default DisplayList