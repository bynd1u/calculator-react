import React from 'react';
import Button from './Button';
import '../styles/Keypad.css';

const Keypad = ({ onDigitInput, onDecimalInput, onClear, onToggleSign, onOperator }) => {
  return (
    <div className="calculator-keypad">
      <div className="keypad-row">
        <Button onClick={onClear} className="function-button">C</Button>
        <Button onClick={onToggleSign} className="function-button">+/-</Button>
        <Button onClick={() => onOperator('%')} className="function-button">%</Button>
        <Button onClick={() => onOperator('/')} className="operator-button">÷</Button>
      </div>
      
      <div className="keypad-row">
        <Button onClick={() => onDigitInput(7)}>7</Button>
        <Button onClick={() => onDigitInput(8)}>8</Button>
        <Button onClick={() => onDigitInput(9)}>9</Button>
        <Button onClick={() => onOperator('*')} className="operator-button">×</Button>
      </div>
      
      <div className="keypad-row">
        <Button onClick={() => onDigitInput(4)}>4</Button>
        <Button onClick={() => onDigitInput(5)}>5</Button>
        <Button onClick={() => onDigitInput(6)}>6</Button>
        <Button onClick={() => onOperator('-')} className="operator-button">-</Button>
      </div>
      
      <div className="keypad-row">
        <Button onClick={() => onDigitInput(1)}>1</Button>
        <Button onClick={() => onDigitInput(2)}>2</Button>
        <Button onClick={() => onDigitInput(3)}>3</Button>
        <Button onClick={() => onOperator('+')} className="operator-button">+</Button>
      </div>
      
      <div className="keypad-row">
        <Button onClick={() => onDigitInput(0)} className="zero-button">0</Button>
        <Button onClick={onDecimalInput}>.</Button>
        <Button onClick={() => onOperator('=')} className="operator-button">=</Button>
      </div>
    </div>
  );
};

export default Keypad;