import React, { useContext } from 'react'
import { UserContext } from './Parent'

const ChildComp2 = () => {

    const user = useContext(UserContext)

  return (
    <div>
        <h3>I'm child accessing {user} parent</h3>
    </div>
  )
}

export default ChildComp2