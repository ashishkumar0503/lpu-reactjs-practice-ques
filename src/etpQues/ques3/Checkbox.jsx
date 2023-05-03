import React, { useState } from 'react'

// Write a react code to display a checklist with multiple options
// that can select and the selected options are dynamically displayed on the screen

const Checkbox = () => {

    const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
    { id: 4, label: 'Option 4' },
    { id: 5, label: 'Option 5' }
  ];

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(selectedOption => selectedOption !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <h2>Checklist</h2>
      <ul>
        {options.map(option => (
          <li key={option.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionClick(option)}
              />
              {option.label}
            </label>
          </li>
        ))}
      </ul>
      <div>
        <h3>Selected options:</h3>
        {selectedOptions.length > 0 ? (
          <ul>
            {selectedOptions.map(option => (
              <li key={option.id}>{option.label}</li>
            ))}
          </ul>
        ) : (
          <p>No options selected.</p>
        )}
      </div>
    </div>
  );
}

export default Checkbox