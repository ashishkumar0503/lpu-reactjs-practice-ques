import React, { useState } from 'react'

// Demonstrate form validation in react. Whenever an input control is left blank,
// message must display on the web page. For example, if you are applying validation
// on "Name" field, then it must display, "Name is mandatory"

const FormValidate = () => {

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);

    const handleNameChange = (e) => {
        let n = e.target.value;
        if (n === '') {
            setNameError(true);
        } else {
            setNameError(false);
        }
        setName(n);
    }

  return (
    <div>
        <form action="">
            <input type="text" value={name} onChange={handleNameChange} placeholder='Enter name' />
            {nameError && <p style={{color: 'red'}}>Name is mandatory</p>}
        </form>
    </div>
  )
}

export default FormValidate