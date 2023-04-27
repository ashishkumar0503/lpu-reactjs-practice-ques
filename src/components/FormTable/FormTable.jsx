import React, { useState } from 'react'

// Create a react form to make a new item in the table

const FormTable = (props) => {

    const [itemData, setItemData] = useState({ name: '', description: '' });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setItemData({ ...itemData, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.addItem(itemData);
      setItemData({ name: '', description: '' });
    };
  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={itemData.name} onChange={handleChange} />

      <label htmlFor="description">Description:</label>
      <textarea name="description" value={itemData.description} onChange={handleChange} />

      <button type="submit">Add Item</button>
    </form>
  )
}

export default FormTable