import React, { useState } from 'react'
import FormTable from './FormTable';

const TableData = () => {

    const [items, setItems] = useState([]);

    const addItem = (newItem) => {
      setItems([...items, newItem]);
    };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <FormTable addItem={addItem} />
    </div>
  )
}

export default TableData