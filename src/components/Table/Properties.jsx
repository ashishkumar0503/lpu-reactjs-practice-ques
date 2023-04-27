import React from 'react'
import Table from './Table';

// Using properties make one table with rows and columns

const Properties = () => {

    const columns = ['Name', 'Age', 'Gender'];
    const rows = [
        ['Ashish', 21, 'Male'],
        ['Happy', 22, 'Male'],
        ['Rahul', 20, 'Male'],
    ];

  return (
    <div><Table columns={columns} rows={rows} /></div>
  )
}

export default Properties