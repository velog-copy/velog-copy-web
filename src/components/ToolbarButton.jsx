import React from 'react';

function ToolbarButton({ children, value, onClick }) {
  return (
    <button className='Tool' value={value} onClick={onClick}>
      {children}
    </button>
  );
}

export default ToolbarButton;