import React, { useState, createContext } from 'react'
import ChildComp1 from './ChildComp1';
import ChildComp2 from './ChildComp2';

const UserContext = createContext();

const Parent = () => {

    const [user, setUser] = useState('Ashish')

  return (
    <UserContext.Provider value={user}>
        <h1>Hello {user}</h1>
        <ChildComp1/>
        <ChildComp2/>
    </UserContext.Provider>
  )
}

export default Parent
export {UserContext}