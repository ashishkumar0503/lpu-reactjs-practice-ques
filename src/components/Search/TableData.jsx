import React from 'react'
import Search from './Search'

const TableData = () => {

    const data = [
        { name: 'Apple', description: 'A fruit' },
        { name: 'Banana', description: 'Another fruit' },
        { name: 'Carrot', description: 'A vegetable' },
        { name: 'Dog', description: 'An animal' },
      ];

  return (
    <div>
        <h1>Table</h1>
        <Search data={data} />
  </div>
  )
}

export default TableData