import React from 'react'

// Display the following list using createElement()

const List = () => {
  return (
    React.createElement('ul', {className: 'list'},
        React.createElement('li', {id: '1'}, 'Michael Jackson'),
        React.createElement('li', {id: '2'}, 'The Weekend'),
        React.createElement('li', {id: '3'}, 'Shakira'),
        React.createElement('li', {id: '4'}, 'Britney Spears'),
    )
  )
}

export default List