import React, { useState } from 'react'

// Write a react code to build a simple search filter functionality to display a
// on the search query entered by the user

const SearchList = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [list, setList] = useState([
    'Michael Jackson',
    'The Weekend',
    'Shakira',
    'Britney Spears',
  ]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setList(list);
  };

  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {filteredList.length ? (
        <ul>
            {filteredList.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
      ) : (
            <p style={{color: "red"}} >Item not found</p>
      )}
    </div>
  );
};

export default SearchList