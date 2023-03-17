import React from "react";

export default function Switch({ handleClick }) {
  return (
    <div>
      <input
        onChange={handleClick}
        className='react-switch-checkbox'
        id={`react-switch-new`}
        type='checkbox'
      />
      <label className='react-switch-label' htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
    
      </label>
    </div>
  );
}

