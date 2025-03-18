import React from 'react';
import '../styles/Display.css';

const Display = ({ value, operator }) => {
  return (
    <div className="calculator-display">
      <div className="operator-indicator">{operator}</div>
      <div className="display-value">{value}</div>
    </div>
  );
};

export default Display;