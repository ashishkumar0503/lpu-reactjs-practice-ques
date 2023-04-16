import { useState } from "react"

// Create a login form with three entries. When you click on the
// submit button on the form it must show form is submitted
// and all the values that you are storing in the fields must be 
// shown on the header.

const Forms = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showName, setShowName] = useState("");
    const [showEmail, setShowEmail] = useState("");
    const [showPass, setShowPass] = useState("");
    
    const handleName = (e) => {
        setName(e.target.value);
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    
    const handleSubmit = () => {
        alert("Form is submitted");
        setShowName(name);
        setShowEmail(email);
        setShowPass(password);
    }


  return (
    <div>
            <h1>{showName} {showEmail} {showPass} </h1>
            Enter Name: <input onChange={handleName} type="text" placeholder="Enter Name" /><br/>
            Enter Email: <input onChange={handleEmail} type="email" placeholder="Enter Email" /><br/>
            Enter Password: <input onChange={handlePassword} type="password" placeholder="Enter Password" /><br/>
            <button onClick={handleSubmit}>Submit</button>
            
    </div>
  )
}

export default Forms