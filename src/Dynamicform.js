import React, { useState } from 'react';

const Dynamicform = ({ formData }) => {

  const [formState, setFormState] = useState({});

  const handleInputChange = (fieldName, value) => {
    setFormState({
      ...formState,
      [fieldName]: value,
    });
  };

  const handleDropdownChange = (fieldName, value) => {
    setFormState({
      ...formState,
      [fieldName]: value,
    });
  };

  const handleRadioChange = (fieldName, value) => {
    setFormState({
      ...formState,
      [fieldName]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.placeholder}>{field.placeholder}</label>
          {field.type === 'text' && (
            <input
              type="text"
              id={field.placeholder}
              name={field.placeholder}
              value={formState[field.placeholder] || ''}
              maxLength={field.length}
              onChange={(e) => handleInputChange(field.placeholder, e.target.value)}
            />
          )}
          {field.type === 'password' && (
            <input
              type="password"
              id={field.placeholder}
              name={field.placeholder}
              value={formState[field.placeholder] || ''}
              maxLength={field.length}
              onChange={(e) => handleInputChange(field.placeholder, e.target.value)}
            />
          )}
        {field.type === 'file' && (
            <input
              type="file"
              id={field.placeholder}
              name={field.placeholder}
              value={formState[field.placeholder] || ''}
              maxLength={field.length}
              onChange={(e) => handleInputChange(field.placeholder, e.target.value)}
            />
          )}
          {field.type === 'dropdown' && (
            <select
              id={field.placeholder}
              name={field.placeholder}
              value={formState[field.placeholder] || ''}
              onChange={(e) => handleDropdownChange(field.placeholder, e.target.value)}
            >
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          {field.type === 'radio' && (
            <div>
              {field.options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={field.placeholder}
                    value={option}
                    checked={formState[field.placeholder] === option}
                    onChange={() => handleRadioChange(field.placeholder, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Dynamicform