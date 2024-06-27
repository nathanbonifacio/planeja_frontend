import React from 'react';
import './Tooltip.css'

const Tooltip = ({ message, show }) => {
  return (
    <div className={`tooltip ${show ? 'show' : ''}`}>
      {message}
    </div>
  );
};

export default Tooltip;