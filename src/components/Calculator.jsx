import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import { performCalculation } from '../utils/calculations';
import '../styles/Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleDigitInput = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const handleDecimalInput = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const handleToggleSign = () => {
    setDisplay(display.startsWith('-') ? display.substring(1) : '-' + display);
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (prevValue === null) {
      setPrevValue(inputValue);
    } else if (operator) {
      const result = performCalculation(prevValue, inputValue, operator);
      setPrevValue(result);
      setDisplay(String(result));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  return (
    <div className="calculator">
      <Display value={display} operator={operator}/>
      <Keypad 
        onDigitInput={handleDigitInput}
        onDecimalInput={handleDecimalInput}
        onClear={handleClear}
        onToggleSign={handleToggleSign}
        onOperator={handleOperator}
      />
    </div>
  );
};

export default Calculator;