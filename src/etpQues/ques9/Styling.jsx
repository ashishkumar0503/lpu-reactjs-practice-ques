import React from 'react'
import "../../App.css";
import styled from 'styled-components'

// Demonstrate different types of CSS styling in react

const StyledDiv = styled.p`
    background-color: green;
    color: white;
`

const Styling = () => {

    const heading = {
        color: 'pink'
    }

  return (
    <div>
        <p style={{backgroundColor: 'blue', color: 'white'}} >I'm a Inline Styling</p>
        <p className='ext' >I'm a External Styling</p>
        <h3 style={heading} >I'm a Internal Styling</h3>
        <StyledDiv>
            This is a styled div.
        </StyledDiv>
    </div>
  )
}

export default Styling