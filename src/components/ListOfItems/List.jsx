import React, { useState } from 'react'

const List = () => {

    const [isClick, setIsClick] = useState(false);

    const showList = () => {
        setIsClick(!isClick);
    }

  return (
    <div>
        <button onClick={showList} >Display list of items</button>
        <ul>
            { isClick &&
                <div>
                    <li>Apple</li>
                    <li>Mango</li>
                    <li>Litchi</li>
                </div>
            }
        </ul>
    </div>
  )
}

export default List