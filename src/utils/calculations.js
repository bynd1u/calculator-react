export const performCalculation = (firstValue, secondValue, operator) => {
    switch (operator) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      case '%':
        return (firstValue / 100) * secondValue;
      default:
        return secondValue;
    }
  };