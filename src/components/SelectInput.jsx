import React from 'react';

function SelectInput({ label, value,onChange, options }) {
  return (
    <div>
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SelectInput;