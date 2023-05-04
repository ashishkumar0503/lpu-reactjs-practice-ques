import React, { useState } from 'react'

// Create a form that takes in a name and email address and displays
// the entered data below the form

const FormsData = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsClicked(true);
    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter name' /><br /><br />
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter email' /><br /><br />
            <button>Display Data</button>
            {isClicked &&
                <div>
                    <p>Entered Name: {name}</p>
                    <p>Entered Email: {email}</p>
                </div>
            }
        </form>
    </div>
  )
}

export default FormsData