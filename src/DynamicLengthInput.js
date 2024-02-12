import React, { useState } from 'react';

const DynamicLengthInput = ({ maxLength }) => {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setInputValue(e.target.value);
    }
  };

  console.log(inputValue);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      maxLength={maxLength}
    />
  );
};

export default DynamicLengthInput;